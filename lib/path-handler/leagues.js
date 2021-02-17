require('dotenv').config();

class LeagueRoutes {
    constructor(config) {
        const { region, payload, apiKey } = config;
        this.region = region;
        this.payload = payload || {};
        this.apiKey = apiKey || process.env.API_KEY;
        this.formatRegion();
    }

    formatRegion() {
        // Will add more later
        const regions = 
            {
                NA: 'na1',
            }
        this.region = regions[this.region];
    }

    challenger() {
        return `https://${this.region}.api.riotgames.com/tft/league/v1/challenger?api_key=${this.apiKey}`;
    }

    grandmaster() {
        return `https://${this.region}.api.riotgames.com/tft/league/v1/grandmaster?api_key=${this.apiKey}`;
    }

    master() {
        return `https://${this.region}.api.riotgames.com/tft/league/v1/master?api_key=${this.apiKey}`;
    }

    bySummonerId() {
        const { summonerId } = this.payload;
        const path = `https://${this.region}.api.riotgames.com/tft/league/v1/entries/by-summoner/${summonerId}?api_key=${this.apiKey}`;
        return path;
    }

    byTierAndDivision() {
        const { tier, division, page } = this.payload;
        const pageNumber = page || 1;
        const path = `https://${this.region}.api.riotgames.com/tft/league/v1/entries/${tier}/${division}?page=${pageNumber}&api_key=${this.apiKey}`;
        return path;
    }

    byLeagueId() {
        const { leagueId } = this.payload;
        const path = `https://${this.region}.api.riotgames.com/tft/league/v1/leagues/${leagueId}?api_key=${this.apiKey}`;
        return path;
    }
}

module.exports = LeagueRoutes;
