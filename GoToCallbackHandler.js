var http = require('http');
var port = (process.env.PORT || process.env.VCAP_APP_PORT || 8080);
var connect = require('connect');
var url = require('url');
var app=connect();

function onRequest(request, response){

    if (request.method == 'GET') { //THIS WILL RUN WHEN HITTING THE SERVER URL IN THE BROWSER
      try{
        var responseBody = JSON.stringify({ message:"Hello there!"});
        response.writeHead(200, {'Content-Type' : 'application/json', 'Access-Control-Allow-Origin' : '*'});
        response.end(responseBody);

          return;
        } catch (err){
          response.writeHead(500, {"Content-Type": "text/plain"});
          response.write("Bad Request Data \n");
          response.end();
          return;
        }

    }///end of GET handling

  if (request.method == 'POST') { //Manage callbacks (that come as a POST request) THIS WILL RUN WHEN GETTING A CALLBACK
    //Prepare and send response
    try{
        var responseBody = JSON.stringify({ message:"Hello API Event Received", isError:false, result:64});
        response.writeHead(200, {'Content-Type' : 'application/json', 'Access-Control-Allow-Origin' : '*'});
        response.end(responseBody);
        //End of prepare and send response

        var body = '';
        request.on('data', function (data) {
            body += data;
            console.log("Body ", body);
        });
        return;
      } catch (err){
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write("Bad Post Data.  Is your data a proper JSON?\n");
        response.end();
        return;
      }
    }// End of POST handler

}// end of OnRequest


http.createServer(onRequest).listen(port);

console.log('Server running at http://127.0.0.1:' + port);
