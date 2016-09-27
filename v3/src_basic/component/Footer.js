/**
 * Created by sunsu on 2016/9/18.
 */
import React,{Component} from 'react'
import {Filters} from '../actionType/actionType'
export  default class Footer extends Component{
    render(){
        return (
            <div>
                SHOW:{this.renderFilter(Filters.all,'ALL')},
                     {this.renderFilter(Filters.active,'ACTIVE')},
                     {this.renderFilter(Filters.complete,'COMPLETE')}
            </div>
        )
    }
    renderFilter(filter,name){
        if(this.props.filter==filter){
            return name;
        }
        else{
            return (
                <a href="#" onClick={()=>this.props.onClick(filter)}>{name}</a>
            )
        }
    }
}