import React from 'react';
import Fragment from 'render-fragment';

const EnhancedMarkerContent = (MarkerContent) => (props) => {
  console.log(props);
  return (
    <Fragment>
      Content Here
    </Fragment>
  );
};

export default EnhancedMarkerContent;
