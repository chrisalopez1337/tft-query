// Bring in ApiKey
require('dotenv').config();
// Bring in all the path handlers
const LeagueRoutes = require('../path-handler/leagues.js');
const MatchRoutes = require('../path-handler/matches.js');
const SummonerRoutes = require('../path-handler/summoners.js');
// Bring in request client
const Request = require('../request-client/index.js');
// Bring in redis cache
const Redis = require('../cache/redis.js');

class TftQuery {
    constructor(region, payload, apiKey, useRedis = true, redisConfig = false) {
        // Set up redis client
        this.redis = false;
        if (useRedis) {
            this.redis = new Redis(redisConfig);
        }
        
        this.region = region;
        this.payload = payload;
        this.apiKey = apiKey || process.env.API_KEY;
    }

    // Summoner Paths
    async getSummonerBySummonerName() {
        try {
            // Pull out required config data
            const { region, payload, apiKey, redis } = this;
            const { summonerName } = payload;
            const config = { region, payload, apiKey };
            
            // Make sure the requested data exists.
            if (!summonerName) {
                throw new Error('The request getSummonerBySummonerName requires: <String> summonerName, in the payload.');
            }   

            // First check if redis has already cached the data.
            const key = `summoner-summonerByName-${summonerName}`;
            if (redis) {
                const data = await redis.get(key);
                if (data) {
                    return data;
                }
            }

            // If redis doesnt have it fetch and store the data.
            const pathHandler = new SummonerRoutes(config);
            const path = pathHandler.bySummonerName();
            
            const request = new Request(path);
            const data = await request.createRequest();
            
            // Store data and then return, awaiting the set may slow this down a bit going to look into refactoring.
            await redis.set(key, data);
            return data;
                
        } catch(err) {
            throw new Error(err);
        }
    }

    async getSummonerByAccountId() {
        try {
            // Pull out required config data
            const { region, payload, apiKey, redis } = this;
            const { accountId } = payload;
            const config = { region, payload, apiKey };
            
            // Make sure the requested data exists.
            if (!accountId) {
                throw new Error('The request getSummonerByAccountId requires: <String> accountId, in the payload.');
            }   

            // First check if redis has already cached the data.
            const key = `summoner-summonerByAccoutId-${accountId}`;
            if (redis) {
                const data = await redis.get(key);
                if (data) {
                    return data;
                }
            }

            // If redis doesnt have it fetch and store the data.
            const pathHandler = new SummonerRoutes(config);
            const path = pathHandler.byAccountId();
            
            const request = new Request(path);
            const data = await request.createRequest();
            
            // Store data and then return, awaiting the set may slow this down a bit going to look into refactoring.
            await redis.set(key, data);
            return data;
                
        } catch(err) {
            throw new Error(err);
        }
    }

    async getSummonerByPuuid() {
        try {
            // Pull out required config data
            const { region, payload, apiKey, redis } = this;
            const { puuid } = payload;
            const config = { region, payload, apiKey };
            
            // Make sure the requested data exists.
            if (!puuid) {
                throw new Error('The request getSummonerByPuuid requires: <String> puuid, in the payload.');
            }   

            // First check if redis has already cached the data.
            const key = `summoner-summonerByPuuid-${puuid}`;
            if (redis) {
                const data = await redis.get(key);
                if (data) {
                    return data;
                }
            }

            // If redis doesnt have it fetch and store the data.
            const pathHandler = new SummonerRoutes(config);
            const path = pathHandler.byPuuid();
            
            const request = new Request(path);
            const data = await request.createRequest();
            
            // Store data and then return, awaiting the set may slow this down a bit going to look into refactoring.
            await redis.set(key, data);
            return data;
                
        } catch(err) {
            throw new Error(err);
        }
    }

    async getSummonerBySummonerId() {
        try {
            // Pull out required config data
            const { region, payload, apiKey, redis } = this;
            const { summonerId } = payload;
            const config = { region, payload, apiKey };
            
            // Make sure the requested data exists.
            if (!summonerId) {
                throw new Error('The request getSummonerBySummonerId requires: <String> summonerId, in the payload.');
            }   

            // First check if redis has already cached the data.
            const key = `summoner-summonerBySummonerId-${summonerId}`;
            if (redis) {
                const data = await redis.get(key);
                if (data) {
                    return data;
                }
            }

            // If redis doesnt have it fetch and store the data.
            const pathHandler = new SummonerRoutes(config);
            const path = pathHandler.bySummonerId();
            
            const request = new Request(path);
            const data = await request.createRequest();
            
            // Store data and then return, awaiting the set may slow this down a bit going to look into refactoring.
            await redis.set(key, data);
            return data;
                
        } catch(err) {
            throw new Error(err);
        }
    }
}

module.exports = TftQuery;
