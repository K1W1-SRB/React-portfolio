import { motion } from "framer-motion";
import { useRef, useEffect, usestate } from "react";
import images from '../images'

function skills() {


    return(
        <div className="skills-container">
            <div className='skills-tittle-container'>
            <h2 className="skills-tittle">My skills</h2> 
            </div>
            
            <motion.div className='carousel'>
                <motion.div drag="x" dragConstraints={{right: 0, left: -200}} className='inner-carousel'>
                    {images.map((image) => {
                        return (
                            <motion.div className="item" key={image}>
                                <img src={image} alt="" />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>

        </div>
    )
}

export default skills;