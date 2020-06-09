const needle = require('needle');
require('dotenv/config');

module.exports = function generatePoints(circuit) {
    needle.post(process.env.AI_SERVICE_URL, circuit, (err, res) => {
        if (err) {
            console.error(err);
        }
        return res;
    });
};
