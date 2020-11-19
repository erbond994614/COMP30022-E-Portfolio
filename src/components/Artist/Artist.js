import React from "react";
import "./Artist.scss";
import Zmage from 'react-zmage';
import { useSelector, useDispatch } from 'react-redux';
import ProfilePicture from "../ProfilePicture";
import Information from '../Information'
import Blog from '../Blog'
import AboutMe from '../AboutMe'
import Preview from '../Preview'
import Upload from "../Upload/index.js";
import { updatePortfolio, uploadBlog, uploadCertificate } from "../../redux/actions/users";

const Artist = () => {
  const user = useSelector(state => state.userAuth.user)
  const token = useSelector(state => state.userAuth.token)
  const dispatch = useDispatch()

  const handleCertificateRemove = (item) => {
    const portfolio = JSON.parse(JSON.stringify(user.portfolio))
    const index = portfolio.certificates.indexOf(item)
    portfolio.certificates.splice(index, 1)
    dispatch(updatePortfolio(portfolio, token))
  }

  const handleRemoveBlog = (item) => {
    const portfolio = JSON.parse(JSON.stringify(user.portfolio))
    const index = portfolio.blog.indexOf(item)
    portfolio.blog.splice(index, 1)
    dispatch(updatePortfolio(portfolio, token))
  }

  return (
    <section className="main-container">
      <div className="user-info-box">
        <div className="container">
          <div className="row mb-3">
            <div className="col-8 col-sm-12">
              <div className="d-flex flex-column justify-content-center align-items-center">
                {/*<div className="avatar-box">
                  <Avatar avatar={user.avatar && user.avatar.data} />
                </div>*/}
                <div className='container'>
                  <ProfilePicture/>
                  <br/>
                </div>
                {/*<form onSubmit={handleSubmit}>
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
                </form>*/}
                <Information/>
              </div>
            </div>
          </div>
          {
            user.role === 'professional' ? <div className="row">
            <div className="col-10 col-sm-12 mb-3">
              <div className="galley-box">
                <h3 className="mt-3 text-left">My Certificates</h3>
                <div className="d-flex flex-wrap justify-content-start">
                  {!user.portfolio.certificates ? null : user.portfolio.certificates.map((item, index) => (
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
                  <Upload submit={uploadCertificate} />
                </div>
              </div>
            </div>
          </div> : null
          }
          <div className="row">
            <div className="col-10 col-sm-12">
              <div className="galley-box">
                <h3 className="mt-3 text-left">My Gallery</h3>
                <div className="d-flex flex-wrap justify-content-start">
                  {user.portfolio.blog.map((item, index) => (
                    <div key={index}>
                      {item.file.mimetype.includes('image')
                      ? <div className="galley-item mr-3 mb-1">
                          <Zmage src={'data:image/jpg;base64,'+item.file.data} />
                          <button
                            type="button"
                            className="btn btn-link"
                            onClick={() => handleRemoveBlog(item)}
                          >
                            Delete
                          </button>
                      </div>
                      : null}
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
                <Blog/>
                <br/>
              </div>
            </div>
          </div>
          {/*<div className="row">
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
          </div>*/}
          <AboutMe/>
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
      <Preview/>
    </section>
  );
};

export default Artist;
