/**
 * Created by jfpalngipang on 2/4/15.
 */
var exports = module.exports = {};

exports.videoQueue = ['sample url 1', 'sample url 2'];
exports.test = "hello!";




exports.enqueueVideo = function(videoURL) {
    exports.videoQueue.push(videoURL);
    return exports.videoQueue;
};


