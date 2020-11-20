import React, { useState } from "react";
import "./Artist/Artist.scss";
import { useSelector } from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import ProfilePicture from "./ProfilePicture";
import Information from "./Information";
import Certificates from "./Certificates";
import Gallery from "./Gallery";
import Blog from "./Blog";
import AboutMe from "./AboutMe";
import Preview from "./Preview";

const Portfolio = (props) => {
  const portfolio = useSelector((state) => {
    if (!props.display) {
      return state.userAuth.user.portfolio;
    } else {
      return state.portfolioStore.portfolio;
    }
  });

  const [currentTab, setCurrentTab] = useState(3);

  const handleChange = (event, newTabValue) => {
    console.log("newTabValue: ", newTabValue);
    setCurrentTab(newTabValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <section className="main-container">
      <div className="user-info-box">
        <div className="container">
          <div className="row mb-3">
            <div className="col-8 col-sm-12">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="container">
                  <ProfilePicture display={props.display} />
                  <br />
                </div>
                <Information display={props.display} />
              </div>
            </div>
          </div>

          <Tabs
            value={currentTab}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="My Certificates" />
            <Tab label="My Gallery" />
            <Tab label="Blog" />
            <Tab label="About Me" />
          </Tabs>

          <TabPanel value={currentTab} index={0}>
            {portfolio.role === "professional" ? (
              <Certificates display={props.display} />
            ) : null}
          </TabPanel>
          <TabPanel value={currentTab} index={1}>
            {portfolio.role !== "student" ? (
              <Gallery display={props.display} />
            ) : null}
          </TabPanel>
          <TabPanel value={currentTab} index={2}>
            <div className="row">
              <div className="col-10 col-sm-12">
                <div className="box d-flex flex-column">
                  <Blog display={props.display} />
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={currentTab} index={3}>
            {portfolio.role !== "student" ? (
              <AboutMe display={props.display} />
            ) : null}
          </TabPanel>
        </div>
      </div>
      {!props.display ? <Preview /> : null}
    </section>
  );
};

export default Portfolio;
