import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatePortfolio } from '../redux/actions/users'
import history from '../history'
import DisplayFile from './DisplayFile'

const BlogForm = () => {
    const dispatch = useDispatch()
    const portfolio = useSelector((state) => state.userAuth.user.portfolio)
    const token = useSelector((state) => state.userAuth.token)

    const [blog, setBlog] = useState(portfolio.blog)

    function handleSubmit(event) {
        event.preventDefault()
        const newPortfolio = JSON.parse(JSON.stringify(portfolio))
        newPortfolio.blog = blog
        dispatch(updatePortfolio(newPortfolio, token))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>Edit your Blog</h3>
                <div className='form-group'>
                    {blog.map((post, index) => {
                        return (
                            <div key={index}>
                                <DisplayFile file={post.file}/>
                                <textarea type='text' className='form-control' value={post.text} onChange={event => {
                                    const newValue = event.target.value
                                    setBlog(state => {
                                        const newState = JSON.parse(JSON.stringify(state))
                                        newState[index].text = newValue
                                        return newState
                                    })
                                }} placeholder="Enter Description Here" />
                                <button className='btn btn-secondary btn-block' onClick={() => setBlog(state => {
                                    const newState = JSON.parse(JSON.stringify(state))
                                    newState.splice(index, 1)
                                    return newState
                                })} >Delete Post</button>
                            </div>
                        )
                    })}
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Save</button>
                <button type="reset" className="btn btn-primary btn-block" onClick={(event) => history.push('/portfolio')}>Discard Changes</button>
            </form>
        </>
    )
}

export default BlogForm