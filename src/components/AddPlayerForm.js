import React from 'react';
import PropTypes from 'prop-types';

class AddPlayerForm extends React.Component {

	playerInput = React.createRef()

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addPlayer(this.playerInput.current.value);
		e.currentTarget.reset();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input 
					type="text"
					ref={this.playerInput}
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

AddPlayerForm.propTypes = {
	addPlayer: PropTypes.func
}

export default AddPlayerForm;