import Id from '../../Id';
import buildMakeCircuit from './circuit';
import makeRun from '../run';

const makeCircuit = buildMakeCircuit({ Id, makeRun });

export default makeCircuit;
