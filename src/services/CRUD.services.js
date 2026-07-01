const conn = require('../config/connectDB');

const getAllUsers = async () => {
    const [results, fields] = await conn.query(`SELECT * FROM Users`);
    return results;
}

const getUserById = async (id) => {
    const [results, fields] = await conn.query(`SELECT * FROM Users u WHERE id = ?`, [id]);
    return results;
}

const updateUserById = async (id, email, name, city) => {
    await conn.query(`
        UPDATE Users 
        SET email = ?, name = ?, city = ?
        WHERE id = ?`, [email, name, city, id]);
}

const addUser = async (email, name, city) => {
    await conn.query(`
        INSERT INTO Users (email, name, city) 
        VALUES (?, ?, ?)`, [email, name, city]);
}

const deleteById = async (id) => {
    await conn.query(`DELETE FROM Users  WHERE id = ?`, [id]);
}

module.exports = { getAllUsers, getUserById, updateUserById, addUser, deleteById }