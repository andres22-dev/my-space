import React from 'react';
import BlogCard from './BlogCard';
const LastPublication = () => {

  const infoArticle = 
    {
      "title":"Title Article",
      "image":"url",
      "description":"This is my description of the article",
      "date":"28/10/2024",
      "author":"Andres"

    }
  
  return(
    <section id="last">
      <BlogCard title={infoArticle.title} image={infoArticle.image} description={infoArticle.description} date={infoArticle.date} author={infoArticle.author}/>
    </section>  
  )
}

/*
{blogPosts.map((post, index) => ( code range arrays when have a petition ...pending
*/
export default LastPublication