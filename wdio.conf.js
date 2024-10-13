const video = require('wdio-video-reporter');
// ...
reporters: [
    [video, {
        saveAllVideos: true, // Rekam semua tes
        videoSlowdownMultiplier: 3, // Lambatkan kecepatan video
    }],
],
