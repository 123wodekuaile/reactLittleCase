/*
* @Author: 21746209
* @Date:   2018-08-22 11:00:34
* @Last Modified by:   21746209
* @Last Modified time: 2018-08-22 19:21:46
*/

import React from "react"
export default class New extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const year = this.props.year;
		var dangqiannian = year - year % 10;
		var qianshinian = dangqiannian - 10;
		var houshinian = dangqiannian + 10;
		function showYear(){
			var Arr = [];
			for(let i=0;i<10;i++){
				var arr = [];
				for(let j=0;j<3;j++){
					arr = [<td>{qianshinian + i}</td>,
						<td>{dangqiannian + i}</td>,
						<td>{houshinian + i}</td>
					]
			}
			Arr.push(<tr>{arr}</tr>)

		}
		return Arr;
	}
		return <div>
			<table>
				<tbody>
					{showYear()}
				</tbody>
			</table>
		</div>
	} 
}