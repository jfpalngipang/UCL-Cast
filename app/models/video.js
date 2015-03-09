/**
 * Created by jfpalngipang on 2/5/15.
 */
var mongoose = require('mongoose')

var videoSchema = new mongoose.Schema({
    videoId          :       String
})

module.exports = Video = mongoose.model('Video', videoSchema);