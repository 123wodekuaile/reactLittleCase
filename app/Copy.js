/*
* @Author: 21746209
* @Date:   2018-08-18 17:42:54
* @Last Modified by:   21746209
* @Last Modified time: 2018-08-19 19:26:21
*/
import React from "react";
import solarLunar from 'solarLunar';

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
		//solarLunar.solar2lunar(year,month-1,arr[i*7+j]).dayCn这套方法就是把当前的农历转换为阴历
		//部分的转换问题主要是使月份温和
		function showDay(){
			var domArr = [];
			for(var i=0;i<arr.length/7;i++){
				var temp = [];
				for(var j=0;j<7;j++){
					if(i*7+j<benyue1haoxingqiji){
						//上个月的尾巴
						temp.push(<td>
						{arr[i*7+j]}
						<br/>
						{solarLunar.solar2lunar(year,month-1,arr[i*7+j]).dayCn}
						</td>)
					}else if(i*7+j>benyue1haoxingqiji+benyuegongjitian){
						temp.push(<td>
						{arr[i*7+j]}
						<br/>
						{solarLunar.solar2lunar(year,month-1,arr[i*7+j]).dayCn}
						</td>)	
					}else {
						temp.push(<td>
						{arr[i*7+j]}
						<br/>
						{solarLunar.solar2lunar(year,month,arr[i*7+j]).dayCn}
						</td>)	
					}

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