import React from 'react';
import './css/main.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './loader';

const buttonVariants={
    hover:{
        scale: 1.1,
        textShadow:"0px 0px 8px rgb(255,255,255)",
        boxShadow:"0px 0px 8px rgb(255,255,255)",
        transition:{
            repeat: Infinity,
             repeatType: 'reverse'
            }
    }
}
const containerVariants={  
    hidden:{
        opacity:0,
    },
    visible:{
        opacity:1,
        transition:{delay:1.5,duration:1.5}
    },
    exit:{
        x:'-100vw',
        transition:{ease:'easeInOut'}
    }
}

const Main = () => {
    return ( 
        
            <motion.div className="middle container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
            
                <h2 >
                    Welcome to Pizza Joint
                    </h2>
               <br/>
               <br/>
                <Link to="/base">
                <motion.button
                variants={buttonVariants}
                whileHover="hover"
                >    
                    Create Your Pizza
                    </motion.button>
                </Link>
                <br/>
                <br/>
               <Loader />
            </motion.div>
            
     );
}
 
export default Main;