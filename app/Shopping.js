/*
* @Author: 21746209
* @Date:   2018-07-14 11:03:58
* @Last Modified by:   21746209
* @Last Modified time: 2018-08-08 19:18:54
*/
import React from "react"
import Son from "./Son.js"
export default class Shopping extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			"r":250,
			"g":150,
			"b":255,
			"name":"",
			"txt":"张小二",
			"i":10,
			"j":10
		}
	}
	changeColor(color,value){
		this.setState({
			[color]:value
		})
	}
	change(e){
		this.setState({
			"name":e
		})
	}
	render(){
		return <div>
		<p>{this.state.name}</p>
		姓名：<input type="text" value={this.state.name}  onChange={(e)=>{this.change(e.target.value)}}/>
		年龄：<input type="text" />		
   		
		<textarea
			style={{"backgroundColor":`rgb(${this.state.r},${this.state.g},${this.state.b})`}}
			cols="30"
			rows="10"
			value={this.state.txt}
			onChange={(e)=>{this.setState({"txt":e.target.value})}}
		>
		</textarea><span>字数： {this.state.txt.length} / 140</span>


		<div className="box" 
			 style={{"backgroundColor":`rgb(${this.state.r},${this.state.g},${this.state.b})`}}
			></div>
		<div>	
			<p>
			<input type="range" 
			onChange={(e)=>{this.changeColor("r",e.target.value)}} />
			</p>
			<p>
			<input type="range"
			onChange={(e)=>{this.changeColor("g",e.target.value)}} />
			</p>
			<p>
			<input type="range"
			onChange={(e)=>{this.changeColor("b",e.target.value)}} />
			</p>
			
		</div>
		<Son txt={this.state.txt}></Son>
		</div>

	}
}






