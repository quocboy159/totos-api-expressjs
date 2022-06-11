import mongoose from "mongoose";
import databaseConfigs from '../configs/database.configs'
let dbInstance;

const connectDb = async () => {
    try {
        if (dbInstance) {
            return dbInstance;
        }

        dbInstance = await mongoose.connect(databaseConfigs.dbHost, { dbName: 'todos' });
        console.log("Database Connected");
        return dbInstance;
    } catch (ex) {
        console.log(ex)
        throw ex;
    }
}

export {
    connectDb
}