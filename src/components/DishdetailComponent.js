import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg
              width="100%"
              object
              src={dish.image}
              alt={dish.name}
            ></CardImg>
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderComment(comments) {
    if (comments != null)
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            <Stagger in>
              {comments.map((comment) => {
                return (
                  <Fade in key={comment.id}>
                    <li>
                      <p>{comment.comment}</p>
                      <p>
                        {comment.author} , {comment.date}
                      </p>
                    </li>
                  </Fade>
                );
              })}
            </Stagger>
          </ul>
        </div>
      );
  }

  render() {
    const slecteddish = this.props.selectedDish;
    if (slecteddish != null) {
      const comments = slecteddish.comments;
      console.log(comments);
      return (
        <div className="container">
          <div className="row">{this.renderDish(slecteddish)}</div>
          <div className="row">{this.renderComment()}</div>
          <div></div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default DishDetail;
