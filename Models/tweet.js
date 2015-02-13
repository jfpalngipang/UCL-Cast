/**
 * Created by jfpalngipang on 2/13/15.
 */
var mongoose = require('mongoose');

var tweetSchema = new mongoose.Schema({
    twid        :   String,
    author      :   String,
    avatar      :   String,
    body        :   String,
    date        :   Date,
    screenname  :   String
});
