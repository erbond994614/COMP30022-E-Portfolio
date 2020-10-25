import React, { useState } from "react";
import animal from "./animal.jpg";
import food from "./food.jpg";
import people from "./people.jpg";
import travel from "./travel.jpg";
import avatarImg from "./avatar.svg";
import "./Artist.scss";
//import Upload from '../ProfilePictureUpload';
import Zmage from 'react-zmage';
import { useDispatch, useSelector } from 'react-redux';
import Upload from '../Upload/index.js';
import Avatar from './Avatar';
import {updateUserInfo,deleteBlog} from '../../redux/actions/users';



const Artist = () => {
  const user = useSelector(state => state.userAuth.user)
  const token = useSelector(state => state.userAuth.token)
  const dispath = useDispatch();
  const [userInfo,setUserInfo] = useState(user.portfolio.info);
  const [isEdit,setIsEdit] = useState(false);
  const handleChange = (key,value) => {
    setUserInfo(Object.assign({},userInfo,{[key]:value}))
  }
  /**
   * form event handler
   * @param {Event} e 
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispath(updateUserInfo(userInfo,token))
    setIsEdit(false);
  }
  /**
   * remove blog 
   * @param {Object} item 
   */
  const handleRemove = (item) => {
    let form = {
      id:item._id
    }
    deleteBlog(form,token,dispath)
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
                    <input type="text" readOnly={!isEdit} value={userInfo.Name}  onChange={e => handleChange('Name',e.target.value)} className="form-control form-control-sm" id="name" aria-describedby="emailHelp" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" readOnly={!isEdit} value={userInfo.Age}   onChange={e => handleChange('Age',e.target.value)} className="form-control form-control-sm" id="age" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="graduate">Graduate</label>
                    <input type="text" readOnly={!isEdit} value={userInfo.Graduate}  onChange={e => handleChange('Graduate',e.target.value)} className="form-control form-control-sm" id="graduate" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" readOnly={!isEdit} value={userInfo.Location}  onChange={e => handleChange('Location',e.target.value)} className="form-control form-control-sm" id="location" />
                  </div>
                  <div className="form-group">
                  <button type="button" className="btn btn-primary btn-sm mr-3" onClick={() => setIsEdit(!isEdit)}>
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
            <div className="col-10 col-sm-12">
              <div className="galley-box">
                <h5 className="mt-3 text-left">MY GALLEY</h5>
                <div className="d-flex flex-wrap justify-content-start">
                  {
                    user.portfolio.blogs.map((item,index) => (
                      <div className="galley-item mr-3 mb-1" key={index}>
                        <Zmage src={'data:image/jpg;base64,'+item.data} />
                        <button type="button" className="btn btn-link" onClick={() => handleRemove(item)}>Delete</button>
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
                {
                  user.portfolio.blogs.map((item,index) => {
                    return ( <div className="d-flex" key={index}>
                    <div className="col-6">
                      <div className="blog-img">
                        <Zmage src={'data:image/jpg;base64,'+item.data}></Zmage>
                      </div>
                    </div>
                    <div className="col-6  text-wrap">
                      some text...
                    </div>
                    </div>)
                  })
                }
               
               
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
