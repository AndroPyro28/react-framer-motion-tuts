import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <motion.div className="home container"
      animate={{x:0}}
      initial={{x:"-100vw"}}
      // drag
      // whileDrag={{ scale: 5, rotate: 360 }}
      // dragConstraints={{ left: 100, top: 100, right: 100, bottom: 100 }}
      // transition={{ repeat: Infinity, duration: 1 }}
      
    >
      <h2 >
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
        whileHover={{
          scale:1.1,
          textShadow:"0px 0px 8px rgb(255,255,255)",
          boxShadow:"0px 0px 8px rgb(255,255,255)",
        }}

        // drag 
        // whileDrag={{
        //   scale:1.1
        // }}


        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;