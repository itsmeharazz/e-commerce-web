import React from "react";
import BlogCard from "./BlockCard";
import { blogData } from "../../assets/data";
const BlogSection = () => {
  return (
    <div className='container pt-16'>
      <h2 className='font-bold text-2xl'>Latest News</h2>
      <p className='text-gray-500'>
        Present posts in a best way to highlight interesting moments of your
        blog
      </p>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8'>
        {blogData.map((item, index) => (
          <BlogCard
            key={index}
            img={item.img}
            title={item.title}
            date={item.date}
            comment={item.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;