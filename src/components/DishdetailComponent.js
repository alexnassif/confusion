import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
      super(props);

      this.state = {
        dish: this.props.dishdetail
      };

  }
  renderComments(comments){
    if(comments != null){
      const c = comments.map((comment) => {
          return (
            <li>
              <p>{comment.comment}</p>
              <p>-- {comment.author}, {comment.date}</p>
            </li>
          );
      });

      return (
        <div className="container">
        <h4>Comments</h4>
          <ul className="list-group">
            {c}
          </ul>
        </div>
      );
  }
  else{
      return(
        <div></div>
      );
  }


  }
  render() {
    return(
      <div className="row">
        <div key={this.state.dish.id} className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={this.state.dish.image} alt={this.state.dish.name} />
            <CardBody>
              <CardTitle>{this.state.dish.name}</CardTitle>
              <CardText>{this.state.dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div key={this.state.dish.id} className="col-12 col-md-5 m-1">
          
        </div>
      </div>
    );
  }


}

export default DishDetail;
