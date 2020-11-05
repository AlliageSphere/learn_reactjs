import React from 'react';
import {Input} from './input'
import {Button} from './button'

export class FormWrapper extends React.Component
{
    constructor(props)
	{
        super(props);
		
        this.state = {
            isDisabled: true
        }
    }

    inputReceivedData(e)
	{
		let result;
		
		console.log(e);
		console.log(e.target.value.length);
		
		if(e.target.value.length !== 0)
		{
			result = false;
		}
		else
		{
			result = true;
		}
		
		this.setState({isDisabled:result});
    }

    render(){
        const {isDisabled} = this.state
		
        return (
        <form>
            <Input type="text" name="rechercher" placeholder="Saisissez votre recherche..." className="recherche" onChange={(e) => this.inputReceivedData(e)}/>
            <Button value="valider" className="button" isDisabled={isDisabled} />
        </form>)
    }
}