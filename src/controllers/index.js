import {
    addCircuit,
    addRun,
    addUser,
    editUser,
    updateTime
} from '../use-cases';

import makeAddCircuitController from './makeAddCircuitController';
import makeAddRunController from './makeAddRunController';
import makeAddUserController from './makeAddUserController';
import makeEditUserController from './makeEditUserController';
import makeUpdateRunController from './makeUpdateRunController';

const addCircuitController = makeAddCircuitController({ addCircuit });
const addRunController = makeAddRunController({ addRun });
const addUserController = makeAddUserController({ addUser });
const editUserController = makeEditUserController({ editUser });
const updateRunController = makeUpdateRunController({ updateTime });

const userControllers = Object.freeze({
    addCircuitController,
    addRunController,
    addUserController,
    editUserController,
    updateRunController
});

export default userControllers;

export {
    addCircuitController,
    addRunController,
    addUserController,
    editUserController,
    updateRunController
};
