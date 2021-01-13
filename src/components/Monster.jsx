import React from 'react';

import { CardList } from './card-list/card-list.component.jsx';
import { SearchBox } from './search-box/search-box.component.jsx';
import './../../src/App.css';

class Monster extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json()) // in first res we reach all property of res and we format that to json
        .then(users => this.setState({ monsters: users }))
    }

    handleChange = e => {
        this.setState({ searchField: e.target.value })
    }


    render() {

        const { searchField , monsters } = this.state;
        const filterMonsters = monsters.filter(monster => 
           monster.name.toLowerCase().includes(searchField.toLowerCase()) 
            )
        return (
            <div className="container">
            <h1>Monsters Rolodex</h1>
            <SearchBox 
               placeholder="search monsters"
               handleChange={this.handleChange}
            />    
            <CardList monsters={filterMonsters} /> 
            </div>
        )
    }
}

export default Monster;