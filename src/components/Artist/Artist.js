import React, { useState } from "react";
import "./Artist.scss";
import Zmage from "react-zmage";
import { useDispatch, useSelector } from "react-redux";
import Upload from "../Upload/index.js";
import Avatar from "./Avatar";
import { updateUserInfo, deleteBlog,uploadBlog,deleteCertificate,uploadCertificates } from "../../redux/actions/users";

const Artist = () => {
  const user = useSelector((state) => state.userAuth.user);
  const token = useSelector((state) => state.userAuth.token);
  const dispath = useDispatch();
  const [userInfo, setUserInfo] = useState(user.portfolio.info);
  const [aboutMe, setAboutMe] = useState(user.portfolio.aboutMe);
  const [isEdit, setIsEdit] = useState(false);
  const [aboutMeEdit, setAboutMeEdit] = useState(false);

  const handleChange = (key, value) => {
    setUserInfo(Object.assign({}, userInfo, { [key]: value }));
  };

  const aboutMeChange = (key, value) => {
    setAboutMe(Object.assign({}, aboutMe, { [key]: value }));
  };
  /**
   * form event handler
   * @param {Event} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispath(updateUserInfo({ info: userInfo }, token));
    setIsEdit(false);
  };

  const handleAboutMeSubmit = () => {
    dispath(updateUserInfo({ aboutMe: aboutMe }, token));
    setAboutMeEdit(false);
  };

  /**
   * remove blog
   * @param {Object} item
   */
  const handleRemove = (item) => {
    let form = {
      id: item._id,
    };
    deleteBlog(form, token, dispath);
  };


  const handleCertificateRemove = (item) => {
    let form = {
      id:item._id
    }
    deleteCertificate(form,token,dispath)
  }


  return (
    <section className="main-container">
      <div className="user-info-box">
        <div className="container">
          <div className="row mb-3">
            <div className="col-8 col-sm-12">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="avatar-box">
                  <Avatar avatar={user.avatar && user.avatar.data} />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      readOnly={!isEdit}
                      value={userInfo.Name}
                      onChange={(e) => handleChange("Name", e.target.value)}
                      className="form-control form-control-sm"
                      id="name"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input
                      type="number"
                      readOnly={!isEdit}
                      value={userInfo.Age}
                      onChange={(e) => handleChange("Age", e.target.value)}
                      className="form-control form-control-sm"
                      id="age"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="graduate">Graduate</label>
                    <input
                      type="text"
                      readOnly={!isEdit}
                      value={userInfo.Graduate}
                      onChange={(e) => handleChange("Graduate", e.target.value)}
                      className="form-control form-control-sm"
                      id="graduate"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      readOnly={!isEdit}
                      value={userInfo.Location}
                      onChange={(e) => handleChange("Location", e.target.value)}
                      className="form-control form-control-sm"
                      id="location"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm mr-3"
                      onClick={() => setIsEdit(!isEdit)}
                    >
                      Edit
                    </button>
                    <button className="btn btn-primary btn-sm" type="submit">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10 col-sm-12 mb-3">
              <div className="galley-box">
                <h5 className="mt-3 text-left">MY Certificate</h5>
                <div className="d-flex flex-wrap justify-content-start">
                  {!user.certificates ? null : user.certificates.map((item, index) => (
                    <div className="galley-item mr-3 mb-1" key={index}>
                      <Zmage src={"data:image/jpg;base64," + item.data} />
                      <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => handleCertificateRemove(item)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                  <Upload submit={uploadCertificates} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10 col-sm-12">
              <div className="galley-box">
                <h5 className="mt-3 text-left">MY GALLEY</h5>
                <div className="d-flex flex-wrap justify-content-start">
                  {user.portfolio.blogs.map((item, index) => (
                    <div className="galley-item mr-3 mb-1" key={index}>
                      <Zmage src={"data:image/jpg;base64," + item.data} />
                      <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => handleRemove(item)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                  <Upload submit={uploadBlog} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10 col-sm-12">
              <div className="box d-flex flex-column">
                <h5 className="mt-3 text-left">BLOG</h5>
                {user.portfolio.blogs.map((item, index) => {
                  return (
                    <div className="d-flex" key={index}>
                      <div className="col-6">
                        <div className="blog-img">
                          <Zmage
                            src={"data:image/jpg;base64," + item.data}
                          ></Zmage>
                        </div>
                      </div>
                      <div className="col-6  text-wrap">some text...</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10 col-sm-12">
              <div className="box">
                <h5 className="mt-3 text-left">About Me</h5>
                <div className="text-wrap mb-3">
                  <input
                    type="text"
                    readOnly={!aboutMeEdit}
                    value={aboutMe.para1}
                    onChange={(e) => aboutMeChange("para1", e.target.value)}
                    className="form-control form-control-sm"
                    id="name"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="text-wrap mb-3">
                  <input
                    type="text"
                    readOnly={!aboutMeEdit}
                    value={aboutMe.para2}
                    onChange={(e) => aboutMeChange("para2", e.target.value)}
                    className="form-control form-control-sm"
                    id="name"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="text-wrap mb-3">
                  <input
                    type="text"
                    readOnly={!aboutMeEdit}
                    value={aboutMe.para3}
                    onChange={(e) => aboutMeChange("para3", e.target.value)}
                    className="form-control form-control-sm"
                    id="name"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm mr-3"
                    onClick={() => setAboutMeEdit(!aboutMeEdit)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-primary btn-sm"
                    type="submit"
                    onClick={handleAboutMeSubmit}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-10 col-sm-12">
              <div className="box">
                <h5 className="mt-3 text-left">Contact</h5>
                <div className="text-wrap">
                  some text...
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Artist;
