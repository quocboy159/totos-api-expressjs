import userEntity from '../models/user'

const getAllUsers = async () => await userEntity.find().exec();

const createUser = async (userRequest) => {
    const user = new userEntity(userRequest);
    return await user.save();
}

const editUser = async (id, editUserRequest) => {
    const result =  await userEntity.updateOne({ _id: id }, editUserRequest);
    if(!result.matchedCount){
        throw 'The user not found';
    }
}

const findUserById = async (id) => {
    const user = await userEntity.findById(id).exec();
    return user;
}

const findUserByEmail = async (email) => {
    if (!email) {
        return null;
    }

    const user = await userEntity.findOne({ email }).exec();
    return user;
};

export {
    findUserByEmail,
    findUserById,
    getAllUsers,
    createUser,
    editUser
}

