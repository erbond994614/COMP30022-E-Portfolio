import React from "react";
import "./Artist.scss";
import Zmage from 'react-zmage';
import { useSelector } from 'react-redux';
import ProfilePicture from "../ProfilePicture";
import Information from '../Information'
import Blog from '../Blog'
import AboutMe from '../AboutMe'
import Preview from '../Preview'

const Artist = () => {
  const user = useSelector(state => state.userAuth.user)

  return (
    <section className="main-container">
      {/* <section className="page-des">
        <h3>Welcome to Quick e-Portfolio!</h3>
        <p>
          Join today, create and manage your very own e-Portfolio website in 5
          minutes!
        </p>
        <p>
          Using Quick e-Portfolio to make your own Blog, Foot Print, and upload
          your resume online!
        </p>
        <p>Sample of Personal e-Portfolio</p>
      </section> */}
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
          <div className="row">
            <div className="col-10 col-sm-12">
              <div className="galley-box">
                <h5 className="mt-3 text-left">MY GALLEY</h5>
                <div className="d-flex flex-wrap justify-content-start">
                  {
                    user.portfolio.blog.map((item,index) => (
                      <div className="galley-item mr-3 mb-1" key={index}>
                        <Zmage src={'data:image/jpg;base64,'+item.file.data} />
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10 col-sm-12">
              <div className="box d-flex flex-column">
                <Blog/>
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
