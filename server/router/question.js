/*exports.start = function (request, response) {
    response.render('../template/question_board.html');
};*/

exports.start = function (app, mongoose) {
    var MemoSchema= mongoose.Schema({
        username:String,
        text:String
    });
    
    var ReplySchema= mongoose.Schema({
        text:String
    });
    
    var Memo = mongoose.model('MemoModel', MemoSchema);
    var Reply = mongoose.model('ReplyModel', ReplySchema);
    
    app.post('/question/insert', function(req, res, err) {
        /*Memo.findOne({'_id':req.params.username},function(err,memo){
            
        }*/
        /*console.log(req.body);
        var memo = new Memo({username:req.body.username, text:req.body.text});
            memo.save(function(err,silence){
              if(err){
                  console.err(err);
                  throw err;
              }
              res.send('success');
            });*/
    });
    
    app.post('/question/reply/insert', function(req, res, err){
        console.log(req.body);
        var reply = new Reply({text:req.body.text});
            memo.save(function(err,silence){
              if(err){
                  console.err(err);
                  throw err;
              }
              res.send('success');
            });
    });
    
    app.get('/question', function(request, response) {
        response.render('../template/question_board.html');
    });
    
    app.get('/question/users/:username', function(req,res,err){
        var memos = new Memo();
        Memo.findOne({'username':req.params.username},function(err,memo){
            if(err){
                console.err(err);
                throw err;
            }
            console.log(memo);
            res.send(200,memo);
        });
    });
    
    app.get('/question/datas', function(req,res,err){
        var memos = new Memo();
        Memo.find().exec(function(err,memos){
            if(err){
                console.err(err);
                throw err;
            }
            console.log(memos);
            res.send(memos);
        });
    });
}