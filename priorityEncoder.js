/**
 * Created by jfpalngipang on 2/4/15.
 * This module encodes the priority for each
 * media entry before enqueueing them
 */
var exports = module.exports = {};

//console.log(dateIn);
exports.getLifeTime = function() {
    var dateIn = new Date();
    var dateOut =  new Date();
    var lifeTime;
    lifeTime = Math.abs(dateOut-dateIn);
}


