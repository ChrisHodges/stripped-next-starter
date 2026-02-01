import {getDatabase} from "@/app/_persistence/getDatabase";
import {Document} from "bson"

export const getCollection = async <T extends Document>(collectionName: string) => {
    return (await getDatabase()).collection<T>(collectionName)
}