import React from 'react';

const ProgressBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div id="progress-bar" className="h-full bg-pink-500" style={{ width: '0%' }} />
    </div>
  );
};

export default ProgressBar;
