import React from 'react';
import { Link } from 'react-router-dom';
import { motion,AnimatePresence } from 'framer-motion';
import './css/main.css';

const backdrop={
    hidden:{opacity:0},
    visible:{opacity:1},
};
const model={
    hidden:{
        y:"-100vw",
        opacity:0,
    },
    visible:{
        y:"200px",
        opacity:1,
        transition:{delay:0.5,type:'spring',stiffness:120}
    }
}
const buttonVariants={
    hover:{
        scale: 1.1,
        textShadow:"0px 0px 8px rgb(0,0,0)",
        boxShadow:"0px 0px 8px rgb(0,0,0)",
        transition:{
            repeat: Infinity,
        repeatType: 'reverse',
        duration:0.3,
            }
    }
}
const Model = ({showModel, setShowModel}) => {
    return (  
        <AnimatePresence exitBeforeEnter> 
            {showModel && (
                <motion.div className='backdrop'
                variants={backdrop}
                initial="hidden"
                animate="visible"
                exit="hidden"
                >   
                <motion.div className='model'
                variants={model}
                initial="hidden"
                animate="visible"
                >
                    <p>Want to make another pizza?</p>
                    <Link to='/main'>
                        <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        >Start Again?
                        </motion.button>
                    </Link>
                    
                </motion.div>
           </motion.div> )}
        </AnimatePresence> 
    );
}
 
export default Model;