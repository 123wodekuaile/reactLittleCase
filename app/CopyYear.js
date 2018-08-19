/*
* @Author: 21746209
* @Date:   2018-08-19 15:52:31
* @Last Modified by:   21746209
* @Last Modified time: 2018-08-19 16:35:54
*/

import React from "react"
import classnames from "classnames"
export default class CopyYear extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		var year = this.props.year;
		var setYear = this.props.setYear;
		var dangqiannian = year - year % 10;
		var shangshinian = dangqiannian - 10;
		var xiashinian = dangqiannian  +  10;

		function show10Year(){
			var Year = [];
			for(let i=0;i<10;i++){
				var temp = [];
				for(let j=0;j<3;j++){
					temp = [
						<td onClick={()=>setYear(shangshinian+i)}>{shangshinian+i}</td>,
						<td 
						className={classnames({"hong":year==dangqiannian+i})} 
						onClick={()=>setYear(dangqiannian+i)}>{dangqiannian+i}</td>,
						<td onClick={()=>setYear(xiashinian+i)}>{xiashinian+i}</td>
					]
				}
				Year.push(<tr>{temp}</tr>);
			}
			return Year;
		}
		return <div>
			<table>
				<tbody>
					{show10Year()}
				</tbody>
			</table>
		</div>

	}

}