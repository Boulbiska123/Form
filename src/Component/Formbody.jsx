
import React, { useState } from 'react';

    export default function FormBody() {
        const [formData, setFormData] = useState({
            username: '',
            email: '',
            password: '',
        });
        const [errors, setErrors] = useState({
            email: '',
            password: '',
            username: '',
        });
        const regexusername = /^[A-Za-z]+$/;
        const regexEmail = /^[a-z]+@[a-z]+\.[a-z]+$/;
        const regexPassword =  /^.{8,}$/;
        const handleSubmit = (e) => {
            e.preventDefault();
            let formErrors = {};
            if (!regexusername.test(formData.username) || formData.username.trim() === '') {
                formErrors = { ...formErrors, username: 'Le champ ne peut pas être vide / ne contient pas des nombres.' };
            }
            if (!regexEmail.test(formData.email) || formData.email.trim() === '') {
                formErrors = { ...formErrors, email: 'L\'adresse doit commencer par une miniscule apres @ apres une point ' };
            }
            if (!regexPassword.test(formData.password) || formData.password.trim() === '') {
                formErrors = { ...formErrors, password: 'Le mot de passe doit contenir au moins 8 caractères' };
            }
            setErrors(formErrors);
    
            // Submit the form if there are no errors
            if (Object.keys(formErrors).length === 0) {
                // Your form submission logic here
                console.log('Form submitted successfully:', formData);
            }
        };
    
        return (
            <div className="container mx-2 my-4">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="form-label" htmlFor="username">
                            Username:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        />
                        {errors.username && <p className="alert alert-danger">{errors.username}</p>}
                    </div>
                    <div>
                        <label className="form-label" htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && <p className="alert alert-danger">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="form-label" htmlFor="password">
                            Password:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        {errors.password && <p className="alert alert-danger">{errors.password}</p>}
                    </div>
                    <br />
                    <button className="btn btn-success btn-lg" type="submit">
                        Login
                    </button>
                </form>
            </div>
        );
    }
    