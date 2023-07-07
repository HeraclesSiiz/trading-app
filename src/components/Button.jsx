import React from 'react';

const Button = ({ onClick, children }) => {
  return <button className="h-10 rounded-[5px] px-[18px] font-medium text-[15px] text-dark bg-primary"
    onClick={onClick}>{children}</button>
}

export default Button;