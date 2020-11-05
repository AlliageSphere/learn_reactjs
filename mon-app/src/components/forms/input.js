import React from 'react';

export class Input extends React.Component
{
    constructor(props)
	{
        super(props)
    }

    render()
	{
        const {type, name, placeholder, className} = this.props;
        
		return (
			<input type={type} name={name} className={className} placeholder={placeholder} onChange={(e) => this.props.onChange(e)}/>
		)
    }
}