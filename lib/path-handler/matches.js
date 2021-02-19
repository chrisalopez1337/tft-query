require('dotenv').config();

class MatchRoutes {
    constructor(config) {
        const { region, payload, apiKey } = config;
        this.region = region;
        this.payload = payload;
        this.apiKey = apiKey || process.env.API_KEY;
        this.formatRegion();
    }

    formatRegion() {
        // Will add the rest of the regions later
        const regions = 
            {
                NA: 'americas', 
            };
        this.region = regions[this.region];
    }

    byPuuidAndCount() {
        const { puuid, count } = this.payload;
        const matchCount = count || 20;
        const path = `https://${this.region}.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids?count=${matchCount}&api_key=${this.apiKey}`;
        return path;
    }

    byMatchId() {
        const { matchId } = this.payload;
        const path = `https://${this.region}.api.riotgames.com/tft/match/v1/matches/${matchId}?api_key=${this.apiKey}`;
        return path;
    }
}

module.exports = MatchRoutes;
