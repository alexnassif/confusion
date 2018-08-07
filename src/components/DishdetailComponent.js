import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
      super(props);

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
          <ul className="list-unstyled">
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
    if(this.props.dishdetail != null){
    return(

      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={this.props.dishdetail.image} alt={this.props.dishdetail.name} />
            <CardBody>
              <CardTitle>{this.props.dishdetail.name}</CardTitle>
              <CardText>{this.props.dishdetail.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.dishdetail.comments)}
        </div>
      </div>

    );
  }
  else{
    return(
      <div></div>
    );
  }
  }


}

export default DishDetail;
