import React ,{Component} from 'react';
import AddTodo from '../component/AddTodo';
import TodoList from '../component/TodoList';
import Footer from '../component/Footer';

export default class App extends Component{
    componentWillReceiveProps(){
        console.log(6)
    }
    render(){
        console.log(7)
        return(
            <div>
                <AddTodo onAddClick={text=>console.log('add todo',text)} />
                <TodoList todos={[{
                                    text: 'Use Redux',
                                    complete: true
                                  }, {
                                    text: 'Learn to connect it to React',
                                    complete: false
                                  }]}
                          onClick={index=>console.log('todo clicked',index)} />

                <Footer
                    filter='SHOW_ALL'
                    filterChange={nextFilter =>console.log('filter change', nextFilter)}
                />
            </div>
        )
    }
}
