const express = require('express');
const router = express.Router();
const Camera = require('../models/Camera');

router.get('/', async (req, res) => {
    try {
        const cameras = await Camera.find();
        res.json(cameras);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const camera = new Camera({
        name: req.body.name,
        isActive: req.body.isActive,
        streamUrl: req.body.streamUrl,
        accessLevel: req.body.accessLevel
    });

    try {
        const newCamera = await camera.save();
        res.status(201).json(newCamera);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
