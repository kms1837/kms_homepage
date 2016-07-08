var path = require('path');
var webpack = require('webpack');

var react_dev_path = __dirname + '/develop/react_view/';

module.exports = {
    entry : {
        question_view : react_dev_path + 'question_board/question_board.js',
        git_view : react_dev_path + 'git_rss_reader/git_rss_reader.js',
        main_view : react_dev_path +  'main/main.js'
    },
    
    output : {
        path : __dirname + '/server/static/js/view/',
        filename : '[name].js'
    },
    
    resolve: {
        extensions: ['', '.js']
    },
    
    module : {
        loaders : [
            {
                test : /\.js$/,
                loader : 'babel',
                exclude : '/node_modules/',
                query : {
                    presets : ["es2015", "react"]
                }
            }
        ]
    }
}