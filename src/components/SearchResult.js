import React from 'react'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate'
import PropTypes from 'prop-types'
import { fetchSearchResult } from '../actions'
import SearchResultItem from './SearchResultItem'
import '../pagination.css'

export class SearchResult extends React.Component {
    componentDidMount() {
        this.props.fetchSearchResult()
    }

    renderList() {
		const { results } = this.props

		if (results.hits !== undefined && results.hits.length > 0) {
			return results.hits.map( result => {
				const {objectID} = result
				return <SearchResultItem {...result} key={objectID} />
			})
		}
    }

	handlePageClick = ({selected}) => {
		this.props.fetchSearchResult(this.props.results.query, selected)
	};

    render() {
		const { results } = this.props
	
		if (results === null) {
			return <div data-test="empty" className="ui container"></div>
		}

		if (results.hits.length === 0) {
			return (
				<div data-test="no-seach-result" className="ui container center aligned">
					No search result for this keyword <b>{results.query}</b>
				</div>
			)
		}

		return (			
			<div className="ui container" data-test="display-results">
				<div className="ui segment">
					<div className="ui divided items ">
						{this.renderList()}				
					</div>
				</div>	
				<ReactPaginate
					previousLabel="previous"
					nextLabel="next"
					breakLabel="..."
					breakClassName="paginationBreak"
					pageCount={results.nbPages}
					marginPagesDisplayed={1}
					onPageChange={this.handlePageClick}
					containerClassName="paginationContainer"
					nextClassName="paginationNext"
					previousClassName="paginationPrevious"
					activeClassName="paginationActive"
					pageClassName="paginationPage"
				/>
			</div>
		)
    }
}

SearchResult.propTypes = {
	results: PropTypes.object,
	fetchSearchResult: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		results: state.searchResult
	}
}

export default connect(mapStateToProps, { fetchSearchResult })(SearchResult)