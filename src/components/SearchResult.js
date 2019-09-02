import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import Moment from 'react-moment';
import { fetchSearchResult } from '../actions';
import './pagination.css';

export class SearchResult extends React.Component {
    componentDidMount() {
        this.props.fetchSearchResult();
    }

    renderList() {
		const { results } = this.props;
		if (results.hits !== undefined) {
			return results.hits.map( result => {
				const {objectID, title, story_title, points, author, created_at, num_comments, url} = result;
				return (
					<div className="item" key={objectID}>
						<div className="content">
							<div className="header">{_.isEmpty(title) ? story_title : title}</div>
							<div className="extra">
								<div className="ui label">{points === null ? 0 : points} points</div>
								<div className="ui label">{author}</div>
								<div className="ui label"><Moment fromNow>{created_at}</Moment></div>								
								<div className="ui label">{ num_comments === null ? 0 : num_comments} comments</div>
								<div className="ui label"><a href={url} target="_blank" rel="noopener noreferrer"><i className="linkify icon"></i></a></div>
							</div>
						</div>
					</div>
				);
			});
		}
    }

	handlePageClick = ({selected}) => {
		this.props.fetchSearchResult(this.props.results.query, selected);
	};

    render() {
		const { results } = this.props;
	
		if (results.length === 0) {
			return <div data-test="empty" className="ui container"></div>
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
		);
    }
}

const mapStateToProps = (state) => {
	return {
		results: state.searchResult,
		isLoading: false
	};
}

export default connect(mapStateToProps, { fetchSearchResult })(SearchResult);