import React from 'react';

export class Button extends React.Component
{
    constructor(props)
	{
        super(props);
		
		this.state = {
            isDisabled: true
        }
    }

    render()
	{
		const { value, className, isDisabled } = this.props;
	
		return (
			<input type="submit" className={className} disabled={isDisabled} value={value} />
		)
    }
}