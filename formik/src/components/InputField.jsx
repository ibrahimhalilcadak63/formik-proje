const InputField = ({formik, label, name, type}) => {

return (
    <div>
      <label className='form-label'>{label}</label>
      <input 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        name= {name}
        className={`form-control ${formik.errors[name] && formik.touched[name] ? 'is-invalid' : ''}`}
        type= {type}
      />
      
        <div className='feedback'>{formik.errors[name]}</div>      
    </div>
  );
};


export default InputField;
