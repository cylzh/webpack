/**
 * Created by jade on 2016/1/12.
 */
var path = require("path");


var fileConfig ={

    source : "source",
    develop:"develop",
    production:"production",

    src:{
        tpl:"tpl/**",
        css:"styles/**/*.css",
        js:"js/**/*.js",
        html:"views/**/*.html",
        img:"images/**"
    },

    modules : {
        "t1":{
            src:"t1",
            dest:"t1",
            name:"t1"
        }

    }
}


module.exports = fileConfig;