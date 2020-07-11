/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import { Button, Container } from 'react-bootstrap'

export default class SuperHeroesCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { name, url, imagen, number, publisher } = this.props


        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <div className="card">
                    <div className="row">
                        <h5 className="card-header col-9">{name}</h5>
                        <div className="card-header col-3 row">{number}</div>
                    </div>
                    <img src={imagen}></img>
                    <p>{publisher}</p>
                </div>
                <container>
                    <row>
                        <col><Button variant="primary">Me Gusta</Button>{' '}</col>
                        <col><Button variant="primary">No Me Gusta</Button>{' '}</col>
                    </row>
                </container>
            </div>
        )
    }
}