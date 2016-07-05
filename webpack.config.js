var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry : {
        question_view : __dirname + '/develop/react_view/question_board.js'
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