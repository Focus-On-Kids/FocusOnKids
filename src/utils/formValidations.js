export const formValidations = (form) => {
  let errors = {};

  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
    regexPhone = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
    regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
    regexMessage = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = 'Name is required.';
  } else if (!regexName.test(form.name.trim())) {
    errors.name = 'Name only accepts letters and white spaces.';
  }
  
  if (!form.phone.trim()) {
    errors.phone = 'Phone is required.';
  } else if (!regexPhone.test(form.phone.trim())) {
    errors.phone = 'Invalid phone.';
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = 'Invalid email.';
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required.';
  } else if (!regexMessage.test(form.message.trim())) {
    errors.message = 'Message only accepts 255 characters.';
  }

  return errors;
};
