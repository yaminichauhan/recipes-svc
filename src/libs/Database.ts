import * as mongoose from 'mongoose';

class Database{
    public async open(connectionString: string) {
        try {
           await mongoose.connect(connectionString, {useNewUrlParser: true});
           console.log("Db connected successfully")
        }
        catch(err) {      
            console.log("Error encountered while connecting with db : ", err);
        }
    }
}

export default new Database();