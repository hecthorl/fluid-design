import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const containerVariants = {
   hidden: { x: 100, opacity: 0 },
   visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.5, ease: 'easeInOut' },
   },
};

const Modal = () => {
   return (
      <motion.form
         variants={containerVariants}
         initial="hidden"
         animate="visible"
      >
         <div className="inputs-cont">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Asunto" />
         </div>
         <textarea placeholder="Mensaje"></textarea>
         <Link to="/">
            <button>Send</button>
         </Link>
      </motion.form>
   );
};

export default Modal;
