import React from 'react';

class AddPlayerForm extends React.Component {
	state = {
		value: ''
	}

	handleChangeEvent = (e) => {
		this.setState({
			value: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addPlayer(this.state.value);
		this.setState({
			value: ''
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input 
					type="text"
					value={this.state.value}
					onChange={this.handleChangeEvent}
					placeholder="Enter a player's name"
				/>
				<input 
					type="submit"
					value="Add player"
				/>
			</form>
		);
	}
}

export default AddPlayerForm;