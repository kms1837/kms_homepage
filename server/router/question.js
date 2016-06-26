/*exports.start = function (request, response) {
    response.render('../template/question_board.html');
};*/

exports.start = function (app, mongoose) {
    var MemoSchema= mongoose.Schema({
        username:String,
        memo:String
    });
    
    var Memo = mongoose.model('MemoModel', MemoSchema);
    
    app.post('/question/insert', function(req, res, err){
        console.log(req.body);
        var memo = new Memo({username:req.body.username, text:req.body.memo});
            memo.save(function(err,silence){
              if(err){
                  console.err(err);
                  throw err;
              }
              res.send('success');
            });
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
        Memo.find().select('username').exec(function(err,memos){
            if(err){
                console.err(err);
                throw err;
            }
            console.log(memos);
            res.send(memos);
        });
    });
}