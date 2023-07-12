const test = require('ava');
const axios = require('axios');

test('Get ile "Hello World!" döner', async t => {
    const response = await axios.get('http://localhost:3000');
    t.is(response.data, 'Hello World!');
    t.is(response.status, 200);
});