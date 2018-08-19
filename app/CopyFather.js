/*
* @Author: 21746209
* @Date:   2018-08-18 20:24:33
* @Last Modified by:   21746209
* @Last Modified time: 2018-08-18 20:43:23
*/
import React from "react"
import Copy from "./Copy.js"
export default class CopyFather extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			"year": 2018,
			"month": 8
		}
	}
	goNextMonth(){
		if(this.state.month==12){
			this.setState({
				"year":this.state.year+1,
				"month":1
			})
		}else {
			this.setState({
				"month":this.state.month+1
			})
		}
	}
	goPrevMonth(){
		if(this.state.month==1){
			this.setState({
				year:this.state.year-1,
				month:12
			})
		}else {
			this.setState({
				month:this.state.month-1
			})
		}
	}
	render(){
		return <div>
			<h3>
			<button onClick={this.goPrevMonth.bind(this)}>-</button>
			{this.state.year}年{this.state.month}月
			<button onClick={this.goNextMonth.bind(this)}>+</button>
			</h3>
			<Copy year = {this.state.year} month={this.state.month}></Copy>
		</div>
	}

}