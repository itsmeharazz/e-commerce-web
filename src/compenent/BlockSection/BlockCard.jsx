import React from "react";

const BlogCard = ({  img, title, date, comment }) => {
  return (
    <div  className='space-y-4 '>
      <img
        src={img}
        alt=''
        className='rounded-lg hover:scale-105 transition-transform'
      />
      <div className='text-accent font-medium'>
        <span> {date} </span>
        <span> {comment} Comments </span>
      </div>
      <h3 className='font-bold text-xl'> {title} </h3>
    </div>
  );
};

export default BlogCard;
