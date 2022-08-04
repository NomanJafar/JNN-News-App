import React, { Component } from "react";

export default class extends Component {
  render() {
    let { title, description,imageUrl,newsUrl } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={imageUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} className="btn btn-primary">
            Details
          </a>
        </div>
      </div>
    );
  }
}
