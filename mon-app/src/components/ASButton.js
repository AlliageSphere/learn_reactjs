import React, { Component } from 'react';

export class ASButton extends React.Component
{
	constructor(props)
	{
		super(props);
		
		this.state = {
			value: "Clique sur moiiii !!!"
		}
		
		//this.helloThere = this.helloThere.bind(this);
	}
	
	handleClickButton()
	{
		const value = "Tu m'as cliqué. :3";
		
		this.setState({
			value:value
		})
	}

	helloThere()
	{
		alert('Hi! Admin');
	}
	
	render()
	{
		return(
			<div className="divButton">
				<button type="button" onClick={()=> this.handleClickButton()}>{this.state.value}</button>
			</div>
		)
	}
}
//this.helloThere