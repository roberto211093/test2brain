import React, {Component} from 'react';
import {Title} from "../components/Title";
import {SearchUsers} from "../components/SearchUsers";
import {UsersList} from "../components/UsersList";

export class Home extends Component {
    state = {results: []};

    _handleResults = (res) => {
        this.setState({results: res })
    };

    render() {
        return (
            <div>
                <Title> Test 2Brains {this.props.username} </Title>
                <div className='SearchForm-wrapper'>
                    <SearchUsers onResults={this._handleResults}/>
                </div>
                <UsersList users={this.state.results}/>
            </div>
        );
    }
}
