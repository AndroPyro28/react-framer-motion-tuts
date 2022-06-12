import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';
const Home = () => {

  const buttonVariants = {

    hover: {
      scale:1.1,
      textShadow:"0px 0px 8px rgb(255,255,255)",
      boxShadow:"0px 0px 8px rgb(255,255,255)",
      transition: {
        yoyo: Infinity,
        duration:0.3
      }
    }
  }

  const titleVariants = {
    dragConstraints: {
      top:"5px",
      left:"5px",
      right:"5px",
      bottom:"5px",
    }
  }

  const containerVariants = {
    initial: {
      x: "-100vw"
    },
    animate: {
      x: 0
    },
    exit: {
      x:"100vw",
      transition:{ 
        ease:"easeInOut"
      }
    }
  }

  return (
    <motion.div className="home container"
    variants={containerVariants}
      animate="animate"
      initial="initial"
      exit="exit"
    >
      <motion.h2 
        drag
        variants={titleVariants}
        dragConstraints={{
          top:5,
          left:5,
          right:5,
          bottom:5,
        }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
        variants={buttonVariants}
        whileHover={"hover"}
        
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home;