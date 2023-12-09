import React from 'react'

/**
 * 
 * @returns a default layout for all ../blog/.. routes.
 */
const BlogLayout = ({children}) => {
  return (
    <div>
        <h1>Hi this is a blog</h1>
        {children}
    </div>
  )
}

export default BlogLayout