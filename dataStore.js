/**
 * Created by jfpalngipang on 2/4/15.
 */
var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
    user    :   String,
    videos  :   [],
    images  :   [],
    texts   :   []
});

var castMediaItems = mongoose.model('CastMediaItem', dataSchema);