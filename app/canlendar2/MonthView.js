/*
* @Author: 21746209
* @Date:   2018-08-22 20:35:12
* @Last Modified by:   21746209
* @Last Modified time: 2018-08-28 12:48:08
*/
import React from "react"
import classnames from "classnames";
export default class MonthView extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const month = this.props.month;
		const setMonth = this.props.setMonth;
		const setView = this.props.setView;
		function showMonth(){
			var Arr = [];
			for(let j=1;j<7;j++){
				var temp = [];
				temp = [
					<td 
					className={classnames({"hong":month==j})}
					onClick={()=>{setMonth(j);setView("day")}}
					>{j}月</td>,
					<td
					className={classnames({"hong":month==j+6})}
					onClick={()=>{setMonth(j+6);setView("day")}}
					>{j+6}月</td>
				]
				Arr.push(<tr>{temp}</tr>);
			}
			return Arr;
		}
		return <div>
		请选择月份
			<table>
				<tbody>
					{showMonth()}
				</tbody>
			</table>
		</div>
	}
}