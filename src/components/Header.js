import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header>
      <motion.div className="logo"
        initial={{opacity:0}}
        animate={{opacity:1}}
        drag
        dragConstraints={{left:0, right: 0, top:0, bottom: 0}}
        dragElastic={0.5}
        transition={{
          delay:0.5,
          duration:0.5
        }}
      >
        <svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </svg>
      </motion.div>
      <motion.div className="title"
        animate={{
          y:-10
        }}
        initial={{
          y:-250 
        }}

        transition={{
          duration:0.5,
          type:'spring',
          stiffness:500
        }}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;