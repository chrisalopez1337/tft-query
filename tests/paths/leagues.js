const LeagueRoutes = require('../../lib/path-handler/leagues.js');
const apiKey = require('../../config');
const { expect } = require('chai');

describe('League Routes', () => {
    const payload = { 
        tier: 'DIAMOND',
        division: 'I',
        leagueId: '175c4fd7-5a8f-4006-a2b4-230013c913b6',
        summonerId: 'IFg_bFm3i52CJVxBvKBuqQmmZ_SqEq52nnInd-PAtfw'
    }
    const config = { region: 'NA', payload, apiKey };
    const leagueRoutes = new LeagueRoutes(config);

    it('Should return a valid route: grandmaster', () => {
        const path = leagueRoutes.grandmaster();
        const expected = `https://na1.api.riotgames.com/tft/league/v1/grandmaster?api_key=${apiKey}`;
        expect(path).to.equal(expected);
    });

    it('Should return a valid route: master', () => {
        const path = leagueRoutes.master();
        const expected = `https://na1.api.riotgames.com/tft/league/v1/master?api_key=${apiKey}`;
        expect(path).to.equal(expected);
    });

    it('Should return a valid route: challenger', () => {
        const path = leagueRoutes.challenger();
        const expected = `https://na1.api.riotgames.com/tft/league/v1/challenger?api_key=${apiKey}`;
        expect(path).to.equal(expected);
    });

    it('Should return a valid route: byLeagueId', () => {
        const path = leagueRoutes.byLeagueId();
        const expected = `https://na1.api.riotgames.com/tft/league/v1/leagues/175c4fd7-5a8f-4006-a2b4-230013c913b6?api_key=${apiKey}`;
        expect(path).to.equal(expected);
    });
    it('Should return a valid route: bySummonerId', () => {
        const path = leagueRoutes.bySummonerId();
        const expected = `https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/IFg_bFm3i52CJVxBvKBuqQmmZ_SqEq52nnInd-PAtfw?api_key=${apiKey}`;
        expect(path).to.equal(expected);
    });
    it('Should return a valid route: byTierAndDivision', () => {
        const path = leagueRoutes.byTierAndDivision();
        const expected = `https://na1.api.riotgames.com/tft/league/v1/entries/DIAMOND/I?page=1&api_key=${apiKey}`;
        expect(path).to.equal(expected);
    });
})
