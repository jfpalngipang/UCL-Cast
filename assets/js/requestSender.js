/**
 * Created by jfpalngipang on 2/6/15.
 */
var http = require('http'),
    request = require('request');
/*
function test() {
    console.log("test passed!");

}
*/
/*
document.getElementById('testButton').onclick = "test()";
function test() {
    alert("test succeeded!");
}
*/

function send() {
    //alert("hello!");

    //var video_url = document.getElementById('video_textbox').value;
    //var video_deadline = document.getElementById('text_deadline').value;
    var video_entry = {
        'url': 'sampleURL',
        'deadline': '2/14/2015',
        'action': 'play'
    };
    var data1 = JSON.stringify(video_entry);
    console.log(data1);
    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data1.length
    };
    var options = {
        host: 'localhost',
        port: 8080,
        path: '/',
        method: 'POST',
        headers: headers
    };
    //console.log(data1);
    var myreq = http.request(options, function (res) {
        //console.log("up to here");
        res.setEncoding('utf8');

        res.on('data', function (data) {
            console.log(data);
        });

    });
    //console.log(data1)
    myreq.write(data1);
    myreq.end();
    //console.log("end!")

}
//}