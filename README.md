# tft-query
An interface to interact with Riot's TFT Api. Supports native redis caching.

## How to install: `npm i tft-query`

## Basic start
```javascript
    const TftQuery = require('tft-query');
    
    const payload = { summonerName: 'scarra' };
    const region = 'NA';

    const config = {
        region, /* <String> */
        payload, /* <Object> See documentation for more info */
        yourApiKey, /* by default it will be process.env.API_KEY */
        useRedis, /* <Boolean> Default is true, set to false if you dont want to use redis. */
        redisConfig, /* <Object> Default is false, can pass custom redis config here */
    }
    
    const tftQuery = new TftQuery(config);    

    const asyncFunction = async () => {
        try {
            const data = await tftQuery.getSummonerBySummonerName();
            // do something with data...
        } catch(err) {
            throw new Error(err);
        }
    }
```

# Documentation

## The `config` Object.
```javascript
    const config = {
        region,
        payload,
        apiKey,
        useRedis,
        redisConfig
    }
    const tftQuery = new TftQuery(config);
```

### Argument #1: `region`
Currently there is only support for NA, will add more regions shortly.
```javascript
    // Data type: <String>
    const region = 'NA'
```

### Argument #2: `payload`
The payload object is our way of passing data to the requests. See each specific method for the required payload, however this is all the currently supported fields. `Refer to the official Riot API for more info on the data types`
```javascript
    // All the current payload key names and there data types
    const payload = {
        summonerName, /* <String> */
        puuid, /* <String> */
        accountId, /* <String> */
        summonerId, /* <String> */
        count, /* <Integer> */
        matchId, /* <String> */
        matchIds, /* <Array>:<String> */
        leagueId, /* <String> */
        tier, /* <String> */
        division, /* <String> */
    }
```

### Argument #3: `apiKey`
This is simply your riot API key. `Default param for this is process.env.API_KEY`

### Argument #4: `useRedis`
Set to `true` to enable and `false` to disable.

### Argument #5: `redisConfig`
This is where you can pass your custom redis config. By default it will be:
```javascript
    const defaultRedisOptions = {
        host: '127.0.0.1',
        port: 6379,
        keyPrefix: 'tft-'
    }
```

# Summoner Route Methods
These are in line with the TFT API documentation.

### `getSummonerBySummonerName()`
#### Required in payload: `summonerName: <String>`
#### Example Query
```javascript
    const payload = { summonerName: 'yourSummonerName' };
    const config = { region, payload, apiKey, useReids, redisConfig };
    const tftQuery = new TftQuery(config);
    
    const asyncFunc = async () => {
        try {
            const response = await tftQuery.getSummonerBySummonerName();
            // Do something with response...
        } catch(err) {
            throw new Error(err);
        }
    } 
```
#### Example Response
```javascript
    {
        id, /* <String> */
        accountId, /* <String> */
        puuid, /* <String> */
        name, /* <String> */
        profileIconId, /* <Integer> */
        revisionDate, /* <Date> */
        summonerLevel /* <Integer> */
    }
```

### `getSummonerByAccountId()`
#### Required in payload: `accountId: <String>`
#### Example Query
```javascript
    const payload = { accountId: 'yourAccountId' };
    const config = { region, payload, apiKey, useReids, redisConfig };
    const tftQuery = new TftQuery(config);
    
    const asyncFunc = async () => {
        try {
            const response = await tftQuery.getSummonerByAccountId();
            // Do something with response...
        } catch(err) {
            throw new Error(err);
        }
    } 
```
#### Example Response
```javascript
    {
        id, /* <String> */
        accountId, /* <String> */
        puuid, /* <String> */
        name, /* <String> */
        profileIconId, /* <Integer> */
        revisionDate, /* <Date> */
        summonerLevel /* <Integer> */
    }
```

### `getSummonerByPuuid()`
#### Required in payload: `puuid: <String>`
#### Example Query
```javascript
    const payload = { puuid: 'yourPuuid' };
    const config = { region, payload, apiKey, useReids, redisConfig };
    const tftQuery = new TftQuery(config);
    
    const asyncFunc = async () => {
        try {
            const response = await tftQuery.getSummonerByPuuid();
            // Do something with response...
        } catch(err) {
            throw new Error(err);
        }
    } 
```
#### Example Response
```javascript
    {
        id, /* <String> */
        accountId, /* <String> */
        puuid, /* <String> */
        name, /* <String> */
        profileIconId, /* <Integer> */
        revisionDate, /* <Date> */
        summonerLevel /* <Integer> */
    }
```

### `getSummonerBySummonerId()`
#### Required in payload: `summonerId: <String>`
#### Example Query
```javascript
    const payload = { summonerId: 'yourSummonerId' };
    const config = { region, payload, apiKey, useReids, redisConfig };
    const tftQuery = new TftQuery(config);
    
    const asyncFunc = async () => {
        try {
            const response = await tftQuery.getSummonerBySummonerId();
            // Do something with response...
        } catch(err) {
            throw new Error(err);
        }
    } 
```
#### Example Response
```javascript
    {
        id, /* <String> */
        accountId, /* <String> */
        puuid, /* <String> */
        name, /* <String> */
        profileIconId, /* <Integer> */
        revisionDate, /* <Date> */
        summonerLevel /* <Integer> */
    }
```
