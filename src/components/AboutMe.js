import React from 'react'
import { useSelector } from 'react-redux'
import history from '../history'

const AboutMe = (props) => {
    const aboutMe = useSelector(state => {if (!props.display) return state.userAuth.user.portfolio.aboutMe; else return state.portfolio.portfolio.aboutMe})
    return (
        <>
            <h3>About Me</h3>

            {!props.display
                ? <button className="editButton" onClick={() => history.push("/aboutme")}>
                Edit
                </button>
                : null
            }

            <br />
            <div className="aboutme">
                <h4>
                    Paragraph 1 <br />
                    <br />
                    <p>{aboutMe.para1}</p>
                </h4>
                <h4>
                    Paragraph 2 <br />
                    <br />
                    <p>{aboutMe.para2}</p>
                </h4>
                <h4>
                    Paragraph 3 <br />
                    <br />
                    <p>{aboutMe.para3}</p>
                </h4>
            </div>
        </>
    )
}

export default AboutMe