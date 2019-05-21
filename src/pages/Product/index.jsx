import React, { Component, Fragment } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import formatPrice from '../../utils/format'
class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            data: {},
        };

    }

    componentDidMount() {

        axios.all([
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}`),
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}/description`)
        ]).then(([item, description]) => {
            console.log(item, description)
            this.setState({
                data: {
                    ...item.data,
                    description: description.data.plain_text,
                }
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    renderPicture() {
        const { data } = this.state
        return (
            <Fragment>
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet">
                        <img src={this.state.data.pictures[0].url} with="100%"/>
                    </div>
                </div>
                <div className="mdl-grid">
                    <p>#{this.state.data.id}</p>
                    <p>{this.state.data.sold_quantity} Vendedores</p>
                    <h3>{this.state.data.title}</h3>
                    {this.state.data.price}
                    <h3><b><NumberFormat value={formatPrice(this.state.data.price)} displayType={'text'} thousandSeparator={true} prefix={'R$'} /></b></h3>
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                        COMPRAR
                            </button>
                        <h3><b>Descrição</b></h3>
                        <p>{this.state.data.description}</p>
                  
                </div>
            </Fragment>
        );

    }

    render() {

        const { data } = this.state;

        if (!Object.keys(data).length) {
            return (
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Carregando</h2>
                </div>
            );
        }

        return (
            this.renderPicture()
        );
    }
}

export default Product;