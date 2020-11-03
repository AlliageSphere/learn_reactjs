import React, { Component } from 'react';

export class ASButton extends React.Component
{
	constructor(props)
	{
		super(props);
		this.helloThere = this.helloThere.bind(this);
	}

	helloThere()
	{
		alert('Hi! Admin');
	}
	
	render()
	{
		return(
			<div className="divButton">
				<button type="button" onClick={this.helloThere}>Clique-moi !</button>
			</div>
		)
	}
}
