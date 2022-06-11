import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function Modal({ showModal, setShowModal }) {

  const backdrop = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  const modal = {
    initial: {
      y: "-100vh",
      opacity: 0,
    },
    animate: {
      y: "200px",
      opacity: 1,
      transition: {
        delay: 0.5
      }
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="initial"
          animate="animate"
          exit={"initial"}
        >
          <motion.div className="modal"
            variants={modal}
            initial="initial"
            animate="animate"
          >
            <p>Want to make a pizza?</p>
            <Link to={"/"}>
                
              <button onClick={() => setShowModal(false)}>Start again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
