import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ title, imageUrl, imageRequest, link }) => {
  return (
    <Link to={link} className="group">
      <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow card-hover">
        <div className="relative aspect-[3/4]">
          <img 
            src={imageUrl}
            alt={title} 
            data-image-request={imageRequest}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium text-center">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;