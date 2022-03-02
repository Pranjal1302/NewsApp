import React from "react";
import "./Newsitem.css";
const Newsitem = (props) => {
    return (
      <div className="my-3 container">
        <div className="card card shadow-sm">
          <div
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
              <div className="card-badge">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {props.name}
            </span>
            </div>
            <img
              src={props.urlToImage}
              className="card-img-top"
              alt=""
            />
          </div>
          <div className="card-body ">
            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">{props.description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {props.author} on {new Date(props.publishedAt).toUTCString()}
              </small>
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <a
                  href={props.url}
                  rel="noreferrer"
                  target={"_blank"}
                  className="btn btn-dark"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Newsitem;
