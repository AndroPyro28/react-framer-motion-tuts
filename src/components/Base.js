import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Base = ({ addBase, pizza, setShowModal }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  const variantsContainer = {
    initial: {
      x: "-100vw",
    },
    animate: {
      x: 0,
      transition: {
        type: "spring",
        delay: 0.5,
      },
    },
    exit: {
      x:"100vw",
      transition:{ 
        ease:"easeInOut"
      }
    }
    
  };

  const buttonVariants = {

    hover: {
      scale:[1.1, 1],
      textShadow:"0px 0px 8px rgb(255,255,255)",
      boxShadow:"0px 0px 8px rgb(255,255,255)",
      transition: {
        yoyo: Infinity,
        duration:0.3
      }
    },
    
  }

  const nextVariants = {
    initial: {
      x: "100vw",
    },
    animate: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };
  
  useEffect(() => {
    setShowModal(false)
  }, [])

  return (
    <motion.div
      className="base container"
      variants={variantsContainer}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{
                fontSize: "20px",
                color: "orangered",
                scale: 1.1,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" variants={nextVariants}>
          <Link to="/toppings">
            <motion.button
            variants={buttonVariants}
              whileHover={"hover"}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
