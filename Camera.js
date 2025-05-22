const mongoose = require('mongoose');

const cameraSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true // ← теперь камеры активны по умолчанию
    },
    streamUrl: {
        type: String,
        default: 'http://s98.ddns.net:10090/o2b3.mjpg?user=&fps=25' // ← стандартный URL
    },
    accessLevel: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('Camera', cameraSchema);
