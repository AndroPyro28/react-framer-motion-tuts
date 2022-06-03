import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Order = ({ pizza }) => {

  const [showTitle, setShowTitle] = useState(true);

  setTimeout(() => setShowTitle(false), 4000)

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
    exit: {
      x:"100vw",
      transition:{ 
        ease:"easeInOut"
      }
    }
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
      exit="exit"
    >
      <AnimatePresence>
      {
        showTitle && 
            <motion.h2
            exit={{y:-150, x:100, opacity:0}}
            transition={{
              duration:1.5,
              when:"afterParent"
            }}
            >Thank you for your order :)</motion.h2>
          
      }
      </AnimatePresence>
      
      
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