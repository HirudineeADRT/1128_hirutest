exports.handler = function(event, context, callback) {
        var res ={
        "statusCode": 200,
        "headers": {
            "Content-Type": "*/*"
        }
    };

    var greeter = 'World'
    res.body = "Hello, " + greeter + "!";
    callback(null, res);
    
    //callback(null, {"message": "Successfully executed"});
}