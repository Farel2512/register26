function RegisterValidation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*[a-zA-Z])(?=.*\d)/;

  if (values.name === '') {
    error.name = 'Nama harus diisi';
  } else {
    error.name = '';
  }

  if (values.email === '') {
    error.email = 'Email harus diisi';
  } else if (!email_pattern.test(values.email)) {
    error.email = 'Email tidak cocok';
  }

  if (values.password === '') {
    error.password = 'Password harus diisi';
  } else if (!password_pattern.test(values.password)) {
    error.password = 'Password belum sesuai';
  }

  return error;
}
export default RegisterValidation;
