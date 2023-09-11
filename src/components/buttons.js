import React from 'react';

const Button = ({children, as: Component='button', ...rest }) => {
  return (
    <Component className="buttons" {...rest}>
      {children}
    </Component>
  );
};

  export default Button;