import Id from '../Id';
import buildMakeUser from './user';
import buildMakeRoute from './route';

const makeUser = buildMakeUser({ Id });
const makeRoute = buildMakeRoute();

export { makeUser, makeRoute };
