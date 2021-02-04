const axios = require('axios');

class Request {
    constructor(path, retryCount = 3) {
        this.path = path;
        this.retryCount = retryCount;
        this.retry = false;
    }

    async createRequest() {
        try {
            const { data } = await axios.get(this.path);
            return data;
        } catch(err) {
            if (this.retryCount > 0) {
                this.retry = true;
                console.log(`Request Client: Request failed, trying again ${this.retryCount} times before closing.`);
            } else {
                throw new Error(err);
            }
        } finally {
            if (this.retryCount > 0 && this.retry === true) {
                this.retryCount--;
                await this.createRequest();
            }
        }
    }
}

module.exports = Request;
