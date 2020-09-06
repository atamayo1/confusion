import React, {Component} from "react";
import { Media, Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from "reactstrap";

class Menu extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    componentDidMount(){

    }

    onDishSelect(dish){
        this.setState({selectedDish:dish});
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

    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => {this.onDishSelect(dish)}}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
                  {menu}
            </div>
            {this.renderDish(this.state.selectedDish)}    
          </div>
        );
    }
}

export default Menu;