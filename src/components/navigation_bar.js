import React from 'react';

const Navigation = () => {
    return (
        <nav className='NavBar'>
            <div className='NavBar-inner'>
                <h3 className='Logo'> CODE TRANSLATOR</h3>
                <div className='Menu'>
                    <h3 className='Menu-item'>HOME</h3>
                    <h3 className='Menu-item'>LEARN</h3>
                    <h3 className='Menu-item'>TRANSLATE</h3>
                </div>
            </div>
        </nav>
  )
};

export default Navigation;