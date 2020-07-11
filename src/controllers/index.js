import {
    addCircuit,
    addRun,
    updateTime
} from '../use-cases';

import makeAddCircuitController from './makeAddCircuitController';
import makeAddRunController from './makeAddRunController';
import makeUpdateRunController from './makeUpdateRunController';

const addCircuitController = makeAddCircuitController({ addCircuit });
const addRunController = makeAddRunController({ addRun });
const updateRunController = makeUpdateRunController({ updateTime });

const userControllers = Object.freeze({
    addCircuitController,
    addRunController,
    updateRunController
});

export default userControllers;

export {
    addCircuitController,
    addRunController,
    updateRunController
};
