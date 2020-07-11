import makeAddCircuit from './addCircuit';
import makeAddRun from './addRun';
import makeUpdateTime from './updateTime';
import generatePoints from '../ai-service-callback';
import userDb from '../data-access';

const addCircuit = makeAddCircuit({ userDb });
const addRun = makeAddRun({ userDb, generatePoints });
const updateTime = makeUpdateTime({ userDb });

export {
    addCircuit, addRun, updateTime
};
