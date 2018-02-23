var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //used to extract combined css into seperate file style.css

module.exports=()=>{
    
    

    return{
        entry:"./src/index.js",
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
        
    },
    module:{
        rules:[
            {
                loader:'babel-loader',
                test:/\.js$/,                //combines all js files in source dir
                exclude:/node_modules/
            },
            {
                test:/\.s?css$/,           //combines all scss and css files using below loaders
                loaders:ExtractTextPlugin.extract('css-loader!sass-loader')
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            }
        ]
    },
    plugins:[
       new ExtractTextPlugin('styles.css',{
           allChunks:true
       })
   ],
    devServer: {                           //tells webpack to server which directory
        contentBase: path.join(__dirname, "public")
    }

    }
    
}