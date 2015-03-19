/**
 * Created by jfpalngipang on 2/5/15.
 */
var mongoose = require('mongoose')

var imageSchema = new mongoose.Schema({
    ImageUrl         :       String,
    timeIn      :       Date,
    timeOut     :       Date
})

module.exports = Image = mongoose.model('UImage', imageSchema);



