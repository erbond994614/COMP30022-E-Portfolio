import React from "react";
import Zmage from "react-zmage";
import { useDispatch, useSelector } from "react-redux";
import { updatePortfolio, uploadBlog } from "../redux/actions/users";
import Upload from "./Upload/index";

const Gallery = (props) => {
  const portfolio = useSelector((state) => {
    if (!props.display) {
      return state.userAuth.user.portfolio;
    } else {
      return state.portfolioStore.portfolio;
    }
  });
  const token = useSelector((state) => state.userAuth.token);
  const dispatch = useDispatch();

  const handleRemoveBlog = (item) => {
    const newPortfolio = JSON.parse(JSON.stringify(portfolio));
    const index = newPortfolio.blog.indexOf(item);
    newPortfolio.blog.splice(index, 1);
    dispatch(updatePortfolio(newPortfolio, token));
  };

  return (
    <div className="row">
      <div className="col-10 col-sm-12">
        <div className="galley-box">
          <div className="d-flex flex-wrap justify-content-start">
            {portfolio.blog.map((item, index) => (
              <div key={index}>
                {item.file.mimetype.includes("image") ? (
                  <div className="galley-item mr-3 mb-1">
                    <Zmage src={"data:image/jpg;base64," + item.file.data} />
                    {!props.display ? (
                      <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => handleRemoveBlog(item)}
                      >
                        Delete
                      </button>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ))}
            {!props.display ? <Upload submit={uploadBlog} /> : null}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
