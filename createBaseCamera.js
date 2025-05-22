require('dotenv').config();
const mongoose = require('mongoose');
const Camera = require('../models/Camera'); 

async function createBaseCamera() {
    try {
        
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Подключились к MongoDB');

        
        const baseCamera = new Camera({
            name: 'Основная камера',
            url: ('http://s98.ddns.net:10090/o2b3.mjpg?user=&fps=25'), // 
            location: 'Главный вход',
            status: 'active', 
            addedBy: ('682f2c7622ffd959794fae5a'), 
        });

        
        await baseCamera.save();
        console.log('Базовая камера создана успешно:', baseCamera);

        
        mongoose.connection.close();
    } catch (error) {
        console.error('Ошибка при создании камеры:', error);
        mongoose.connection.close();
    }
}


createBaseCamera();
