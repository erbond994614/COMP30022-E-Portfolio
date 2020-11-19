import React from "react";
import "./Artist/Artist.scss";
import { useSelector } from 'react-redux';
import ProfilePicture from "./ProfilePicture";
import Information from './Information'
import Certificates from './Certificates'
import Gallery from './Gallery'
import Blog from './Blog'
import AboutMe from './AboutMe'
import Preview from './Preview'

const Portfolio = (props) => {
    const portfolio = useSelector((state) => {
        if (!props.display) {
            return state.userAuth.user.portfolio
        } else {
            return state.portfolioStore.portfolio
        }
    })

  return (
    <section className="main-container">
      <div className="user-info-box">
        <div className="container">
          <div className="row mb-3">
            <div className="col-8 col-sm-12">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className='container'>
                  <ProfilePicture display={props.display}/>
                  <br/>
                </div>
                <Information display={props.display}/>
              </div>
            </div>
          </div>
          {portfolio.role === 'student'
            ? <AboutMe display={props.display}/>
            : null
          }
          {portfolio.role === 'professional'
          ? <Certificates display={props.display}/>
          : null}
          {portfolio.role !== 'student'
          ? <Gallery display={props.display}/>
          : null}
          <div className="row">
            <div className="col-10 col-sm-12">
              <div className="box d-flex flex-column">
                <Blog display={props.display}/>
              </div>
            </div>
          </div>
          {portfolio.role !== 'student'
            ? <AboutMe display={props.display}/>
            : null}
        </div>
      </div>
      {!props.display
        ? <Preview/>
        : null}
    </section>
  );
};

export default Portfolio;
