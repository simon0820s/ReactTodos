import { motion } from "framer-motion";

const FiltersContainer = ({ children }) => {
    return (
        <motion.div
         className="flex items-center justify-between p-4 bg-gray-800 border-b border-solid border-gray-900"
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration:0.5}}
         >
            {children}
        </motion.div>
    )
};

const ItemsLeft = ({ total }) => {
    return (
        <p className="text-gray-400 text-sm">
            {total} items left
        </p>
    )
};

const FilterButtonContainer = ({
    children
}) => {
    return (
        <div className="flex items-center space-x-2">
            {children}
        </div>
    )
};

const FilterButton = ({ action, active, filter }) => {
    return (
        <button onClick={action}
            className={` hover:text-white cursor-pointer transition-all duration-300 ease-in-out `
                + (active.toLowerCase().includes(filter.toLowerCase()) ? 'text-blue-400' : 'text-gray-400')}>{filter}</button>
    )
}

export { ItemsLeft, FiltersContainer, FilterButtonContainer, FilterButton }