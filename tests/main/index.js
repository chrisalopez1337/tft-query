const TftQuery = require('../../lib/src/index.js');
const apiKey = require('../../config');
const axios = require('axios');
const { expect } = require('chai');
const assert = require('assert');

describe('Main Request Client: TftQuery', async () => {
    const batch = [
    "NA1_3787021738",
    "NA1_3785858405"
    ];
    const payload = {
        summonerName: 'scarra',
        accountId: 'HZRCRfoL7vf8PmW9DFGeQnZx05AFW6dNgxP1t-N3Xw',
        puuid: 'vy9iRyl4SENb_sop5qRwuCmHqcV_YU1OKss9E8sbnLzNjA956jwHHfMvnBCx9DdCsSD6IK-gIrAj9g',
        summonerId: 'IFg_bFm3i52CJVxBvKBuqQmmZ_SqEq52nnInd-PAtfw',
        matchId: 'NA1_3787021738',
        leagueId: '175c4fd7-5a8f-4006-a2b4-230013c913b6',
        tier: 'DIAMOND',
        division: 'I',
        matchIds: batch,
    }

    const config = {
        region: 'NA',
        payload,
        apiKey,
        useRedis: false,
        redisConfig: false,
    }
    
    const client = new TftQuery(config);

    it('Should return valid data: getSummonerBySummonerName', async () => {
        const actual = await client.getSummonerBySummonerName();
        const path = `https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/scarra?api_key=${apiKey}`;
        const { data } = await axios.get(path);
        assert.deepEqual(data, actual);
    });

    it('Should return valid data: getSummonerByAccountId', async () => {
        const actual = await client.getSummonerByAccountId();
        const path = `https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-account/HZRCRfoL7vf8PmW9DFGeQnZx05AFW6dNgxP1t-N3Xw?api_key=${apiKey}`;
        const { data } = await axios.get(path);
        assert.deepEqual(data, actual);
    });

    it('Should return valid data: getSummonerByPuuid', async () => {
        const actual = await client.getSummonerByPuuid();
        const path = `https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-puuid/vy9iRyl4SENb_sop5qRwuCmHqcV_YU1OKss9E8sbnLzNjA956jwHHfMvnBCx9DdCsSD6IK-gIrAj9g?api_key=${apiKey}`;
        const { data } = await axios.get(path);
        assert.deepEqual(data, actual);
    });

    it('Should return valid data: getSummonerBySummonerId', async () => {
        const actual = await client.getSummonerBySummonerId();
        const path = `https://na1.api.riotgames.com/tft/summoner/v1/summoners/IFg_bFm3i52CJVxBvKBuqQmmZ_SqEq52nnInd-PAtfw?api_key=${apiKey}`;
        const { data } = await axios.get(path);
        assert.deepEqual(data, actual);
    });

    it('Should return valid data: getMatchByPuuidAndCount', async () => {
        const actual = await client.getMatchByPuuidAndCount();
        const path = `https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/vy9iRyl4SENb_sop5qRwuCmHqcV_YU1OKss9E8sbnLzNjA956jwHHfMvnBCx9DdCsSD6IK-gIrAj9g/ids?count=20&api_key=${apiKey}`;
        const { data } = await axios.get(path);
        assert.deepEqual(data, actual);
    });

    it('Should return valid data: getMatchByMatchId', async () => {
        const actual = await client.getMatchByMatchId();
        const path = `https://americas.api.riotgames.com/tft/match/v1/matches/NA1_3787021738?api_key=${apiKey}`;
        const { data } = await axios.get(path);
        assert.deepEqual(data, actual);
    });

    it('Should return valid data: getChallengerLeague', async () => {
        const actual = await client.getChallengerLeague();
        const path = `https://na1.api.riotgames.com/tft/league/v1/challenger?api_key=${apiKey}`;
        const { data } = await axios.get(path);
        assert.deepEqual(data.name, actual.name);
    });

    it('Should return valid data: getMasterLeague', async () => {
        const actual = await client.getMasterLeague();
        const path = `https://na1.api.riotgames.com/tft/league/v1/master?api_key=${apiKey}`;
        const { data } = await axios.get(path);
        assert.deepEqual(data.name, actual.name);
    });

    it('Should return valid data: getGrandmasterLeague', async () => {
        const actual = await client.getGrandMasterLeague();
        const path = `https://na1.api.riotgames.com/tft/league/v1/grandmaster?api_key=${apiKey}`;
        const { data } = await axios.get(path);
        assert.deepEqual(data.name, actual.name);
    });

    it('Should return valid data: getLeagueBySummonerId', async () => {
        const actual = await client.getLeagueBySummonerId();
        const path = `https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/IFg_bFm3i52CJVxBvKBuqQmmZ_SqEq52nnInd-PAtfw?api_key=${apiKey}`;
        const { data } = await axios.get(path);
        assert.deepEqual(data, actual);
    })

    it('Should return valid data: getLeaugeByLeagueId', async () => {
        const actual = await client.getLeagueByLeagueId();
        const path = `https://na1.api.riotgames.com/tft/league/v1/leagues/175c4fd7-5a8f-4006-a2b4-230013c913b6?api_key=${apiKey}`;
        const { data } = await axios.get(path);
        assert.deepEqual(data.name, actual.name);
    })

    it('Should return valid data: getLeagueByTierAndDivision', async () => {
        const actual = await client.getLeagueByTierAndDivision();
        const path = `https://na1.api.riotgames.com/tft/league/v1/entries/DIAMOND/I?page=1&api_key=${apiKey}`;
        const { data } = await axios.get(path);
        // This test is near impossible due to the timing.
        assert.deepEqual(data.name, actual.name);
    })


    it('Should return a batch of data: getAllInfoBySummonerName', async () => {
        const actual = await client.getAllInfoBySummonerName();
        console.log(actual);
    })
})
