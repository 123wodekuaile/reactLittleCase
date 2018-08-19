/*
* @Author: 21746209
* @Date:   2018-08-18 17:42:54
* @Last Modified by:   21746209
* @Last Modified time: 2018-08-18 20:43:42
*/
import React from "react";
export default class Copy extends React.Component{
	constructor(props){
		super(props);
	}  
	render(){
		const {year,month} = this.props;
		var benyue1haoxingqiji = (new Date(year,month-1,1)).getDay();
		var benyuegongjitian = (new Date(new Date(year,month,1)-1)).getDate();
		var shangyuegongjitian = (new Date(new Date(year,month-1)-1)).getDate();
		var arr = [];
		while(benyue1haoxingqiji--){
			arr.unshift(shangyuegongjitian--);
		}
		var count = 1;
		while(benyuegongjitian--){
			arr.push(count++);
		}
		count = 1;
		var zougongjitian = arr.length>35?42 : 35;
		while(arr.length!=zougongjitian){
			arr.push(count++);
		}
		var Arr = [];
		for(var i=0;i<arr.length / 7;i++){
			Arr.push(arr.slice(i*7,i*7+7));
		}
		// slice方法从哪里开始到哪里结束
		// function showDay(){
		// 	for(var i=0;i<arr.length / 7;i++){
		// 		var domArr = [];
		// 		for(var j=0;j<7;j++){
		// 			var temp = [];
		// 			temp.push(<td key={j}>{arr[i*7+j]}</td>)
		// 		}
		// 		domArr.push(<tr key={i}>{temp}<tr>)
		// 	}
		// }
		function showDay(){
			var domArr = [];
			for(var i=0;i<Arr.length;i++){
				var temp = [];
				for(var j=0;j<7;j++){
					temp.push(<td>{Arr[i][j]}</td>)
				}
				domArr.push(<tr>{temp}</tr>)
			}
			return domArr;
		} 
		return <div className = "center">
				<table>
					<tbody>
					<tr>
						<th>日</th>
						<th>一</th>
						<th>二</th>
						<th>三</th>
						<th>四</th>
						<th>五</th>
						<th>六</th>
						
					</tr>
						{showDay()}
					</tbody>
				</table>
			</div>
	}
}