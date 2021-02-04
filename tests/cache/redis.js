const Redis = require('../../lib/cache/redis.js');
const { expect } = require('chai');
const assert = require('assert');

describe('Redis Cache', async () => {
    const cache = new Redis();
    it('Redis.set + Redis.get : Should set data, and be able to fetch it', async () => {
        const key = 'test1';
        const payload = { 1: { 2: 3, 4: 5, 6: 'test' }, 7: [1, 2, 3] };
        await cache.set(key, payload);
        const data = await cache.get(key);
        assert.deepEqual(data, payload);
    });

    it('Redis.flush: Should flush the db', async () => {
        await cache.flush();
        const data = await cache.get('test1');
        expect(data).to.equal(null);
    });
});
