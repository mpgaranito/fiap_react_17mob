import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
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
        
        console.log(item);
        return (
            <Fragment>
                <div className="mdl-cell mdl-cell--2-col">
                    <p> <img src={item.thumbnail}></img></p>
                    <p><Link to={'product/' + item.id}>{item.title}</Link></p>
                </div>
            </Fragment>    
                 
                
         
        )
    }

    render() {
        return (
            <Fragment>
              
                <div> <input style={{ minWidth: '100%', minHeight: '50px', }} className="mdl-textfield__input" type="text" onChange={this.onSearch}
                    id="txtFind" name="txtFind" placeholder="Buscar produtos, marcas e muito mais…" maxLength="120" />
                </div>
                <div className="mdl-grid">
                    {this.state.results.map(this.renderItem)}
                </div>
            </Fragment>
        );
    }
}

export default Search;