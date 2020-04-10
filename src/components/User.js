import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class User extends Component {
    static propTypes = {
        id: PropTypes.any.isRequired
    };

    _goToDetail = () => {
        localStorage.setItem('detailUser', JSON.stringify(this.props));
        window.location.href = `/detail`;
    };

    render() {
        const {
            dob,
            email,
            name,
            picture
        } = this.props;
        return (
            <div onClick={this._goToDetail} className="card">
                <div className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img alt={name['first']}
                                         srcSet={picture['large']}
                                    />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="CardNameAge title is-4">{name['first'] + ' ' + name['last']}
                                    <strong className='is-4 is-hidden-mobile'>{dob['age']}</strong>
                                </p>
                                <p className="subtitle is-6">{email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
