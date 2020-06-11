import makeAddCircuit from './add-circuit';
import makeAddRun from './add-run';
import makeAddUser from './add-user';
import makeEditUser from './edit-user';
import makeUpdateRun from './update-run';
import generatePoints from '../ai-service-callback';
import userDb from '../data-access';

const addCircuit = makeAddCircuit({ userDb });
const addRun = makeAddRun({ userDb, generatePoints });
const addUser = makeAddUser({ userDb });
const editUser = makeEditUser({ userDb });
const updateRun = makeUpdateRun({ userDb });

export {
    addCircuit, addRun, addUser, editUser, updateRun
};
