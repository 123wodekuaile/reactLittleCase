/*
* @Author: 21746209
* @Date:   2018-08-22 20:35:19
* @Last Modified by:   21746209
* @Last Modified time: 2018-08-27 16:08:41
*/
import React from "react"
export default class DayView extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const{year,month,setView} = this.props;
		var benyue1haoxingqiji = new Date(year,month-1,1).getDay();
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
		var zongtianshu = arr.length>35?42:35;
		var count = 1;
		while(arr.length!=zongtianshu){
			arr.push(count++);
		}
		function showDay(){
			var Arr = [];
			for(var i=0;i<arr.length / 7;i++){
					var temp = [];
					for(var j=0;j<7;j++){
						temp.push(<td>{arr[i*7+j]}</td>);
				}
				Arr.push(<tr>{temp}</tr>)
			}
			return Arr;
		}
		
		return <div>
			<table>
				<thead>
					<tr>
					<th>日</th>
					<th>一</th>
					<th>二</th>
					<th>三</th>
					<th>四</th>
					<th>五</th>
					<th>六</th>
					</tr>
					</thead>
				<tbody>
					{showDay()}
				</tbody>
			</table>
		</div>
	}
}
