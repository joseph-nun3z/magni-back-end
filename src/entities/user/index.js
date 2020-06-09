import Id from '../../Id';
import buildMakeUser from './user';
import makeCircuit from '../circuit';

const makeUser = buildMakeUser({ Id, makeCircuit });

export default makeUser;
