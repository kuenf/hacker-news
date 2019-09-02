import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchSearchResult } from '../actions';

export class SearchBar extends React.Component {
	state = { searchTerm: '' };
	
	onSubmit = (formValues) => {
		this.props.fetchSearchResult(formValues.searchTerm);
	}

	renderInput = ({ input, label, meta }) => {
		return (
			<div className="ui fluid left icon input">
				<input { ...input } autoComplete="off" placeholder="Search" />
				<i className="search icon"></i>
			</div>
		);
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
				<Field name="searchTerm" component={this.renderInput} label="Search" />
			</form>
		);
	}
}

const mapStateToProps = state => {
	return {
		searchTerm: state.searchTerm
	};
};

const formWrapped = reduxForm({
	form: 'searchBar'
})(SearchBar);

export default connect(mapStateToProps, { fetchSearchResult })(formWrapped);