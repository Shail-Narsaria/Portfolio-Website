import {motion} from "framer-motion"

const ToggleBtn = ({setOpen}) => {
  return (
    <div>
      <button onClick={()=>setOpen(prev=>!prev)} className="toggBtn">
        <svg width="20" height="20" viewBox="0 0 20 20">
          <motion.path 
            strokeWidth="3" 
            stroke="black" 
            strokeLinecap="round" 
            variants={{
              closed: {d:"M 2 2.5 L 20 2.5"},
              opened:{d:"M 3 16.5 L 17 2.5"}
            }}
          />
          <motion.path
            strokeWidth="3" 
            stroke="black" 
            strokeLinecap="round" 
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: {opacity: 1},
              opened:{opacity: 0}
            }}
          />
          <motion.path
            strokeWidth="3" 
            stroke="black" 
            strokeLinecap="round" 
            variants={{
              closed: {d:"M 2 16.346 L 20 16.346"},
              opened:{d:"M 3 2.5 L 17 16.346"}
            }}
          />
        </svg>
      </button>
    </div>
  )
}

export default ToggleBtn
