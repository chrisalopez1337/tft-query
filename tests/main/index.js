const TftQuery = require('../../lib/src/index.js');
const apiKey = require('../../config');
const axios = require('axios');
const { expect } = require('chai');
const assert = require('assert');

describe('Main Request Client: TftQuery', async () => {
    const payload = {
        summonerName: 'scarra',
        accountId: 'HZRCRfoL7vf8PmW9DFGeQnZx05AFW6dNgxP1t-N3Xw',
        puuid: 'vy9iRyl4SENb_sop5qRwuCmHqcV_YU1OKss9E8sbnLzNjA956jwHHfMvnBCx9DdCsSD6IK-gIrAj9g',
        summonerId: 'IFg_bFm3i52CJVxBvKBuqQmmZ_SqEq52nnInd-PAtfw',
        matchId: 'NA1_3787021738',
    }
    
    const client = new TftQuery('NA', payload, apiKey, true, false);

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
    })
})
