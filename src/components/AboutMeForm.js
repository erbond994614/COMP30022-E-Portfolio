import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePortfolio } from "../redux/actions/users";
import history from "../history";
import { studentTemplate } from "./Template/templates";

// this file provides page to update about me section
const AboutMe = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userAuth.token);
  var portfolio = useSelector((state) => state.userAuth.user.portfolio);

  if (!portfolio) {
    portfolio = studentTemplate;
  }
  const aboutMe = portfolio.aboutMe;

  // content var and setters
  const [para1, setFirstPara] = useState(aboutMe.para1);
  const [para2, setSecPara] = useState(aboutMe.para2);
  const [para3, setThirdPara] = useState(aboutMe.para3);

  function handleSubmit(event) {
    event.preventDefault();

    // attach new aboutme to portfolio
    const newPortfolio = JSON.parse(JSON.stringify(portfolio)); // Deep copy because of redux immutability
    newPortfolio.aboutMe = { para1, para2, para3 };

    // use the same update func to simplify the code
    dispatch(updatePortfolio(newPortfolio, token));
  }

  function handleReset(event) {
    event.preventDefault();
    history.goBack();
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <h3>Edit about me section</h3>
      <div className="form-group">
        <label>Paragraph 1 Content</label>
        <textarea
          type="text"
          className="form-control"
          value={para1}
          onChange={(event) => setFirstPara(event.target.value)}
          placeholder="I am a student"
        />
      </div>

      <div className="form-group">
        <label>Paragraph 2 Content</label>
        <textarea
          type="text"
          className="form-control"
          value={para2}
          onChange={(event) => setSecPara(event.target.value)}
          placeholder="Paragraph 2 content"
        />
      </div>
      
      <div className="form-group">
        <label>Paragraph 3 Content</label>
        <textarea
          type="text"
          className="form-control"
          value={para3}
          onChange={(event) => setThirdPara(event.target.value)}
          placeholder="Paragraph 3 content"
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Save
      </button>
      <button type="reset" className="btn btn-primary btn-block">
        Discard Changes
      </button>
    </form>
  );
};

export default AboutMe;
