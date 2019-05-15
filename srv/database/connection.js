import { createPool } from 'mysql2';

const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'dbnews'
});

export const poolPromise = pool.promise();
