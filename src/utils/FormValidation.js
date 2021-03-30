import React from 'react';

export function useFormWithValidation() {
  const [values, setValues] = React.useState({
    name: '',
    password: '',
    email: ''
  });
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});

    if (name !== 'name') {
      setErrors({...errors, [name]: target.validationMessage });
    } else {
      const namePattern = /[a-zA-Zа-яА-Я\s-]/;
      if (namePattern.test(value)) {
        setErrors({...errors, [name]: target.validationMessage });
      } else {
        setErrors({...errors, [name]: 'Имя может содержать только буквы, цифры, дефис и пробел' });
      }
    }
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = React.useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
