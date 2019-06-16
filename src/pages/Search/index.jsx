import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import formatPrice from '../../utils/format'

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
                <div className="mdl-card mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-shadow--2dp">
                <Link  to={'product/' + item.id}>
                    <div className="mdl-card__text">
                        <p> <img src={item.thumbnail} style={{ maxWidth:'100%', minWidth: '50%',marginLeft: '25%',marginTop: '5%'}}></img></p>
                        </div>
                        <div className="mdl-card__supporting-text">
                        <p><Link style={{ color: '#000000', textDecoration: "none" }} className="mdl-textfield"
                            to={'product/' + item.id}>{item.title}</Link></p>
                        <p>{formatPrice(item.price)}</p>
                        <p>{item.address.city_name} - {item.address.state_name}</p>
                        </div>
                </Link>
                </div>
            </Fragment>    
        )
    }

    render() {
        return (
            <Fragment>
                <div> <input style={{ minWidth: '100%', minHeight: '50px', }}
                    className="mdl-textfield__input" type="text" onChange={this.onSearch}
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