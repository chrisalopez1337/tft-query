const redis = require('redis');
const { promisify } = require('util');

class Redis {
    constructor(options = false) {
        const defaultOptions = 
            {
                host: '127.0.0.1',
                port: 6379,
                keyPrefix: 'tft-'
            };
        // Client setup
        this.options = options || defaultOptions;
        this.client = redis.createClient(this.options);
        this.prefix = this.options.keyPrefix || 'tft-';
        // Error messaging
        this.client.on('error', (err) => console.log(err));
    }

    async set(key, value) {
        try {
            const setAsync = promisify(this.client.set).bind(this.client);
            await setAsync(key, JSON.stringify(value));
            return;
        } catch(err) {
            throw new Error(err);
        }
    }

    async get(key) {
        try {
            const getAsync = promisify(this.client.get).bind(this.client);
            const data = await getAsync(key);
            return JSON.parse(data);
        } catch(err) {  
            throw new Error(err);
        }
    }

    async flush() {
        try {
            const flushAsync = promisify(this.client.flushdb).bind(this.client);
            await flushAsync();
            return;
        } catch(err) {
            throw new Error(err);
        }
    }

}

module.exports = Redis;
