const { Client } = require('pg');
const client = new Client({
    user: 'tiong',
    host: 'localhost',
    database: 'dog',
    password: '123',
    port: 5432,
});

async function get_dog(dog_id){
    try{
        await client.connect();
        let result = await client.query('SELECT * FROM dog_info');
        return result.rows[0];
    }finally{
        await client.end();
    }
}

module.exports = {
    get_dog
}