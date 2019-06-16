import React, { Component, Fragment } from "react";
import axios from "axios";
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
    // const { data } = this.state;

    const path =
      window.location.hostname !== "localhost" ? "/fiap_react_17mob/" : "/";
    const textCenterBlue = {
      color: "gray",
      textAlign: "center"
    };
    const textCenter = {
      color: "#000000",
      textAlign: "center"
    };
    const textDescription = {
      color: "gray",
      textAlign: "justify"
    };
    return (
      <Fragment>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <img
              src={this.state.data.pictures[0].url}
              width="250px"
              align="center"
              alt="Figura Produto"
            />
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <p style={textCenterBlue}>
              {this.state.data.sold_quantity} Vendidos -
              {this.state.data.seller_address.city.name} -
              {this.state.data.seller_address.state.name}
            </p>
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <h3 style={textCenter}> {this.state.data.title}</h3>
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <h3 style={textCenter}>{formatPrice(this.state.data.price)}</h3>
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <a
              href={path}
              className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
            >
              Comprar
            </a>
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <h5>Descrição</h5>
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col">
            <p style={textDescription}>{this.state.data.description}</p>
          </div>
        </div>
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
