/**
 * Created by jfpalngipang on 2/5/15.
 */
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

    facebook            :   {
        id              :   String,
        token           :   String,
        email           :   String,
        name            :   String
    },
    twitter             :   {
        id              :   String,
        token           :   String,
        username        :   String,
        displayName     :   String
    },
    google              :   {
        id              :   String,
        token           :   String,
        email           :   String,
        name            :   String
    }

});

module.exports = mongoose.model('User', userSchema);