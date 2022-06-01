import React from 'react';
import { motion } from 'framer-motion';

const Order = ({ pizza }) => {

  const variantsContainer = {
    initial: {
      x: "-100vw",
    },
    animate: {
      x: 0,
      transition: {
        type: "spring",
        when: "beforeChildren",
        duration:0.5
      },
    },
  };

  const childVariants = {
    initial:{opacity:0},
    animate:{
      opacity:1,
      transition: {
        duration:0.1
      }
    },
  }


  return (
    <motion.div className="container order"
      variants={variantsContainer}
      animate="animate"
      initial="initial"
    >
      <h2>Thank you for your order :)</h2>
      
      <motion.div 
       variants={childVariants}
      >
        <p>You ordered a {pizza.base} pizza with:</p>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
      
    </motion.div>
  )
}

export default Order;