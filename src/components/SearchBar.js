import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchSearchResult } from '../actions'

export class SearchBar extends React.Component {
	// state = { searchTerm: '' };
	
	onSubmit = (formValues) => {
		this.props.fetchSearchResult(formValues.searchTerm)
	}

	renderInput = ({ input }) => {
		return (
			<div className="ui fluid left icon input">
				<input { ...input } autoComplete="off" placeholder="Search" />
				<i className="search icon"></i>
			</div>
		)
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
				<Field name="searchTerm" component={this.renderInput} label="Search" />
			</form>
		)
	}
}

SearchBar.propTypes = {
	fetchSearchResult: PropTypes.func,
	handleSubmit: PropTypes.func.isRequired
}

const mapStateToProps = state => {
	return {
		searchTerm: state.searchTerm
	}
}

const formWrapped = reduxForm({
	form: 'searchBar'
})(SearchBar)

export default connect(mapStateToProps, { fetchSearchResult })(formWrapped)