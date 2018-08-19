/*
* @Author: 21746209
* @Date:   2018-07-07 16:47:51
* @Last Modified by:   21746209
* @Last Modified time: 2018-08-18 20:30:37
*/
import React from "react";
import ReactDOM from "react-dom";
import Clean from "./Clean.js";
import Shopping from "./Shopping.js"
import MonthView from "./MonthView.js"
import CopyFather from "./CopyFather.js"

ReactDOM.render(
	<CopyFather year="2018" month="8"></CopyFather>,
	document.getElementById("app-container")
)