import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      <div className="loader border-t-2 border-pink-500 bg-p-300 animate-spin rounded-full aspect-square w-16 h-16" />
    </div>
  );
};

export default Loader;
