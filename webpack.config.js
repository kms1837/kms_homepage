var path = require('path');
var webpack = require('webpack');

var react_dev_path = __dirname + '/server/view/';

/*
        app_view : react_dev_path +  'main/app.js',
        main_view : react_dev_path +  'main/main_view.js',
        question_view : react_dev_path +  'question_board/question_board.js',
        rss_view : react_dev_path +  'git_rss_reader/git_rss_reader.js',
        react_routes : react_dev_path + 'react_routes.js',
        sign_in_view : react_dev_path +  'sign/sign_in_view.js',
        sign_up_view : react_dev_path +  'sign/sign_up_view.js'
*/

module.exports = {
    entry : {
        main : react_dev_path + 'main.js'
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