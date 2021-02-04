const Request = require('../../lib/request-client');
const { expect } = require('chai');
const assert = require('assert');

describe('Request client', () => {
    const testPath = 'https://jsonplaceholder.typicode.com/todos/1';
    const expectedData = 
        {
	        userId: 1,
	        id: 1,
	        title: "delectus aut autem",
	        completed: false
        };
    const client = new Request(testPath);
    it('Should make a request and return the expected data', async () => {
        const data = await client.createRequest();
        assert.deepEqual(data, expectedData);
    })
});
