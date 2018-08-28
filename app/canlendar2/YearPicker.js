/*
* @Author: 21746209
* @Date:   2018-08-22 20:35:47
* @Last Modified by:   21746209
* @Last Modified time: 2018-08-27 16:43:23
*/
import React from "react"
export default class YearPicker extends React.Component{
	constructor(props){
		super(props)
	}
	goPrevYear(){
		this.props.setYear(this.props.year-10);
	}
	goNextYear(){
		this.props.setYear(this.props.year+10);
	}
	render(){
		return<div>
			<button onClick={this.goPrevYear.bind(this)}>前十年</button>
			<span>{this.props.year}年</span>
			<button onClick={this.goNextYear.bind(this)}>后十年</button>
		</div>
	}
}