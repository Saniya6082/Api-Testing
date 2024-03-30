// db.js
const { MongoClient } = require('mongodb');
let dbConnection;

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://localhost:27017/shopping_portal')
            .then((client) => {
                dbConnection = client.db();
                cb(); // Call the callback without return
            })
            .catch(err => {
                console.error('Failed to connect to the database:', err);
                cb(err); // Pass error to the callback
            });
    },
    getDb: () => dbConnection,
};
