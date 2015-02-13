/**
 * Created by jfpalngipang on 2/6/15.
 */
var exports = module.exports = {};
Date.prototype.today = function () {
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") +
        (this.getMonth()+1) +"/"+ this.getFullYear();
}
var newDate = new Date();
console.log(newDate.today());

