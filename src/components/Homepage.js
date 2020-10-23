import React from "react";
import { Link } from "react-router-dom";

import ".././Assets/css/homepage.min.css";

const Homepage = () => {
  return (
    <div className="container-fluid">
      <div className="col-md-6">
        <h1>Create your very own e-Portfolio system</h1>
      </div>
      <div className="col-md-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>

      <div>
        <Link to="temp">Template</Link>
      </div>
    </div>
  );
};

export default Homepage;
