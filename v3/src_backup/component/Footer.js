/**
 * Created by sunsu on 2016/9/14.
 */
import React ,{Component} from 'react'

export  default class Footer extends Component{
    renderFilter(filter,name){
        if(filter==this.props.filter){
            return name;
        }
        return (
            <a href="#" onClick={e=>{
                e.preventDefault();
                this.props.filterChange(filter);
            }}>{name}</a>
        )
    }
    render(){
        return (
            <div>
                Show:{this.renderFilter('SHOW_ALL','All')}{','}
                     {this.renderFilter('SHOW_COMPLETED','Completed')}{','}
                     {this.renderFilter('SHOW_ACTIVE','Active')}
            </div>
        )
    }
}