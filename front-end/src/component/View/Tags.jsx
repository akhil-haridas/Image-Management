import React from 'react'
import { Link } from 'react-router-dom';

const Tags = ({image}) => {
  return (
    <div className="col-lg-4">
      <div className="sidebar-section">
        <div className="recent-posts">
          <h4>Dimension</h4>
          <ul>
            <li>
              <Link style={{ fontWeight: "bolder" }}>
                {" "}
                Width : {image.width}
              </Link>
            </li>
            <li>
              <Link style={{ fontWeight: "bolder" }}>
                Height : {image.height}
              </Link>
            </li>
          </ul>
        </div>
        <div className="archive-posts">
          <h4>Color Palettes</h4>
          <ul>
            {image.colorPalette.map((color, index) => (
              <li key={index} style={{ color: color, fontWeight: "bolder" }}>
                <Link style={{ color: color }}>{color}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="tag-section">
          <h4>Tags</h4>
          <ul>
            {image.keywords.map((tag, index) => (
              <li key={index}>
                <Link>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tags
