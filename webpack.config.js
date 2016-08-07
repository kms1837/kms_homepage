var path = require('path');
var webpack = require('webpack');

var react_dev_path = __dirname + '/develop/react_view/';

module.exports = {
    entry : {
        main_view : react_dev_path +  'main/main.js',
        sign_in_view : react_dev_path +  'sign/sign_in_view.js',
        sign_up_view : react_dev_path +  'sign/sign_up_view.js'
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