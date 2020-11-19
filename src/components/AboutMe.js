import React from 'react'
import { useSelector } from 'react-redux'
import history from '../history'

const AboutMe = (props) => {
    const aboutMe = useSelector(state => {
        if (!props.display) {
            return state.userAuth.user.portfolio.aboutMe
        } else {
            return state.portfolioStore.portfolio.aboutMe
        }
    })
    
    return (
        <>
            <h3>About Me</h3>

            {!props.display
                ? <button className="editButton" onClick={() => history.push("/aboutme")}>
                Edit
                </button>
                : null
            }

            <div className="aboutme">
                <h4>{aboutMe.para1}</h4>
                <h4>{aboutMe.para2}</h4>
                <h4>{aboutMe.para3}</h4>
            </div>
        </>
    )
}

export default AboutMe