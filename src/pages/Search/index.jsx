import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {

    constructor() {
        super();
        this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount() {
        axios.get('https://api.mercadolibre.com/sites/MLB/search?q={value}')
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <div><input type="text" ></input> </div>

        );
    }
}
export default Search;