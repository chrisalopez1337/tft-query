const TftQuery = require('../../lib/src/index.js');
const apiKey = require('../../config');
const axios = require('axios');
const { expect } = require('chai');
const assert = require('assert');

describe('Main Request Client: TftQuery', async () => {
    const payload = {
        summonerName: 'scarra'
    }
    
    const client = new TftQuery('NA', payload, apiKey, true, false);

    it('Should return valid data: getSummonerBySummonerName', async () => {
        const actual = await client.getSummonerBySummonerName();
        const path = `https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/scarra?api_key=${apiKey}`;
        const { data } = await axios.get(path);
        assert.deepEqual(data, actual);
    })
})
