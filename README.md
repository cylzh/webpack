#webpack

##安装
````
    npm install webpack -g
````

##配置文件（webpack.config.js）

````
    module.exports={
        entry:[        
        ],//入口文件
        output:{
            path:""//打包过后存放的绝对路径，
            publicPath:"访问路径",
            filename:"打包过后的文件名"
        }  
    }
````
##执行
 1. webpack:最基础的执行
 2. webpack -w :提供watch方法，实时进行打包更新
 3. webpack -p :对打包过后的文件进行压缩
 4. webpack -d :提供source map，方便调试
 5. webpack --display-error-details :查看错误详细信息


##loader加载器

###安装loader
````
    npm install style-loader --save-dev
````
###配置loader

````
    module:{
        loaders:[
            {test:/\.js$/,loader:"style-loader"}
        ]
    }
````
loaders是一个数组，里面每一个对象都用正则表达式（test），对应一种配对方案，进行对应的处理（loader）
**多个loader通过"!"分隔串联起来。**

###关于图片的打包

````
    div{
        background:#fff;
    }
    //或者
    var img = document.createElement("img");
    img.src = require("../image/xxx.jpg");
    document.body.appendChild(img);
````

###打包成多个资源文件

````
    entry:{
        page1:"entry.js",
        page2:"entry1.js"
    },
    output:{
        path:path.join(__dirname,'out'),
        publicPath:"./out/",
        filename:"[name].js"  
    }
````

###独立样式

####安装插件extract-text-webpack-plugin
````
    npm install extract-text-webpack-plugin --save-dev
````
####配置webpack.config.js
````
 { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader','css-loader') } 
 plugins:[
     new ExtractTextPlugin('[name].css'),
 ]
````

###文件对比
[参考链接][version]



    
#todo




[version]: http://webpack.github.io/docs/long-term-caching.html



