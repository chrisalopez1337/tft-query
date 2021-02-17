# tft-query
An interface to interact with Riot's TFT Api. Supports native redis caching.

## How to install: `npm i tft-query`

## Contributing
This library is under heaby development and currently I am the only one maintaing the project. Feel free to submit a PR on any bug fixes, logic clean up, or additions to the library. There are currently no main action items but I will add some shortly.

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

# Match Route Methods
These are all in line with the Riot TFT API routes.

### `getMatchByPuuidAndCount()`
#### Required in payload: `puuid: <String>`
#### Optional in payload: `count: <Integer>, default is 20`
#### Example Query
```javascript
    const payload = { puuid: 'yourPuuid', count: 15 };
    const config = { region, payload, apiKey, useReids, redisConfig };
    const tftQuery = new TftQuery(config);
    
    const asyncFunc = async () => {
        try {
            const response = await tftQuery.getMatchByPuuidAndCount();
            // Do something with response...
        } catch(err) {
            throw new Error(err);
        }
    } 
```
#### Example Response
```javascript
    [
        "NA1_3787021738",
        "NA1_3782875544",
        "NA1_3782808963",
        ...
    ]
```

### `getMatchByMatchId()`
#### Required in payload: `matchId: <String>`
#### Example Query
```javascript
    const payload = { matchId: 'yourMatchId' };
    const config = { region, payload, apiKey, useReids, redisConfig };
    const tftQuery = new TftQuery(config);
    
    const asyncFunc = async () => {
        try {
            const response = await tftQuery.getMatchByMatchId();
            // Do something with response...
        } catch(err) {
            throw new Error(err);
        }
    } 
```
#### Example Response
```javascript
    {
        metadata: {
            data_version, /* <String> */
            match_id, /* <String> */
            participants, /* <Array>:<String> */
        },
        info: {
            game_datetime, /* <Integer> */
            game_length, /* <Integer> */
            game_version, /* <String> */
            participants, /* <Array>:<Object> */
            queue_id, /* <Integer> */
            tft_mode, /* <String> */
            tft_set_number, /* <Integer> */
        }
    }
```
# League Route Methods

### `getChallengerLeague()`
#### Required in payload: `No requirements`
#### Example Query
```javascript
    const payload = {};
    const config = { region, payload, apiKey, useReids, redisConfig };
    const tftQuery = new TftQuery(config);
    
    const asyncFunc = async () => {
        try {
            const response = await tftQuery.getChallengerLeague();
            // Do something with response...
        } catch(err) {
            throw new Error(err);
        }
    } 
```
#### Example Response
```javascript
    {
        tier, /* <String> */
        leagueId, /* <String> */
        queue, /* <String> */
        name, /* <String> */
        entries, /* <Array>:<Object> */
    }
```

### `getMasterLeague()`
#### Required in payload: `No requirements`
#### Example Query
```javascript
    const payload = {};
    const config = { region, payload, apiKey, useReids, redisConfig };
    const tftQuery = new TftQuery(config);
    
    const asyncFunc = async () => {
        try {
            const response = await tftQuery.getMasterLeague();
            // Do something with response...
        } catch(err) {
            throw new Error(err);
        }
    } 
```
#### Example Response
```javascript
    {
        tier, /* <String> */
        leagueId, /* <String> */
        queue, /* <String> */
        name, /* <String> */
        entries, /* <Array>:<Object> */
    }
```

### `getGrandMasterLeague()`
#### Required in payload: `No requirements`
#### Example Query
```javascript
    const payload = {};
    const config = { region, payload, apiKey, useReids, redisConfig };
    const tftQuery = new TftQuery(config);
    
    const asyncFunc = async () => {
        try {
            const response = await tftQuery.getGrandMasterLeague();
            // Do something with response...
        } catch(err) {
            throw new Error(err);
        }
    } 
```
#### Example Response
```javascript
    {
        tier, /* <String> */
        leagueId, /* <String> */
        queue, /* <String> */
        name, /* <String> */
        entries, /* <Array>:<Object> */
    }
```

### `getLeagueBySummonerId()`
#### Required in payload: `summonerId: <String>`
#### Example Query
```javascript
    const payload = { summonerId: 'yourSummonerId' };
    const config = { region, payload, apiKey, useReids, redisConfig };
    const tftQuery = new TftQuery(config);
    
    const asyncFunc = async () => {
        try {
            const response = await tftQuery.getLeagueBySummonerId();
            // Do something with response...
        } catch(err) {
            throw new Error(err);
        }
    } 
```
#### Example Response
```javascript
    [
        {
            leagueId, /* <String> */ 
            queueType, /* <String> */
            tier, /* <String> */
            rank, /* <String> */
            summonerId, /* <String> */
            summonerName, /* <String> */
            leaguePoints, /* <Integer> */
            wins, /* <Integer> */
            losses, /* <Integer> */
            veteran, /* <Boolean> */
            inactive, /* <Boolean> */
            freshBlood, /* <Boolean> */
            hotStreak, /* <Boolean> */
        }
    ]
```

### `getLeagueByLeagueId()`
#### Required in payload: `leagueId: <String>`
#### Example Query
```javascript
    const payload = { leagueId: 'yourLeagueId' };
    const config = { region, payload, apiKey, useReids, redisConfig };
    const tftQuery = new TftQuery(config);
    
    const asyncFunc = async () => {
        try {
            const response = await tftQuery.getLeagueByLeagueId();
            // Do something with response...
        } catch(err) {
            throw new Error(err);
        }
    } 
```
#### Example Response
```javascript
    {
        tier, /* <String> */
        leagueId, /* <String> */
        queue, /* <String> */
        name, /* <String> */
        entries, /* <Array>:<Object> */
    }
```

### `getLeagueByTierAndDivision()`
#### Required in payload: `tier: <String>, division: <String>`
#### Optional in payload: `count: <Integer>, default is 1`
#### Example Query
```javascript
    const payload = { tier: 'DIAMOND', division: 'I' };
    const config = { region, payload, apiKey, useReids, redisConfig };
    const tftQuery = new TftQuery(config);
    
    const asyncFunc = async () => {
        try {
            const response = await tftQuery.getLeagueByTierAndDivision();
            // Do something with response...
        } catch(err) {
            throw new Error(err);
        }
    } 
```
#### Example Response
```javascript
    [
        {
            leagueId, /* <String> */ 
            queueType, /* <String> */
            tier, /* <String> */
            rank, /* <String> */
            summonerId, /* <String> */
            summonerName, /* <String> */
            leaguePoints, /* <Integer> */
            wins, /* <Integer> */
            losses, /* <Integer> */
            veteran, /* <Boolean> */
            inactive, /* <Boolean> */
            freshBlood, /* <Boolean> */
            hotStreak, /* <Boolean> */
        },
        {
            leagueId, /* <String> */ 
            queueType, /* <String> */
            tier, /* <String> */
            rank, /* <String> */
            summonerId, /* <String> */
            summonerName, /* <String> */
            leaguePoints, /* <Integer> */
            wins, /* <Integer> */
            losses, /* <Integer> */
            veteran, /* <Boolean> */
            inactive, /* <Boolean> */
            freshBlood, /* <Boolean> */
            hotStreak, /* <Boolean> */
        },
        ...
    ]
```

# Custom Methods
There are not in line with the official docs and are formatted by myself. Please feel free to contribute your own with a PR. Or optimize existing ones as they are in a preliminary phase.

### `getBatchOfMatchInfo()`
#### Info: This route returns match info from the `getMatchByMatchId` in an object, usefull for fetching many matches.
#### Required in payload: `matchIds: <Array>:<String>`
#### Example Query
```javascript
    const payload = { matchIds: [ 'NA_1', 'NA_2', 'more...'] };
    const config = { region, payload, apiKey, useReids, redisConfig };
    const tftQuery = new TftQuery(config);
    
    const asyncFunc = async () => {
        try {
            const response = await tftQuery.getBatchOfMatchInfo();
            // Do something with response...
        } catch(err) {
            throw new Error(err);
        }
    } 
```
#### Example Response
```javascript
    {
        game1: {
            metadata: {
                data_version, /* <String> */
                match_id, /* <String> */
                participants, /* <Array>:<String> */
            },
            info: {
                game_datetime, /* <Integer> */
                game_length, /* <Integer> */
                game_version, /* <String> */
                participants, /* <Array>:<Object> */
                queue_id, /* <Integer> */
                tft_mode, /* <String> */
                tft_set_number, /* <Integer> */
            }
        },
        ...
    }
```

### `getAllInfoBySummonerName()`
#### Info: This route returns an overview of a single summoners info. Their last 20 matches along with the ids, and the general account and ranking info. See the exmaple response for more detail.
#### Required in payload: `summonerName: <String>`
#### Example Query
```javascript
    const payload = { summonerName: 'yourSummonerName' };
    const config = { region, payload, apiKey, useReids, redisConfig };
    const tftQuery = new TftQuery(config);
    
    const asyncFunc = async () => {
        try {
            const response = await tftQuery.getAllInfoBySummonerName();
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
        revisionDate, /* <Integer> */
        summonerLevel, /* <Integer> */
        leagueId, /* <String> */
        queueType, /* <String> */
        tier, /* <String> */
        rank, /* <String> */
        summonerId, /* <String> */
        summonerName, /* <String> */
        leaguePoints, /* <Integer> */
        wins, /* <Integer> */
        losses, /* <Integer> */
        veteran, /* <Boolean> */
        inactive, /* <Boolean> */
        freshBlood, /* <Boolean> */
        hotStreak, /* <Boolean> */
        matchIds,  /* <Array>:<String> */
        allMatchInfo, /* <Object>:<Object> */
    }
```
