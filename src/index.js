import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import {
    addUserController,
    addCircuitController,
    addRunController,
    updateRunController
} from './controllers';
import makeExpressCallback from './express-callback';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());

// ROUTES
app.post('/users', makeExpressCallback(addUserController));
app.post('/circuits', makeExpressCallback(addCircuitController));
app.post('/circuits/:_id/runs', makeExpressCallback(addRunController));
app.put('/circuits/:_id/runs/:runId', makeExpressCallback(updateRunController));

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));

export default app;
