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

const getUserById = async (id) => {
    let [results, fields] = await connection.query(
        `SELECT * FROM Users u WHERE id = ?`, [id]
    );
    return results.length > 0 ? results : {};
}

const updateUserById = async (id, email, name, city) => {
    await connection.query(`UPDATE Users 
        SET email = ?, city = ?, name = ?
        WHERE id = ?`, [email, city, name, id]);
}

module.exports = {
    getAllUsers, postCreateUser, getUserById, updateUserById
}