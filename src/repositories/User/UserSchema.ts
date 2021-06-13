import VersionableSchema from '../versionable/VersionableSchema';
import { Schema } from 'mongoose';

export default class UserSchema extends VersionableSchema {
    constructor(options: any, collections: any) {
        const schema = {
            ...options,
            username: {
                type: String
            },
            email: {
                type: String
            },
            password: {
                type: String,
            },
            favorites: {
                type: [Schema.Types.ObjectId],
                ref: 'Recipes'
            }
        }
        super(schema, collections);
    }

};
