/*
* @Author: 21746209
* @Date:   2018-08-18 20:24:33
* @Last Modified by:   21746209
* @Last Modified time: 2018-08-19 16:44:13
*/
import React from "react"
import Copy from "./Copy.js"
import CopyYear from "./CopyYear.js"
export default class CopyFather extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			"year": 2018,
			"month": 8,
			"view":true
		}
	}
	changeView(){
		this.setState({
			view : !this.state.view
		})
	}
	setYear(year){
		this.setState({
			year
		})
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
	goPrev10Year(){
		this.setState({
			year: this.state.year-10
		})
	}
	goNext10Year(){
		this.setState({
			year:this.state.year+ 10
		})
	}


	render(){
		return <div>
		{
			this.state.view==true?
			<h3>
			<button onClick={this.goPrev10Year.bind(this)}>-</button>
			<span onClick={this.changeView.bind(this)}>{this.state.year}年</span>
			<button onClick={this.goNext10Year.bind(this)}>+</button>
			</h3>
			:
			<h3>
			<button onClick={this.goPrevMonth.bind(this)}>-</button>
			<span onClick={this.changeView.bind(this)}>{this.state.year}年</span>{this.state.month}月
			<button onClick={this.goNextMonth.bind(this)}>+</button>
			</h3>
		}
		
		{
			this.state.view==true?
			<CopyYear year={this.state.year} setYear={this.setYear.bind(this)}/>
			:
			<Copy year = {this.state.year} month={this.state.month}></Copy>
		}
		</div>
	}

}