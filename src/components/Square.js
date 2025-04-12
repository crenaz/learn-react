import React from 'react';

function Square(props) {
  return (
    <button
      className="square hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 transition-colors"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default Square;