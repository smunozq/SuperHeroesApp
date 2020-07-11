import React, { Component } from "react";
import SuperHeroesCard from "./SuperHeroesCard";
import axios from "axios";

export default class SuperHeroes_List extends Component {
    state = {
        SuperHeroes: null,
    }
    async componentDidMount() {
        for (let i = 1; i < 10; i++) {
            const res = await axios.get(`https://superheroapi.com/api.php/3073960919351492/${i}`);
            console.log(res)
            const array = [res];
            return (this.setState({ SuperHeroes: array }))
        }
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.SuperHeroes ? (
                        <div className="row">
                            {this.state.SuperHeroes.map(SuperHeroes => (
                                <SuperHeroesCard
                                    name={SuperHeroes.name}
                                    url={SuperHeroes.url}
                                    imagen={SuperHeroes.sprites.front_default}
                                    number={SuperHeroes.order}
                                    publisher={SuperHeroes.publisher}
                                />
                            ))}
                        </div>
                    ) : (
                            <h1>Loading Super Heroe</h1>
                        )}
                </div>

            </div>
        );
    }
}
