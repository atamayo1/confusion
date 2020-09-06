import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";

class DishDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderComment(comments){
    return comments.map((comment) => {
        return (    
            <div>
                <p>{comment.comment}</p>
                <p>-- {comment.author} , {comment.date}</p>     
            </div>
        );
    });
}

renderDish(dish){
    if(dish!=null){
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h2>Comments</h2>
                    {this.renderComment(dish.comments)}
                </div>
            </div>
        );
    }else{
        return (
        <div></div>
        );
    }
}

  render() {
    return (
        <div className="container">
            {this.renderDish(this.props.dish)}    
        </div>
      );
  }
}

export default DishDetail;