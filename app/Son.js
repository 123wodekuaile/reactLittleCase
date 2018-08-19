/*
* @Author: 21746209
* @Date:   2018-07-13 11:41:11
* @Last Modified by:   21746209
* @Last Modified time: 2018-07-27 15:49:27
*/
// import React from "react"
// export default class Son extends React.Component{
// 	constructor(props){
// 		super(props);

// 	}

// 	render(){
// 		return <div>
// 			<p>哈哈哈，这是父亲给我的{this.props.txt}元钱</p>
// 			<button onClick={()=>{this.props.show()}}>点我</button>
		
// 		</div>
// 	}

// }
import React from "react"
export default class Son extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			"myFather":this.props.txt
		}
	}
	showJiuJiu(){
		var result = [];
		for(var i=0;i<9;i++){
			var temp = [];
			for(var j=1;j<9;j++){
				if(i<j){
					temp.push(<td key={j}>{i}*{j} = {i * j}</td>)
				}else {
					temp.push(<td></td>)
				}
			}
		}
		result.push(<tr>{temp}</tr>)
		return result;
	}
	render(){
		return <div>

			<table>
				<tbody>{this.showJiuJiu()}</tbody>
			</table>
		</div>
	}
}
