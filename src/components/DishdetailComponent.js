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
                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
              </li>
            );
        });

        return (
          <div className="col-12 col-md-5 m-1">
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
        <div className="container">
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
