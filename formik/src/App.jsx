import { useFormik } from 'formik';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import schema from './schema';
import { inputs } from './constants';




  const App = () => {
    // Form gönderildiğinde FormData yöntemi ile verilere ulaşabiliyorduk. Ama hata yönetimi yapmıyorduk. Hata yönetimi yapmak istersek kodları bizim yazdığımız senaryodan çok fazla kod tekrarı olacağı için formik ve yup kütüphanelerini kullanarak form oluşturacağız.
    //useFormik formiğin bütün özelliklerini sağlayan bir hook
    const formik = useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        passwordConfirm: "",

      },
      // formiğe yup ile oluşturduğumuz validasyon şemasını tanıttık.
      validationSchema: schema,
     
      onsubmit:(values) => {
        alert("Form Gönderildi" + JSON.stringify(values));
      },
    });
     return ( 
      <div className='vh-100 vw-100'>
        <div className='container py-5'>
        <h2 className='text-center'>Coinmania</h2>
        <form 
        onSubmit={formik.handleSubmit}
        className='d-flex flex-column gap-4 mt-5'>

        {inputs.map((props) => <inputField formik={formik} {...props} />)}         
        
       
          <button className='my-5'>Gönder</button>
        </form>
        </div>
      </div>
  );
};
  


export default App;
