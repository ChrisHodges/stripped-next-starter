import {load} from 'ts-dotenv';

export const env = load({
    DATABASE_URL: String,
    DATABASE_NAME: String,
});