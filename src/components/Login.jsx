import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialForm = {
  email: '',
  password: '',
  terms: false,
};

export default function Login() {
  const [form, setForm] = useState(initialForm);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
          data-cy="email-input"
        />
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
          data-cy="password-input"
        />
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

      <button type="submit" data-cy="submit-button">
        Giriş Yap
      </button>
    </form>
  );
}
