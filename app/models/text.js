/**
 * Created by jfpalngipang on 2/5/15.
 */
var mongoose = require('mongoose')

var textSchema = new mongoose.Schema({
    text        :       String,
    priority    :       Number,
    timein      :       Date,
    timeout     :       Date,
})

module.exports = Text = mongoose.model('Text', textSchema);

