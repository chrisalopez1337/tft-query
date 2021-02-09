const MatchRoutes = require('../../lib/path-handler/matches.js');
const apiKey = require('../../config');
const { expect } = require('chai');

describe('Match Routes', () => {
    // Setup
    const payload = {
        puuid: 'vy9iRyl4SENb_sop5qRwuCmHqcV_YU1OKss9E8sbnLzNjA956jwHHfMvnBCx9DdCsSD6IK-gIrAj9g',
        matchId: 'NA1_3777912711',
    }
    const config = { region: 'NA', payload, apiKey };
    const matchRoutes = new MatchRoutes(config);

    it('Should return a valid route: byPuuidAndCount', () => {
        const path = matchRoutes.byPuuidAndCount();
        const expected = `https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/vy9iRyl4SENb_sop5qRwuCmHqcV_YU1OKss9E8sbnLzNjA956jwHHfMvnBCx9DdCsSD6IK-gIrAj9g/ids?count=20&api_key=${apiKey}`;
        expect(path).to.equal(expected);
    });

    it('Should return a valid route: byMatchId', () => {
        const path = matchRoutes.byMatchId();
        const expected = `https://americas.api.riotgames.com/tft/match/v1/matches/NA1_3777912711?api_key=${apiKey}`;
        expect(path).to.equal(expected);
    })
})
