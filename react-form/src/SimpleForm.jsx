import React from 'react';
import { useForm } from 'react-hook-form';

function SimpleForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Simple Form</h1>
        
        <div className="box">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="username"
            id="username"
            {...register('username', { required: 'Username is required' })}
          />
          {errors.username && <div className="error">{errors.username.message}</div>}
        </div>
        
        <div className="box">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            {...register('email', { 
              required: 'Email is required', 
              pattern: { 
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 
                message: 'Invalid email address' 
              } 
            })}
          />
          {errors.email && <div className="error">{errors.email.message}</div>}
        </div>
        
        <div className="box">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            {...register('password', { 
              required: 'Password is required', 
              minLength: { 
                value: 8, 
                message: 'Password must be at least 8 characters' 
              } 
            })}
          />
          {errors.password && <div className="error">{errors.password.message}</div>}
        </div>
        
        <div className="bx">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SimpleForm;
