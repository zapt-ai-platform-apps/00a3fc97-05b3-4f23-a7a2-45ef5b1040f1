import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ title, imageUrl, imageRequest, link }) => {
  return (
    <Link to={link} className="group">
      <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow card-hover">
        <div className="relative aspect-[3/4]">
          <img src="https://images.unsplash.com/photo-1532200846567-1bd8bd5b23aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxfHxib2R5JTIwbWVhc3VyZW1lbnQlMjBkaWFncmFtJTIwc2hvd2luZyUyMGhvdyUyMHRvJTIwbWVhc3VyZSUyMGNoZXN0JTJDJTIwc2hvdWxkZXJzJTJDJTIwYW5kJTIwc2xlZXZlJTIwbGVuZ3RoJTJDJTIwaW5mb2dyYXBoaWMlMjBzdHlsZXxlbnwwfHx8fDE3NDI5NzkwNzd8MA&ixlib=rb-4.0.3&q=80&w=1080"
            src={imageUrl}
            alt={title}
            data-image-request={imageRequest}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
            </div>
            
            <div>
              <h3 className="font-medium mb-3">How to Measure Yourself</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex">
                  <span className="font-medium mr-2">Chest:</span>
                  <span>Measure around the fullest part of your chest, keeping the tape measure level.</span>
                </li>
                <li className="flex">
                  <span className="font-medium mr-2">Shoulders:</span>
                  <span>Measure from the edge of one shoulder to the other, across your upper back.</span>
                </li>
                <li className="flex">
                  <span className="font-medium mr-2">Sleeve:</span>
                  <span>Measure from the shoulder seam to your wrist bone with your arm slightly bent.</span>
                </li>
                <li className="flex">
                  <span className="font-medium mr-2">Waist:</span>
                  <span>Measure around your natural waistline, keeping the tape measure comfortable.</span>
                </li>
                <li className="flex">
                  <span className="font-medium mr-2">Inseam:</span>
                  <span>Measure from the crotch seam to the bottom of your ankle.</span>
                </li>
              </ul>
              
              <div className="mt-4 bg-primary-50 p-3 rounded">
                <p className="text-sm text-primary-700">
                  <span className="font-medium">Pro Tip:</span> For the most accurate measurements, have someone else measure you, or measure over fitted clothing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeasurementsTab;