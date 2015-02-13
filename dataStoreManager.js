/**
 * Created by jfpalngipang on 2/6/15.
 */
var vid = require('../Models/video'),
    img = require('../Models/image'),
    txt = require('../Models/text');
var exports = module.exports = {};

exports.saveVideo =  function(data) {
    var video = {
        url: data['url'],
        priority: data['priority'],
        timein: data['timein'],
        timeout: data['timeout']
    };
};

var videoEntry = new Video(video);

