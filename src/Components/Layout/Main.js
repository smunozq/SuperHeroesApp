/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import SuperHeroes_List from '../../SuperHeroes/SuperHeroes_List'

export default class Main extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <SuperHeroes_List></SuperHeroes_List>
                </div>
            </div>
        )
    }
}
