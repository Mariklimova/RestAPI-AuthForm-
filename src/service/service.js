const { createUserDB, getAllUserDB, deleteUserByIdDB, getUserByIdDB, updateUserPathDB, updateUserByIdDB, getUserByEmail } = require('../repository/repository');

async function createUser(username, email, phone, pwd) {
    const foundUser = getUserByEmail(email)
    if (foundUser) throw new Error('')
    const user = await createUserDB(username, email, phone, pwd);
    return user
}
async function authUser(email, pwd) {
    const foundUser = getUserByEmail(email)
    if (foundUser) throw new Error('')
    return user
}

async function getAllUser() {
    const user = await getAllUserDB();
    if (!user.length) throw new Error('database is empty')
    return user
}

async function deleteUserById(id) {
    const data = await deleteUserByIdDB(id)

    if (!data.length) throw new Error('Array is empty')
    return data
}

const getUserById = async (id) => {
    const user = await getUserByIdDB(id);
    return user;
};

async function updateUserPath(id, body) {
    const user = await updateUserPathDB(id, body);
    if (id < 0) throw new Error("id is not valid");
    if (!user.length) throw new Error("data does not create");
    return user;
}

async function updateUserById(id, username, email, phone, pwd) {
    const user = await updateUserByIdDB(id, username, email, phone, pwd);
    return user
}




module.exports = { createUser, getAllUser, deleteUserById, getUserById, updateUserPath, updateUserById, authUser }