import Id from '../Id';
import buildMakeUser from './user';
import buildMakeCircuit from './circuit';

const makeUser = buildMakeUser({ Id });
const makeCircuit = buildMakeCircuit();

export { makeUser, makeCircuit };
