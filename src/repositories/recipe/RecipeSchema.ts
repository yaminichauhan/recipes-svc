import VersionableSchema from '../versionable/VersionableSchema';

export default class RecipeSchema extends VersionableSchema {
    constructor(options: any, collections: any) {
        const schema = {
            ...options,
            category: {
                type: String
            },
            description: {
                type: String
            },
            name: {
                type: String
            },
            imageUrl: {
                type: String
            },
            instructions: {
                type: Object,
                heading: {
                    type: String,
                },
                process1: {
                    type: String
                },
                process2: {
                    type: String
                },
                conclusion: {
                    type: String
                }
            },
            createdDate: {
                type: Date,
                default: Date.now
            },
            likes: {
                type: Number,
                default: 0
            },
            username: {
                type: String
            }
        }
        super(schema, collections);
    }

};
