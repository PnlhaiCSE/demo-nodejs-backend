const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.query(
        `SELECT * FROM Users `
    );
    return results;
}

const postCreateUser = async (email, name, city) => {
    try {
        await connection.query(
            `INSERT INTO Users (email, name, city)
            VALUES(?, ?, ?)`,
            [email, name, city]
        );
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAllUsers, postCreateUser
}