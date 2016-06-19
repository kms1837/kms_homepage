/*var mongoClientObject = require('mongodb').MongoClient
var mongoServer = require('mongodb').Server;
var mongoClient = new mongoClientObject(new Server('localhost',27017,{'native_parser':true}));
var db = mongoClient.db('test');*/

exports.start = function (request, response) {
    //mongodb_test();
    response.render('../template/question_board.html');
};
/*
function mongodb_test() {
    mongoClient.open(function(err, client) {
        if(err) throw err;
        console.log('mongo client connected');
        
        db.collection('users').insert({city:'suji'},function(err,doc){
            console.log('inserted '+doc[0]._id+':'+doc[0].city);
        });
        
        db.collection('users').findOne({},function(err,doc){
            if(err) throw err;
            console.log(doc);
        });
    });
}*/