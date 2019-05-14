import React, { Component } from 'react';

import axios from 'axios';

class Search extends Component {
    constructor() {
        super();

        this.state = {
            results: [],
        };

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(event) {
        const value = event.currentTarget.value;

        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`)
            .then(({ data }) => {
                this.setState({
                    results: data.results,
                });
            })
    }

    renderItem(item) {
        return (
            <li key={item.id}>
                <span>{item.id}</span>
                <span>{item.title}</span>
            </li>
        )
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onSearch} />

                <ul>
                    {this.state.results.map(this.renderItem)}
                </ul>
            </div>
        );
    }
}

export default Search;