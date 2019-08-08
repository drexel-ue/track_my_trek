import React from 'react'
import ProspectiveFriendIndexItemContainer from './prospective_friend_index_item_container';

export default class ProspectiveFriendsSreach extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showError: this.props.showError,
            query_string: this.props.query_string,
            results: this.props.results
        }
        this.handleInput = this.handleInput.bind(this)
        this.performSearch = this.performSearch.bind(this)
    }

    handleInput(event) {
        event.preventDefault()
        this.setState({
            showError: false,
            query_string: event.target.value
        })
    }

    performSearch(event) {
        event.preventDefault()

        if (this.state.query_string.length > 0) {
            this.props.fetchProspectiveFriends(this.props.userId, this.state.query_string)
                .then(results => this.setState({ results: results.prospective_friends }))
        } else {
            this.setState({ showError: true })
        }
    }

    error() {
        return this.state.showError ? (
            <div className='empty_query_string'>
                Please enter a name or email...
            </div>
        ) : <div></div>
    }

    searchBar() {
        return (
            <div className='search'>
                <div className='friend_count'>
                    FIND FRIENDS TO TREK WITH BY FIRST NAME, LAST NAME, OR EMAIL:
                </div>
                <div className='search_bar_row'>
                    <input
                        type="text"
                        className='search_input'
                        onChange={this.handleInput} />
                    <button
                        className='search_button'
                        onClick={this.performSearch}>
                        SEARCH
                    </button>
                </div>
                {this.error()}
            </div>
        )
    }

    results() {
        return (
            <div className='results'>
                {this.state.results.map(user => (
                    <ProspectiveFriendIndexItemContainer key={user.id} user={user} />
                ))}
            </div>
        )
    }

    render() {
        return (
            <div className='prospective_friends_search'>
                {this.searchBar()}
                {this.results()}
            </div>
        )
    }
}