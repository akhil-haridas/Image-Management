import React, { useState } from "react";
import { uploadImage } from "../../utils/api";
import Spinner from "../Listing/Spinner";

const AddImage = () => {
  // Define state variables
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [image, setImage] = useState(null);

  const [isLoading, setIsLoading] = useState(false); 

  // Event handler for input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") setTitle(value);
    else if (name === "description") setDescription(value);
    else if (name === "keywords") setKeywords(value);
    else if (name === "image") setImage(e.target.files[0]);
  };

  // Event handler for image upload
const handleImageUpload = async () => {
  try {
    setIsLoading(true); // Show the spinner while uploading

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("keywords", keywords);
    formData.append("image", image);

    // Use the API function for uploading an image
    const response = await uploadImage(formData);

    if (response) {
      setTitle("");
      setDescription("");
      setKeywords("");
      setImage(null);
    }
  } catch (error) {
    console.error("Error uploading image:", error);
  } finally {
    setIsLoading(false);
  }
};


  return (
    <>
      {isLoading && <Spinner />}

      <div className="checkout-section mb-150" style={{ marginTop: "70px" }}>
        <div className="container">
          <div className="row" style={{ display: "block" }}>
            <div className="">
              <div className="checkout-accordion-wrap">
                <div className="accordion" id="accordionExample">
                  <div className="card single-accordion">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Upload new image
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="billing-address-form">
                          <form action="index.html">
                            <p>
                              <input
                                type="text"
                                placeholder="Title"
                                name="title"
                                value={title}
                                onChange={handleInputChange}
                              />
                            </p>
                            <p>
                              <input
                                type="text"
                                name="keywords"
                                placeholder="Keywords"
                                value={keywords}
                                onChange={handleInputChange}
                              />
                            </p>
                            <p>
                              <input
                                type="file"
                                name="image"
                                placeholder="Image"
                                onChange={handleInputChange}
                              />
                            </p>
                            <p>
                              <textarea
                                id="bill"
                                name="description"
                                placeholder="Description about the image..."
                                value={description}
                                onChange={handleInputChange}
                              />
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sub-new">
                    <a class="boxed-btn" onClick={handleImageUpload}>
                      Upload image
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddImage;
