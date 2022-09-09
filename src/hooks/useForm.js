import { useState } from 'react';

const useForm = ( initialForm = {}) => {

    const [form, setForm] = useState(initialForm);
     
      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        });
      };

      const onResetForm = () => {
        setForm(initialForm)
      }

      const handleSubmit = (e) => {
        e.preventDefault();
      };
      
  return {
        ...form,
        form,
        onResetForm,
        handleChange,
        handleSubmit
  }
}

export default useForm