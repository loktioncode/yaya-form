import React, { PropTypes} from 'react'


const CustomInput = ({
    name,
    type,
    placeholder,
    inputClass,
    children,
    label,
    defaultValue,
    labelClass,
    required,
    ...props
  }) => {
    
    return (
      <React.Fragment>
        <label className={labelClass} htmlFor={name}>{label}</label>
        <br />
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={inputClass}
          defaultValue={defaultValue}
          required={required} 
        />
   
      </React.Fragment>
    )
  }
  
  CustomInput.defaultProps = {
    type: "text",
    className: "",
  }
  
//   CustomInput.propTypes = {
//     name: PropTypes.string,
//     type: PropTypes.string,
//     placeholder: PropTypes.string,
//     type: PropTypes.oneOf(['text', 'number', 'password']),
//     className: PropTypes.string,
//     value: PropTypes.any,
//     onChange: PropTypes.func
//   }

export default CustomInput
