import React from 'react';
import { useParams } from 'react-router';

const TourOrderDetails = () => {
  const {tourId} = useParams();
  return (
    <div>
      this is tour details that you want  no {tourId}
    </div>
  );
};

export default TourOrderDetails;