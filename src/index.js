import express from 'express';
import bodyParser from 'body-parser';
import {
    addUserController,
    addCircuitController,
    addRunController,
    editUserController
} from './controllers';
import makeExpressCallback from './express-callback';

const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());

// ROUTES
app.post('/users', makeExpressCallback(addUserController));

app.listen(port);

require('dotenv/config');


mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('connected');
});
