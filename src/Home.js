import React from 'react'
import { useState } from 'react'
import BlogList from './BlogList';
const Home = () => {

   const [blogs, setblogs] = useState([
    {title: 'My new website', body:'lorem ipsum....', author:'mary', id:1 },
    {title: 'Welcome party!', body:'lorem ipsum....', author:'yoshi', id:2 },
    {title: 'Web dev top tips', body:'lorem ipsum....', author:'mary', id:3 }
   ]);

   const handleDelete=(id) => {
    setblogs(blogs.filter(blog=> blog.id != id));
   }
  return (
    <div className='home'>
    <BlogList blogs={blogs} title="All Blogs!"/>
    <BlogList blogs={blogs.filter((blog) => blog.author== 'mary')} title="Mary's Blogs!" handleDelete={handleDelete}/>
    </div>
  )
}

export default Home