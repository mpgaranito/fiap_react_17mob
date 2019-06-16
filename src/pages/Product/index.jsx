import React, { Component, Fragment } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import formatPrice from "../../utils/format";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      data: {}
    };
  }

  componentDidMount() {
    axios
      .all([
        axios.get(`https://api.mercadolibre.com/items/${this.state.id}`),
        axios.get(
          `https://api.mercadolibre.com/items/${this.state.id}/description`
        )
      ])
      .then(([item, description]) => {
        console.log(item, description);
        this.setState({
          data: {
            ...item.data,
            description: description.data.plain_text
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderPicture() {
    const { data } = this.state;
    return (
      <Fragment>
        <div className="mdl-js-layout">
          <div className="mdl-col-2">
            {" "}
            <img
              src={this.state.data.pictures[0].url}
              width="300px"
              alt="Figura Produto"
            />
          </div>
          <div className="mdl-col-2">
            <p>{this.state.data.sold_quantity} Vendedores</p>
            <h3>{this.state.data.title}</h3>
          </div>
          <div className="mdl-col-2">
            <h3>
              <b>{formatPrice(this.state.data.price)}</b>
            </h3>
          </div>
          <div className="mdl-col-2">
            <h5>
              <b>Descrição</b>
            </h5>
            <p>{this.state.data.description}</p>
          </div>
        </div>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          Comprar
        </button>
      </Fragment>
    );
  }

  render() {
    const { data } = this.state;
    if (!Object.keys(data).length) {
      return (
        <div className="mdl-card__title">
          <span>Carregando</span>
        </div>
      );
    }
    return this.renderPicture();
  }
}

export default Product;
