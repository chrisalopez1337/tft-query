const SummonerRoutes = require('../../lib/path-handler/summoners.js');
const apiKey = require('../../config');
const { expect } = require('chai');

describe('Summoner Routes', () => {
    // Setup
    const payload = {
        summonerName: 'scarra',
        accountId: 'HZRCRfoL7vf8PmW9DFGeQnZx05AFW6dNgxP1t-N3Xw',
        summonerId: 'IFg_bFm3i52CJVxBvKBuqQmmZ_SqEq52nnInd-PAtfw',
        puuid: 'vy9iRyl4SENb_sop5qRwuCmHqcV_YU1OKss9E8sbnLzNjA956jwHHfMvnBCx9DdCsSD6IK-gIrAj9g'
    }
    const config = { region: 'NA', payload, apiKey };
    const summonerRoutes = new SummonerRoutes(config);
    
    it('Should return a valid route: bySummonerName', () => {
        const path = summonerRoutes.bySummonerName();
        const expected = `https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/scarra?api_key=${apiKey}`
        expect(path).to.equal(expected);
    });

    it('Should return a valid route: byAccountId', () => {
        const path = summonerRoutes.byAccountId();
        const expected = `https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-account/HZRCRfoL7vf8PmW9DFGeQnZx05AFW6dNgxP1t-N3Xw?api_key=${apiKey}`;
        expect(path).to.equal(expected);
    });

    it('Should return a valid route: byPuuid', () => {
        const path = summonerRoutes.byPuuid();
        const expected = `https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-puuid/vy9iRyl4SENb_sop5qRwuCmHqcV_YU1OKss9E8sbnLzNjA956jwHHfMvnBCx9DdCsSD6IK-gIrAj9g?api_key=${apiKey}`;
        expect(path).to.equal(expected);
    });

    it('Should return a valid route: bySummonerId', () => {
        const path = summonerRoutes.bySummonerId();
        const expected = `https://na1.api.riotgames.com/tft/summoner/v1/summoners/IFg_bFm3i52CJVxBvKBuqQmmZ_SqEq52nnInd-PAtfw?api_key=${apiKey}`;
        expect(path).to.equal(expected);
    });
})
