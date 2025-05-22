require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

async function createBaseUser() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        
        const baseUser = new User({
            username: 'markov',
            password: 'password', 
            role: 'user',
            allowedCameras: [],
            allowedFiles:[] 
        });

        await baseUser.save();
        console.log('Базовый пользователь создан успешно');
        
        mongoose.connection.close();
    } catch (error) {
        console.error('Ошибка при создании пользователя:', error);
        mongoose.connection.close();
    }
}
createBaseUser();
