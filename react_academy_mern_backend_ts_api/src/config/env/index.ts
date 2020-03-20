import * as dotenv from 'dotenv';

dotenv.config();

interface IConfig {
    port: string | number;
    database: {
        MONGODB_URI: string;
        MONGODB_DB_MAIN: string;
    };
    secret: string;
    useoauth: boolean;
}

const NODE_ENV: string = process.env.NODE_ENV || 'development';
const USE_OAUTH: boolean = process.env.NODE_ENV && (process.env.USE_OAUTH === '1'  || (process.env.USE_OAUTH).toLowerCase() === 'true');

const development: IConfig = {
    port: process.env.PORT || 3000,
    database: {
        MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/',
        MONGODB_DB_MAIN: process.env.MONGODB_DB_MAIN || 'users_db'
    },
    secret: process.env.SECRET || '@QEGTUI',
    useoauth: USE_OAUTH
};

const production: IConfig = {
    port: process.env.PORT || 3000,
    database: {
        MONGODB_URI: process.env.MONGODB_URI || 'mongodb://production_uri/',
        MONGODB_DB_MAIN: process.env.MONGODB_DB_MAIN || 'users_db'
    },
    secret: process.env.SECRET || '@QEGTUI',
    useoauth: USE_OAUTH
};

const test: IConfig = {
    port: process.env.PORT || 3000,
    database: {
        MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017',
        MONGODB_DB_MAIN: 'test_users_db'
    },
    secret: process.env.SECRET || '@QEGTUI',
    useoauth: USE_OAUTH
};

const config: {
    [name: string]: IConfig
} = {
    test,
    development,
    production
};

export default config[NODE_ENV];
