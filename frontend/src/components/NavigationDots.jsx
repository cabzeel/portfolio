import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {
         ['home', 'about', 'work', 'skills','testimonials', 'contact'].map((navItem, index) => (
              
            <a 
               href={`#${navItem}`}
               key={navItem + index}
               className='app__navigation-dot'
               style={active === navItem ? {backgroundColor: '#313bqc'} : {}}
               
            />
              
         ))
      }
    </div>
  )
}

export default NavigationDots