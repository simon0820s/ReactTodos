import { FaCheck } from 'react-icons/fa';
import {AiFillDelete} from 'react-icons/ai'
import { motion } from 'framer-motion';

const Todo = ({ todo, handleSetComplete, handleDelete }) => {

    const { id, title, completed } = todo;

    return (
        <motion.div
            className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600 "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center">
                {
                    completed ? (
                        <div onClick={() => handleSetComplete(id)} className="bg-green-700 p-1 rounded-full cursor-pointer">
                            <FaCheck/>
                        </div>
                    )
                        : (
                            <span onClick={() => handleSetComplete(id)} className={`border border-gray-500 border-solid p-3 rounded-full cursor-pointer hover:bg-green-500 hover:shadow-xl hover:shadow-green-700 hover:bg-opacity-50 transition-all duration-300`}>
                            </span>
                        )
                }

                <p className={"pl-3 " + (completed && "line-through")}>{title}</p>
            </div>
            <motion.div
            animate={{
                scale: [1, 2,1],
                rotate: [0,180,360],}}
                transition={{duration:1.5}}
            >
                <AiFillDelete onClick={() => handleDelete(id)} className="h-5 w-5 cursor-pointer animate hover:scale-150 hover:text-red-600 transition-all duration-200 ease-in "/>
            </motion.div>
        </motion.div>
    );
}

export { Todo } 
