/*
* @Author: 21746209
* @Date:   2018-07-07 16:45:18
* @Last Modified by:   21746209
* @Last Modified time: 2018-07-08 12:54:13
*/
const path  =require("path");
module.exports = {
	entry: "./app/main.js",
	output:{
		path: path.resolve(__dirname,"dist"),
		filename:"bundle.js"
	},
	module:{
		rules:[
		{
			test:/\.jsx?$/,
			include:[
				path.resolve(__dirname,"app")
			],
			exclude:[
				path.resolve(__dirname,"node_modules")
			],
			loader:"babel-loader",
			options:{
				presets:["env","react"]
			}
		}]
	},
	watch:true
}