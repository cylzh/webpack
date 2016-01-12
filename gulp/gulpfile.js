var gulp = require("gulp");
var uglify = require("gulp-uglify");
var cache = require('gulp-cached');
var remember = require("gulp-remember");
var header = require("gulp-header");
var footer = require("gulp-footer");
var rev = require("gulp-rev");
var revCollector = require("gulp-rev-collector");

gulp.task("js",function(){
    //base解析成src/js
    gulp.src("./src/js/**/*.js",{base:"./"})
        .pipe(cache("js"))
        .pipe(uglify())
        .pipe(header('(function(){'))
        .pipe(footer('}()'))
        .pipe(remember("js"))
        .pipe(rev())//文件名添加md5后缀
        .pipe(gulp.dest("build"))
        .pipe(rev.manifest("map.json"))//生成rev-manifest.json
        .pipe(gulp.dest("./rev"));//将json文件保存到rev目录下
})

gulp.task("watch",function(){
    gulp.watch("src/js/**/*.js",["js"])
})

gulp.task("rev",function(){
    gulp.src(["./rev/*.json","./*.html"])
        .pipe(revCollector())//文件替换
        .pipe(gulp.dest("views"))
})

gulp.task("default",["js","rev"],function(){
    console.log("default");
})

gulp.task("watch",function(){
    var watcher = gulp.watch("src/js/**/*.js",["js"]);
    watcher.on("change",function(event){
        if(event.type==="deleted"){
            delete cache.caches.js[event.path];
            remember.forget('js', event.path);
        }
    })
})

