import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'


const SearchResultItem = ({objectID, title, story_title, points, created_at, num_comments, url, author}) => {
    const itemTitle = (title === null || title === '' ? story_title : title)
    return (
        <div className="item" key={objectID}>
			<div className="content">
				<div className="header">{itemTitle}</div>
                <div className="extra">
					<div className="ui label" data-test="points">{points === null ? 0 : points} points</div>
					<div className="ui label" data-test="author">{author}</div>
					<div className="ui label"><Moment fromNow>{created_at}</Moment></div>								
                    <div className="ui label" data-test="num_comments">{ num_comments === null ? 0 : num_comments} comments</div>
					<div className="ui label"><a href={url} target="_blank" rel="noopener noreferrer"><i className="linkify icon"></i></a></div>
				</div>
			</div>
		</div>
    )
}

SearchResultItem.propTypes = {
	objectID: PropTypes.string.isRequired,
    title: PropTypes.string,
    story_title: PropTypes.string,
    points: PropTypes.number,
    created_at: PropTypes.string,
    num_comments: PropTypes.number,
    url: PropTypes.string,
    author: PropTypes.string
}

export default SearchResultItem