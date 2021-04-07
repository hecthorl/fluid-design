import { motion } from 'framer-motion';
import { useState } from 'react';
import Modal from '../components/Modal';

const NewsLetter = ({ history }) => {
   const [show, setShow] = useState(false);
   const containerVariants = {
      hidden: {
         opacity: 0,
         y: '50vh',
      },
      visible: {
         opacity: 1,
         y: 0,
      },
   };
   return (
      <div className="newsletter-container">
         <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
         >
            <h1>Desea más información?</h1>
            <div className="btn-container">
               <button onClick={() => setShow(!show)}>
                  Sí, deseo saber más
               </button>
               <button onClick={() => history.push('/')}>
                  No, Regresar a Home
               </button>
            </div>
            {show && <Modal />}
         </motion.div>
      </div>
   );
};

export default NewsLetter;
