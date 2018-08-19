/*
* @Author: 21746209
* @Date:   2018-07-08 13:13:34
* @Last Modified by:   21746209
* @Last Modified time: 2018-08-07 16:33:40
*/
import React from "react"
import classnames from "classnames"
import Son from "./Son.js"

// export default class Clean extends React.Component{
// 	constructor(props){
// 		super(props);
// 	}
// 	render(){
// 		return <h1>这是一个类组件</h1>
// 	}
// }
export default class Clean extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			"a":30,
			"w": 600,
			"h":300,
			"show":true,
			"text":true,
			"zhe":true,
			"shi":true,
			"lei":false,
			"students":[
				{"name":"Tom","point":65},
				{"name":"Jerry","point":85},
				{"name":"Nick","point":99}
			],
			"value": 15
		}
	}
	show(){
		this.setState({
			"a":this.state.a+1
		})
	}
	control(){
		this.setState({
			"show" : !this.state.show,
			"text": !this.state.text
		})
	}
	changeTet(){
		if(this.state.text){
			return <span>显示</span>
		}else{
			return  <span>隐藏</span>
		}
	}
	changeInp(){
		this.setState({
			"inp":this.refs.the.value
		})
	}
	changeHandeler(value){
		this.setState({
			"value": value
		})
	}
	render(){
		return <div>
				<input type="range" min="0" max="255" value={this.state.a}   onChange={(event) => {this.rangeChangeHandeler(event.target.value)}}/>
				<p>{this.state.a}</p>
				<input type="text" ref="the" on ={this.changeInp.bind(this)}/>
				<p>{this.state.inp}</p>
				<button onClick={this.show.bind(this)}>点我+1</button>&nbsp;&nbsp;
				<button onClick={this.control.bind(this)}>{this.changeTet()}</button>
				{this.state.show?<div className="box" style={{"width":this.state.w+"px","height":this.state.h+"px"}}></div>:null}
				<ul>
					{this.state.students.map((item,index)=>{
						return <li key={index}>{item.name}</li>
					})
				}    
				</ul>
				<p className={classnames({
					"zhe":this.state.zhe,
					"shi":this.state.shi,
					"lei":this.state.lei
				})}>会有什么类添加进来？？</p>
				<Son a={this.state.a} show={this.show.bind(this)}></Son>
				<input type="text"
				 value={this.state.value} 
				 onChange={(e)=>{this.changeHandeler(e.target.value)}} />
			</div>
		}
	}
// export default class Clean extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			"a": 100,
// 			"flag" : true
// 		}
// 	}
// 	add(){
// 		this.setState({
// 			"a": this.state.a + 1
// 		})
// 	}
	
// 	showOrhide(){
// 		this.setState({
// 			"flag":!this.state.flag
// 		})
// 	}
// 	render(){
// 		const show = ()=>{
// 		return	this.state.flag ? <div className='box'></div> : null
// 		}
// 		return <div>
// 			<button onClick={this.showOrhide.bind(this)}>点我切换</button>
// 			{show()}
// 			</div>
// 	}
// }


// // export default class Clean extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			"b":205
// 		}
// 	}
// 	reduce(){
// 		this.setState({
// 			"b": this.state.b - 1
// 		})
// 	}
// 	add(){
// 		this.setState({
// 			"b":this.state.b + 1
// 		})
// 	}
// 	render(){
// 		return <div>
// 		<h1>{this.state.b}</h1>
// 		<button onClick={this.reduce.bind(this)}>点我减一</button>&nbsp;
// 		<button onClick={this.add.bind(this)}>点我减一</button>
// 		</div>
// 	}  
// }
// export default class Clean extends React.Component{
// 	constructor (props){
// 		super(props);
// 		this.state = {
// 			"a":100
// 		}
// 	}
// 	add(){
// 		this.setState({
// 			"a" : this.state.a + 1
// 		})
// 	}
// 	render(){
// 		return <div>
// 			<h1>{this.state.a}</h1>
// 			<button  onClick={this.add.bind(this)}>点我</button>
// 		</div>
// 	}
// } 