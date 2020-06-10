import makeAddCircuit from "./add-circuit";
import makeAddRun from "./add-run";
import makeAddUser from "./add-user";
import makeEditUser from "./edit-user";
import makeUpdateRun from "./update-run";
import usersDb from "../data-access";

const addCircuit = makeAddCircuit({ userDb });
const addRun = makeAddRun({ userDb });
const addUser = makeAddUser({ userDb });
const editUser = makeEditUser({ userDb });
const updateRun = makeUpdateRun({ userDb });

const userService = Object.freeze({
    addCircuit,
    addRun,
    addUser,
    editUser,
    updateRun
});

export default userService;

export { addCircuit, addRun, addUser, editUser, updateRun };