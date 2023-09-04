import React from "react";
import { Link } from "react-router-dom";

const Card = ({ images }) => {

    const maxDescriptionLength = 2; 

    // Function to truncate the description text
    const truncateDescription = (text, maxLength) => {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
      }
      return text;
  };

    const formatDate = (dateString) => {
      const options = { year: "2-digit", month: "2-digit", day: "2-digit" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };
  
  return (
    <>
      {images.map((image) => (
        <div className="col-lg-4 col-md-6" key={image._id}>
          <div className="single-latest-news">
            <Link to={`/image/${image._id}`}>
              <div
                className="latest-news-bg news-bg-1"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src={`http://localhost:5555/${image.file}`}
                  alt={image.title}
                  style={{ height: "200px" }}
                />
              </div>
            </Link>
            <div className="news-text-box">
              <h3>
                <Link to={`/image/${image._id}`}>{image.title}</Link>
              </h3>
              <p className="blog-meta">
                <span className="author">
                  <box-icon type="solid" name="user"></box-icon>Author
                </span>
                <span className="date">
                  <box-icon
                    name="calendar"
                    style={{ marginTop: "15px" }}
                  ></box-icon>
                  {formatDate(image.createdAt)}
                </span>
              </p>
              <p className="excerpt">
                {truncateDescription(image.description, maxDescriptionLength)}
              </p>
              <Link to={`/image/${image._id}`} className="read-more-btn">
                read more <i className="fas fa-angle-right" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
