/*
* @Author: 21746209
* @Date:   2018-08-22 20:34:43
* @Last Modified by:   21746209
* @Last Modified time: 2018-08-28 12:39:42
*/
import React from 'react'
import YearView from "./YearView.js"
import MonthView from "./MonthView.js"
import DayView from "./DayView.js"
import MonthPicker from "./MonthPicker.js"
import YearPicker from "./YearPicker.js"

export default class Canlender extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			year: 2018,
			month:12,
			view:"year"
		}
	}
	setYear(year){
		this.setState({year});
	}
	setMonth(month){
		this.setState({month});
	}
	setView(view){
		this.setState({view});
	}
	showView(){	
		switch(this.state.view){
			case "year":
			return <YearView year={this.state.year} 
				month={this.state.month} 
				setYear={this.setYear.bind(this)} 
				setView={this.setView.bind(this)}/ >
				
			case "month": 
			return <MonthView 
				year={this.state.year} 
				month = {this.state.month} 
				setMonth={this.setMonth.bind(this)} 
				setView={this.setView.bind(this)}/>	
				
			case "day":
			return <DayView year={this.state.year}
				 month={this.state.month} 
				 setYear={this.setYear.bind(this)} 
				 setView={this.setView.bind(this)}/>
		}
	}
	showPicker(){
		switch(this.state.view){
			case "year":
			return <YearPicker 
				year={this.state.year} 
				month={this.state.month} 
				setYear={this.setYear.bind(this)} 
				setView={this.setView.bind(this)}/>
				
			case "day":
			return <MonthPicker 
				year={this.state.year} 
				month={this.state.month} 
				setYear={this.setYear.bind(this)} 
				setView={this.setView.bind(this)}
				setMonth={this.setMonth.bind(this)}/ >
		}
	}

	render(){
		return <div>
			{
				this.showPicker()
			}
			{
				this.showView()
			}
		</div>
	}
}