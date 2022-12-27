import React from 'react';
import './css/main.css';
import {GiFullPizza} from 'react-icons/gi';
import { motion } from 'framer-motion';

const NavBar = () => {
    return ( 
        
        <div className='container-fluid' >
            <div className='row'>
                <motion.div className='col-1 align-self-start'
                drag
                dragConstraints={{left:0,right:0,top:0,bottom:0}}
                dragElastic={0.7}
                >
            <GiFullPizza size="80px"/>
            </motion.div>
            <motion.div className='col align-self-end' style={{"paddingTop":"35px"}}
            animate={{y:-10}}
            initial={{y:-250}}
            transition={{delay:0.3,type:'spring',stiffness:130}}
            >
                Pizza Joint
             <hr className="style1" />
            
            </motion.div>
            
            </div>
        </div>
        
    
     );
}
 
export default NavBar;