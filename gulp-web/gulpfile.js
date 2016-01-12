var gulp = require("gulp");
var argv = require("yargs").argv,
    uglify = require("gulp-uglify"),
    source = require('vinyl-source-stream'),
    clean = require('gulp-clean'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    fileinclude = require('gulp-file-include'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    webserver = require('gulp-webserver'),
    imagemin = require('gulp-imagemin'),
    gulpif = require('gulp-if'),
    rev = require('gulp-rev'),
    revReplace = require('gulp-rev-replace'),
    del = require('del'),
    vinylPaths = require('vinyl-paths'),
    runSequence = require('run-sequence'),
    spriter = require("gulp-css-spriter"),
    cache = require('gulp-cached'),
    remember = require("gulp-remember"),
    fileConfig = require("fileConfig");

gulp.task("help", function () {
    console.log('	gulp build			文件打包');

    console.log('	gulp watch			文件监控打包');

    console.log('	gulp help			gulp参数说明');

    console.log('	gulp server			测试server');

    console.log('	gulp -p				生产环境（默认生产环境）');

    console.log('	gulp -d				开发环境');

    console.log('	gulp -m <module>		部分模块打包（默认全部打包）');
})

gulp.task("default", function () {
    gulp.start("help");
})

gulp.task("build", function () {
    var evr = argv.p || !argv.d;
    var mod = argv.m || "all";
    console.log(evr);
})

var teemoGulp = {
    buildHtml: function () {

    },
    buildCss: function () {
        var args = arguments;
        var src = args[0],
            dest = args[1],
            flag = args[2];

        return gulp.src(src)
            //前缀添加
            .pipe(autoprefixer({
                browsers: ["last 2 versions"],
                cascade: true,
                remove: true
            }))
            .pipe(gulp.dest(dest))
            .pipe(minifycss())
            .pipe(rename({suffix: ".min"}))
            .pipe(gulp.dest(dest));

    },
    buildJs: function () {
        var args = arguments;
        var src = args[0],
            dest = args[1],
            flag = args[2];

        return gulp.src(src)
            .pipe(gulp.dest(dest))
            .pipe(uglify())
            .pipe(rename({suffix: ".min"}))

            .pipe(gulp.dest(dest));
    },
    buildImage: function () {
        var args = arguments;
        var src = args[0],
            dest = args[1],
            flag = args[2];


        return gulp.src(src)
            .pipe(imagemin())
            .pipe(gulp.dest(dest));
    },
    buildMd5: function () {

    }
}

var list = [];
for (var key in fileConfig.modules) {
    (function (key) {

    }(key))
}


