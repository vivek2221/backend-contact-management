import Connect, { client } from './mongodriver.js'
import dotenv from "dotenv"
dotenv.config()
const db=await Connect()
await db.createCollection('currusers',{
    validator:{
        $jsonSchema:{
            bsonType:'object',
            required:['name','email','password'],
            properties:{
                name:{
                    bsonType:'string',
                    minLength:3,
                    description:'name must be greater than 3'
                },
                email:{
                    bsonType: "string",
                    pattern: "^.+@.+\\..+$",
                    description: "Must be a valid email"
                },
                password:{
                    bsonType:'string',
                    minLength:4,
                    description:'password must be greater than 4'
                }
            }
        }
    }
})
await db.createCollection('allcontacts',{
    validator:{
        $jsonSchema:{
            bsonType:'object',
            required:['name','email','num','info','userSessionId'],
            properties:{
                name:{
                    bsonType:'string'
                },
                email:{
                    bsonType:'string'
                },
                num:{
                    bsonType:'string'
                },
                info:{
                    bsonType:'string'
                },
                userSessionId:{
                    bsonType:'objectId'
                }

            }
        }
    }
})
await db.createCollection('favorite',{
    validator:{
        $jsonSchema:{
            bsonType:'object',
            required:['name','email','num','info','userSessionId'],
            properties:{
                name:{
                    bsonType:'string'
                },
                email:{
                    bsonType:'string'
                },
                num:{
                    bsonType:'string'
                },
                info:{
                    bsonType:'string'
                },
                userSessionId:{
                    bsonType:'objectId'
                }

            }
        }
    }
})
await client.close()