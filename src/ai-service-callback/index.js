import dotenv from 'dotenv';
import needle from 'needle';

dotenv.config();

module.exports = function generatePoints({ circuit }) {
    return needle.post(process.env.AI_SERVICE_URL, circuit, { json: true }, (err, res) => {
        if (err) {
            console.error(err);
            return err;
        }
        return res;
    });
};
