import React, { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (event) => {
   
    const newData = { email, password };
    setData([...data, newData]);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});
  };

  const handleDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleInputChange}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>User Data:</h3>
        {data.length === 0 ? (
          <div></div>
        ) : (
          <ul>
            {data.map((data, index) => (
              <li key={index}>
                Email: {data.email}, Password: {data.password}{' '}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Form;