/**
 * Created by jfpalngipang on 2/5/15.
 */
var mongoose = require('mongoose')

var textSchema = new mongoose.Schema({
    text        :       String,
    timeIn      :       Date,
    timeOut     :       Date
})

module.exports = Text = mongoose.model('UText', textSchema);

