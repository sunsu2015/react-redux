/**
 * Created by sunsu on 2016/9/14.
 */
import React ,{Component} from 'react'

export default class Footer extends Component{
    render(){
        return(
            <div>
                Show:{this.renderFilter('SHOW_ALL','all')},
                     {this.renderFilter('SHOW_COMPLETE','complete')},
                     {this.renderFilter('SHOW_ACTIVE','active')}
            </div>
        )
    }

    renderFilter(filter,name){
        if(filter===this.props.filter){
            return name;
        }
        return(
            <a href="#" onClick={()=>this.props.onClick(name)}>
                {name}
            </a>

        )
    }

}