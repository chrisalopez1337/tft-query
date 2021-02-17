# tft-query

## How to install
### `npm i tft-query`

## Basic start
```javascript
    const TftQuery = require('tft-query');
    
    const payload = { summonerName: 'scarra' };

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
