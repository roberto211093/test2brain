import React, {Component} from 'react';

export class SearchUsers extends Component {
    state = {inputCant: 10};

    _handleChange = (e) => {
        this.setState({inputCant: e.target.value});
    };

    _handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://randomuser.me/api/?results=${this.state.inputCant}`)
            .then(res => res.json())
            .then(res => {
                const {results = []} = res;
                this.props.onResults(results);
            })
    };

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            onChange={this._handleChange}
                            type="number"
                            placeholder="Number of users to search ..."/>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
