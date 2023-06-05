import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { formValidations } from '../utils/formValidations';
import { helpHttp } from '../helpers/helpHttp';

export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);
  const [isSelectActive, setIsSelectActive] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (select) => {
    setIsSelectActive(false);
    setForm({
      ...form,
      select
    });
  };

  const handleIsSelectActive = () => {
    setIsSelectActive(!isSelectActive);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(formValidations(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(formValidations(form));

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      helpHttp()
        .post('https://formsubmit.co/ajax/sebastianpesantez17@gmail.com', {
          body: form,
          headers: {
            'Content-type': 'application/json',
            Accept: 'application/json'
          }
        })
        .then(() => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => {
            setResponse(false);
            navigate('/');
          }, 10000);
        });
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    isSelectActive,
    loading,
    response,
    handleChange,
    handleIsSelectActive,
    handleBlur,
    handleSelect,
    handleSubmit
  };
};
