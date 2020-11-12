import React from 'react'
import { useSelector } from 'react-redux'
import history from '../history'
import DisplayFile from './DisplayFile'
import Upload from './Upload/index'
import { uploadBlog } from '../redux/actions/users'

const Blog = (props) => {
    const blog = useSelector((state) => {
        if (!props.display) {
            return state.userAuth.user.portfolio.blog
        } else {
            return state.portfolioStore.portfolio.blog
        }
    })

    return (
        <>
            <h3 className="mt-3 text-left">Blog</h3>
            {!props.display
                ? <button className='editButton' onClick={() => history.push('/blog')}>Edit</button>
                : null
            }

            <div className="file_container">
                {blog.length > 0 &&
                    blog.map((item) => (
                        <div key={item._id}>
                            <div>
                                <DisplayFile className="downloads" file={item.file} />
                            </div>
                            <div className="col-6  text-wrap">
                                {item.text}
                            </div>
                            <br/>
                        </div>
                    ))}
                {!props.display
                    ? <div>
                        <h5>Add New Post:</h5>
                        <Upload submit={uploadBlog}/>
                    </div>
                    : null
                }
            </div>
            <br/>
        </>
    )
}

export default Blog