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
    if (comments != null) {
    const comment = comments.map((comment) => {
      return (
        <div>
          <ul key={comment.id} className="list-unstyled">
            <li>
              <p>{comment.comment}</p>
              <p>
                -- {comment.author} ,{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </li>
          </ul>
        </div>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <div>{comment}</div>
      </div>
    );
  } else return <div></div>;
  }

  render() {
    if (this.props.this != null) {
      console.log(comments);
      return (
        <div className="container">
          <div className="row">{this.renderDish(this.props.dish)}</div>
          <div className="row">{this.renderComment(this.props.dish.comments)}</div>
          <div></div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default DishDetail;
