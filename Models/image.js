/**
 * Created by jfpalngipang on 2/5/15.
 */
var mongoose = require('mongoose')

var imageSchema = new mongoose.Schema({
    url         :       String,
    priority    :       Number,
    timein      :       Date,
    timeout     :       Date,
})

module.exports = Image = mongoose.model('Image', imageSchema);



