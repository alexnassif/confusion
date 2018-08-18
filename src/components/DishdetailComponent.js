import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

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
          <span className="fa fa-pencil fa-l"></span> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
           <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
           <ModalBody>
           <LocalForm >
              <FormGroup>

                <Label htmlFor="name" >Your Name</Label>
                    <Control.text model=".name" id="name" name="name"
                               placeholder="Your Name"
                               className="form-control"
                               validators={{
                                       required, minLength: minLength(3), maxLength: maxLength(15)
                                   }}
                                    />
                               <Errors
                                   className="text-danger"
                                   model=".name"
                                   show="touched"
                                   messages={{
                                       required: 'Required',
                                       minLength: 'Must be greater than 3 characters',
                                       maxLength: 'Must be 15 characters or less'
                                   }}
                                />
                    <Label htmlFor="rating" >Rating</Label>
                    <Control.select model=".rating" name="rating"
                                   className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        </Control.select>
                    <Label htmlFor="comment">Comment</Label>
                    <Control.textarea model=".comment" id="comment" name="comment"
                                   rows="6"
                                   className="form-control" />
                   </FormGroup>
                   <Button type="submit" color="primary">
                       Submit
                   </Button>
               </LocalForm>

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
