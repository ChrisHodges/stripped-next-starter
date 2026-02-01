// lib/mongodb.ts
import {Db, MongoClient} from "mongodb";
import {env} from "@/app/env";

let client: MongoClient | null = null;

declare global {
    var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const init = async(db:Db) => {
    /*Do some db init here, e.g...*/
    
    /*const users = db.collection("users")
    await users.createIndex("document.email", {unique:true})
    await users.createIndex("document.invites.tokenHash", {unique:true})
    await users.createIndex("document.queryInvites.tokenHash", {unique:true})*/
}

export async function getDatabase(): Promise<Db> {
    
    const uri = env.DATABASE_URL
    const dbName = env.DATABASE_NAME
    
    if (!uri) {
        throw new Error("MongoDB URI is required.");
    }
    if (!dbName) {
        throw new Error("Database name is required.");
    }

    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, {});
        global._mongoClientPromise = client.connect();
        const connectedClient = await global._mongoClientPromise
        await init(connectedClient.db(dbName))
    }

    const connectedClient = await global._mongoClientPromise;
    return connectedClient.db(dbName);
}

