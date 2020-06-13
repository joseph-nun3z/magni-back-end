import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import {
    addUserController,
    addCircuitController,
    addRunController,
    editUserController
} from './controllers';
import makeExpressCallback from './express-callback';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());

// ROUTES
app.post('/users', makeExpressCallback(addUserController));
app.post('/users/:id/circuits', makeExpressCallback(addCircuitController));
app.post('/users/:userId/circuits/:cId/runs', makeExpressCallback(addRunController));

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));

export default app;
