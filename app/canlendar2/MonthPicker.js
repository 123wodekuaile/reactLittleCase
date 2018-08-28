/*
* @Author: 21746209
* @Date:   2018-08-22 20:35:30
* @Last Modified by:   21746209
* @Last Modified time: 2018-08-28 13:06:59
*/
import React from "react"
import classnames from "classnames"

export default class MonthPciker extends React.Component{
	constructor(props){
		super(props)
	}
	goPrevMonth(){
		console.log("月减")
		if(this.props.month==1){
			this.props.setMonth(12);
			this.props.setYear(this.props.year-1);
		}else {
			this.props.setMonth(this.props.month-1)
		}
	}
	goNextMonth(){
		console.log("月加")
		if(this.props.month==12){
			this.props.setMonth(1);
			this.props.setYear(this.props.year+1);
		}else {
			this.props.setMonth(this.props.month+1);
		}
	}
	render(){
		const year = this.props.year;
		const month = this.props.month;
		return <div>
			<button onClick={this.goPrevMonth.bind(this)}>-</button>
			<span onClick={()=>this.props.setView("year")}>{year}年</span>
			<span onClick={()=>this.props.setView("month")}>{month}月</span>
			<button onClick={this.goNextMonth.bind(this)}>+</button>
		</div>
	}
}