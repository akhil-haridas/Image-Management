import React from 'react'


const Image = ({image}) => {
   
      const formatDate = (dateString) => {
        const options = { year: "2-digit", month: "2-digit", day: "2-digit" };
        return new Date(dateString).toLocaleDateString(undefined, options);
      };
  return (
    <div className="col-lg-8">
      <div className="single-article-section">
        <div className="single-article-text">
          <div
            className="single-artcile-bg"
            style={{
              backgroundImage: `url(http://localhost:5555/${image.file})`,
            }}
          />
          <p className="blog-meta">
            <span className="author">
              <box-icon type="solid" name="user"></box-icon>Admin
            </span>
            <span className="date">
              <box-icon
                name="calendar"
             
              ></box-icon>{" "}
              {formatDate(image.createdAt)}
            </span>
          </p>
          <h2>{image.title}</h2>
          <p>{image.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Image
