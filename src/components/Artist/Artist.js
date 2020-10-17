import React, { Component } from "react";
import animal from "./animal.jpg";
import food from "./food.jpg";
import people from "./people.jpg";
import travel from "./travel.jpg";
import avatar from "./avatar.svg";
import "./Artist.scss";
import Upload from '../ProfilePictureUpload';
import {PhotoProvider,ImageList,ViewBox,PhotoConsumer } from 'react-photo-view';
import Zmage from 'react-zmage'
const galleyList = [animal,food,people,travel,animal,food,people]
const Artist = (props) => {
  return (
    <section className="main-container">
      <div className="user-info-box">
        <div className="container">
          <div className="row mb-3">
            <div className="col-8 col-sm-12">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="avatar-box">
                  <img src={avatar}></img>
                </div>
                <button className="btn btn-primary btn-sm mt-3 mb-3">
                  Edit
                </button>
                <div className="item">Name: XXX</div>
                <div className="item">Age: 18</div>
                <div className="item">Gender: 18</div>
                <div className="item">Location: xxx</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10 col-sm-12">
              <div className="galley-box">
                <h5 className="mt-3 text-left">MY GALLEY</h5>
                <div className="col-10 d-flex flex-wrap justify-content-center">
                  {
                    galleyList.map((item,index) => (
                      <div className="galley-item mr-3 mb-1" key={index}>
                        <Zmage src={item} />
                      </div>
                    ))
                  }
                  <Upload />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10 col-sm-12">
              <div className="box d-flex flex-column">
                <h5 className="mt-3 text-left">BLOG</h5>
                <div className="d-flex">
                <div className="col-6">
                  <div className="blog-img">
                    <Zmage src={galleyList[0]}></Zmage>
                  </div>
                </div>
                <div className="col-6  text-wrap">
                  some text...
                </div>
                </div>
               
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10 col-sm-12">
              <div className="box">
                <h5 className="mt-3 text-left">FootPoint</h5>
                <div className="text-wrap">
                  some text...
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10 col-sm-12">
              <div className="box">
                <h5 className="mt-3 text-left">Contact</h5>
                <div className="text-wrap">
                  some text...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Artist;
