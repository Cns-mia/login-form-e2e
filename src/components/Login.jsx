import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialForm = {
  email: '',
  password: '',
  terms: false,
};

const initialErrors = {
  email: false,
  password: false,
  terms: false,
};

export const errorMessages = {
  email: 'Lütfen geçerli bir email adresi girin.',
  password:
    'Şifre en az 8 karakter olmalı; büyük harf, küçük harf, rakam ve özel karakter içermelidir.',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

const validateEmail = (email) => emailRegex.test(email);
const validatePassword = (password) => strongPasswordRegex.test(password);

export default function Login() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsValid(
      validateEmail(form.email) && validatePassword(form.password) && form.terms
    );
  }, [form]);

  const handleChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    setForm({ ...form, [name]: value });

    if (name === 'email') {
      setErrors({ ...errors, email: !validateEmail(value) });
    }
    if (name === 'password') {
      setErrors({ ...errors, password: !validatePassword(value) });
    }
    if (name === 'terms') {
      setErrors({ ...errors, terms: !value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;
    navigate('/success');
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email adresinizi girin"
          value={form.email}
          onChange={handleChange}
          className={errors.email ? 'invalid' : ''}
          data-cy="email-input"
        />
        {errors.email && (
          <p className="error-message" data-cy="error-message">
            {errorMessages.email}
          </p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password">Şifre</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Şifrenizi girin"
          value={form.password}
          onChange={handleChange}
          className={errors.password ? 'invalid' : ''}
          data-cy="password-input"
        />
        {errors.password && (
          <p className="error-message" data-cy="error-message">
            {errorMessages.password}
          </p>
        )}
      </div>

      <div className="form-check">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          checked={form.terms}
          onChange={handleChange}
          data-cy="terms-input"
        />
        <label htmlFor="terms">Şartları kabul ediyorum</label>
      </div>

      <button type="submit" disabled={!isValid} data-cy="submit-button">
        Giriş Yap
      </button>
    </form>
  );
}
