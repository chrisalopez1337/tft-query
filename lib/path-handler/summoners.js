require('dotenv').config();

class SummonerRoutes {
    constructor(config) {
        const { region, payload, apiKey } = config;
        this.region = region;
        this.payload = payload;
        this.apiKey = apiKey || process.env.API_KEY
        this.formatRegion();
    }

    formatRegion() {
        // Will add support to multiple regions soon.
        const regions = 
            {
                NA: 'na1',
            }
        this.region = regions[this.region];
    }
    
    bySummonerName() {
        const path = `https://${this.region}.api.riotgames.com/tft/summoner/v1/summoners/by-name/${this.payload.summonerName}?api_key=${this.apiKey}`;
        return path;
    }

    byAccountId() {
        const path = `https://${this.region}.api.riotgames.com/tft/summoner/v1/summoners/by-account/${this.payload.accountId}?api_key=${this.apiKey}`;
        return path;
    }

    byPuuid() {
        const path = `https://${this.region}.api.riotgames.com/tft/summoner/v1/summoners/by-puuid/${this.payload.puuid}?api_key=${this.apiKey}`;
        return path;
    }

    bySummonerId() {
        const path = `https://${this.region}.api.riotgames.com/tft/summoner/v1/summoners/${this.payload.summonerId}?api_key=${this.apiKey}`;
        return path;
    }

}

module.exports = SummonerRoutes;
