import React, {Component} from 'react';
import {ButtonGoToHome} from "../components/ButtonGoToHome";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faUser, faEnvelope, faPhone, faMobileAlt} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faUser, faEnvelope, faPhone, faMobileAlt);

export class Detail extends Component {
    state = {user: JSON.parse(localStorage.getItem('detailUser'))};

    _renderResults() {
        const {
            cell,
            dob,
            email,
            gender,
            location,
            name,
            phone,
            picture
        } = this.state.user;
        return (
            <div className='box border-no'>
                <div className='has-text-centered'>
                    <figure className="image is-128x128">
                        <img className="is-rounded"
                             srcSet={picture['large']}
                             alt={name['first']}
                        />
                    </figure>
                    <fieldset disabled>
                        <div className="field is-horizontal">
                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-expanded has-icons-left">
                                        <input className="input" type="text"
                                               defaultValue={name['first'] + ' ' + name['last']}/>
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon icon='user'/>
                                        </span>
                                    </p>
                                </div>
                                <div className="field">
                                    <p className="control is-expanded has-icons-left has-icons-right">
                                        <input className="input is-success" type="email"
                                               defaultValue={email}/>
                                        <span className="icon is-small is-left">
                                          <FontAwesomeIcon icon='envelope'/>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-expanded has-icons-left">
                                        <input className="input" type="text"
                                               defaultValue={phone}/>
                                        <span className="icon is-small is-left">
                                            <FontAwesomeIcon icon='phone'/>
                                        </span>
                                    </p>
                                </div>
                                <div className="field">
                                    <p className="control is-expanded has-icons-left has-icons-right">
                                        <input className="input is-success" type="email"
                                               defaultValue={cell}/>
                                        <span className="icon is-small is-left">
                                          <FontAwesomeIcon icon='mobile-alt'/>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-body">
                                <div className="field is-expanded">
                                    <div className="field has-addons">
                                        <p className="control">
                                            <span className="button is-static">
                                                Age
                                            </span>
                                        </p>
                                        <p className="control is-expanded">
                                            <input className="input" type="text"
                                                   defaultValue={dob['age']}/>
                                        </p>
                                    </div>
                                </div>

                                <div className="field is-expanded">
                                    <div className="field has-addons">
                                        <p className="control">
                                            <span className="button is-static">
                                                Gender
                                            </span>
                                        </p>
                                        <p className="control is-expanded">
                                            <input className="input" type="text"
                                                   defaultValue={gender}/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-body">
                                <div className="field">
                                    <p className="control is-expanded">
                                        <textarea className="textarea" type="text"
                                               defaultValue={location['street']['name']
                                               + ' '
                                               + location['street']['number']
                                               + ', '
                                               + location['city']
                                               + ', '
                                               + location['state']
                                               + ', '
                                               + location['country']}/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="field is-horizontal"/>
                    </fieldset>
                </div>
                <ButtonGoToHome/>
            </div>
        )
    }

    render() {
        return (
            this._renderResults()
        )
    }
}
