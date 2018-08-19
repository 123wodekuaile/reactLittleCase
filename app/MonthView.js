/*
* @Author: 21746209
* @Date:   2018-08-09 18:52:56
* @Last Modified by:   21746209
* @Last Modified time: 2018-08-18 20:24:13
*/
import React from "react"

export default class MonthView extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const {year,month} = this.props;
		var benyue1haoxingqiji = (new Date(year,month-1,1)).getDay();
		var benyuegongjitian = (new Date(new Date(year,month,1)-1)).getDate();
		var shangyuegongjitian = (new Date(new Date(year,month-1,1)-1)).getDate();
		var arr = [];
		while(benyue1haoxingqiji--){
			arr.unshift(shangyuegongjitian--);
		}
		var count = 1;
		while(benyuegongjitian--){
			arr.push(count++);
		}
		var zongxiangshu = arr.length>35?42:35;
		count=1;
		while(arr.length!=zongxiangshu){
			arr.push(count++);
		}
		var Arr = [];
		for(var i=0;i<zongxiangshu/7;i++){
			Arr.push(arr.slice(i*7,i*7+7));
		}
		function showARR(){
			var domArr = [];
			for(var i=0;i<arr.length / 7;i++){
				var temp = [];
				for(var j=0;j<7;j++){
					temp.push(<td key={j}>{Arr[i][j]}</td>)
				}
				domArr.push(<tr key={i}>{temp}</tr>)	
			}
			return domArr;
		}
		return <div>
		<h3>{year}年{month}月日历</h3>
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
					{showARR()}
				</tbody>
			</table>
		</div>
	}
}