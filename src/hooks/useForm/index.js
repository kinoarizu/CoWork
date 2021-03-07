import { useState } from 'react';

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  
  return [
    values,
    (formType, formValue) => {
      if (values === 'reset') {
        return setValues(initialValue);
      }
      return setValues({
        ...values,
        [formType]: formValue,
      });
    },
  ];
};
