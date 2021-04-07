import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Titan from '../components/Titan';

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

const About = () => {
   return (
      <div className="about-container">
         <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
         >
            <h1>About</h1>
            <div className="about-desc">
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus a libero quos quas tempora dolorum pariatur mollitia
                  perspiciatis quidem odio veritatis sit illum necessitatibus,
                  exercitationem adipisci amet laborum voluptatibus ipsam.
               </p>
               <div className="titan">
                  <Titan />
               </div>
            </div>
            <h1 className="a">
               <Link to="/newsletter">&#8659;</Link>
            </h1>
         </motion.div>
      </div>
   );
};

export default About;
