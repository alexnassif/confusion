import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label} from 'reactstrap';
import { Link } from 'react-router-dom';

  function RenderDish({dish}){

      return(
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
    );

  }

  class CommentForm extends Component {

    constructor(props){
      super(props);
      this.state = {

        isModalOpen: false
      };

      this.toggleModal = this.toggleModal.bind(this);


    }

    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }

    render(){

      return(
        <div>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-sign-in fa-lg"></span> Login
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
           <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
           <ModalBody>

           </ModalBody>
         </Modal>
         </div>
      );

    }

  }

  function RenderComments({comments}){
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
            <CommentForm />
          </div>

        );
    }
    else{
        return(
          <div></div>
        );
    }
  }
  const DishDetail = (props) => {
    if(props.dishdetail != null){
      return(
        <div className="container">
              <div className="row">
                  <Breadcrumb>

                      <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                      <BreadcrumbItem active>{props.dishdetail.name}</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                      <h3>{props.dishdetail.name}</h3>
                      <hr />
                  </div>
              </div>
                <div className="row">
                  <RenderDish dish={props.dishdetail} />
                  <RenderComments comments={props.comments} />
                </div>
              </div>

      );
  }else{
      return(
      <div></div>
    );
  }

}

export default DishDetail;
