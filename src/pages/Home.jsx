import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Colosal from '../components/Colosal';
import Logo from '../components/Logo';

const Home = () => {
   return (
      <div className="main">
         <motion.div>
            <Colosal />
            <Logo />
            <motion.h1
               className="arrow-down"
               initial={{ y: -10 }}
               animate={{
                  y: 0,
                  transition: {
                     duration: 1,
                     ease: 'easeInOut',
                     repeat: Infinity,
                     repeatType: 'reverse',
                  },
               }}
            >
               <Link to="/about">&#8659;</Link>
            </motion.h1>
         </motion.div>
      </div>
   );
};

export default Home;
