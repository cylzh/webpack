#gulp学习

##gulp start
1.gulp全局安装
````
    npm install gulp -g
````
2.局部安装
````
    npm install gulp --save-dev
````
3.创建gulpfile.js
添加
````
    var gulp = require("gulp");
    gulp.task("default",function(){
        console.log("hello gulp")
    })
````
执行
````
    gulp
````

##demo

````
    var gulp = require("gulp");
    var uglify = require("gulp-uglify");   
    
    gulp.task("js",function(){
        gulp.src("src/js/**/*.js")//base解析成src/js
            .pipe(uglify())
            .pipe(gulp.dest("build"))//
    
        gulp.src("src/js/**/*.js",{base:"src"})
            .pipe(uglify())
            .pipe(gulp.dest("build"));
    })
    
    gulp.task("watch",function(){
        gulp.watch("src/js/**/*.js",["js"])
    })


````

##gulp api
1. gulp.src ：输出符合所提供的匹配模式或者匹配模式的数组的文件。 将返回一个stream 它可以被 pipe 到别的插件中。
2. gulp.dest：能被 pipe 进来，并且将会写文件。并且重新输出所有数据，因此你可以将它 pipe 到多个文件夹。如果某文件夹不存在，将会自动创建它。
3. gulp.task：定义一个任务。
4. gulp.watch ：监视文件，并且可以在文件发生改动时候做一些事情。


##gulp 插件
1. gulp-uglify
2. gulp-cached
3. gulp-remember
4. gulp-header
5. gulp-footer
6. gulp-rev :md5后缀
7. gulp-rev-collector
8. yargs 接受参数
9. lodash 类似underscore

