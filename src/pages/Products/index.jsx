import React, {Component} from 'react';

class Products extends Component {
   constructor(props){
       super(props);
       console.log(props.match.params.id);
   }
    render(){
        return (
            <div>Products</div>
        );
    }
}
export default Products;