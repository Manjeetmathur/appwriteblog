import React from 'react'
import { useId } from 'react'

const Select = ({
       options,
       label,
       className="",
       ...props
},ref) => {
       const id = useId()
  return (
    <div className=''>
      {label && <label htmlFor={id}></label> }
      <select {...props} id={id} ref={ref} className={className}>
              { options?.map( () => (
                     <option value={options} key={options}>
                            {options}
                     </option>
              )) }
      </select>
    </div>
  )
}

export default React.forwardRef(Select)
