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

#todo




