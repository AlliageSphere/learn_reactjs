// List.js
import React from 'react'
import { FormWrapper } from '../forms'

export class List extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list: []
        }
    }

    addToList(e){
		e.default;
		console.log("Hey !");
		const list = this.state.list.slice();
		const input = target.children[0];
		
		input
    }

    render(){
        const {list} = this.state
        const wrapTaskWithLi = list.map((task,index) => {
            return <li>{task}</li>
        })
        return (
            <>
                <ul>
                    {wrapTaskWithLi}
                </ul>
                <FormWrapper handleSubmit={(e) => this.addToList(e)} />
            </>
        )
    }
}