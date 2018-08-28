/*
* @Author: 21746209
* @Date:   2018-08-22 20:35:01
* @Last Modified by:   21746209
* @Last Modified time: 2018-08-28 12:40:32
*/
import React from "react";
import classnames from "classnames";
export default class YearView extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		const { year, setYear, setView} = this.props;
		var dangqiannian = year - year % 10;
		var qianshinian = dangqiannian - 10;
		var houshinian = dangqiannian + 10;
		function showYear(){
			var Arr = [];
			for(let i=0;i<10;i++){
				var temp = [];
				for(let j=0;j<3;j++){
					temp = [
					<td 
					className={classnames({"hong":year==qianshinian+i})}
					onClick={()=>{setYear(qianshinian+i);setView("month")}}
					>{qianshinian + i}
					</td>,
					<td 
					className={classnames({"hong":year==dangqiannian+i})}
					onClick={()=>{setYear(dangqiannian+i);setView("month")}}
					>{dangqiannian + i}
					</td>,
					<td 
					className={classnames({"hong":year==houshinian+i})}
					onClick={()=>{setYear(houshinian+i);setView("month")}}
					>{houshinian + i}
					</td>		
					]
				}
				Arr.push(<tr>{temp}</tr>)
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