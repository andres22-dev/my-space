import React from 'react';

const BlogCard = ({title = "title", date = "date", author="author", description ="description", image = "image"}) => {

  return(
    <section id="last">
      <h2>{title}</h2>
      <p>{description}</p>
      <image src={image} alt="image article"/>
      <span className="">{author}</span>
      <span className="">{date}</span>
    </section>  
  )
}
  
export default BlogCard