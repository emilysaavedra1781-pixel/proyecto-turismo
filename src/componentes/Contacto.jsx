import React, { useState } from 'react';
import { useGlobal } from './ContextoGlobal'; // <<<< CORRECCIÓN: CAMBIO DE '../ContextoGlobal' A './ContextoGlobal'

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        mensaje: ''
    });

    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState(null); 

    const { idioma } = useGlobal();

    const translations = {
        es: {
            title: 'Contáctanos para tu Viaje',
            nameLabel: 'Tu Nombre',
            emailLabel: 'Correo Electrónico',
            messageLabel: 'Mensaje',
            submitButton: 'Enviar Mensaje',
            nameError: 'El nombre es obligatorio.',
            emailError: 'Ingresa un correo válido (ejemplo@dominio.com).',
            messageError: 'El mensaje debe tener al menos 10 caracteres.',
            success: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.',
            error: 'Ocurrió un error. Por favor, revisa los campos con errores.'
        },
        en: {
            title: 'Contact Us for Your Trip',
            nameLabel: 'Your Name',
            emailLabel: 'Email Address',
            messageLabel: 'Message',
            submitButton: 'Send Message',
            nameError: 'Name is required.',
            emailError: 'Please enter a valid email (example@domain.com).',
            messageError: 'Message must be at least 10 characters long.',
            success: 'Message sent successfully! We will contact you shortly.',
            error: 'An error occurred. Please check the fields for errors.'
        }
    };
    
    const currentLang = translations[idioma]; 

    const validate = (name, value) => {
        let error = '';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === 'nombre' && !value.trim()) {
            error = currentLang.nameError;
        } else if (name === 'correo' && !emailRegex.test(value)) {
            error = currentLang.emailError;
        } else if (name === 'mensaje' && value.length < 10) {
            error = currentLang.messageError;
        }
        
        setErrors(prev => ({ ...prev, [name]: error }));
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        validate(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitStatus(null); 

        let isValid = true;
        
        ['nombre', 'correo', 'mensaje'].forEach(field => {
            const error = validate(field, formData[field]);
            if (error) {
                isValid = false;
            }
        });

        if (isValid) {
            console.log('Datos a enviar:', formData);
            
            setTimeout(() => {
                setSubmitStatus('success');
                setFormData({ nombre: '', correo: '', mensaje: '' });
                setErrors({}); 
            }, 1000);

        } else {
            setSubmitStatus('error');
        }
    };

    const formStyle = { padding: '20px', maxWidth: '600px', margin: '20px auto', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: 'var(--color-fondo-secundario, #fff)'};
    const inputStyle = { width: '100%', padding: '10px', margin: '5px 0 10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' };
    const buttonStyle = { padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' };

    return (
        <div className="contact-container">
            <div style={formStyle}>
                <h2 className="contact-title">{currentLang.title}</h2>
                
                {submitStatus === 'success' && (
                    <p style={{ color: 'green', backgroundColor: '#e9ffe9', border: '1px solid green', padding: '10px', borderRadius: '4px', marginBottom: '15px' }}>
                        {currentLang.success}
                    </p>
                )}
                {submitStatus === 'error' && (
                    <p style={{ color: 'red', backgroundColor: '#ffe9e9', border: '1px solid red', padding: '10px', borderRadius: '4px', marginBottom: '15px' }}>
                        {currentLang.error}
                    </p>
                )}

                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="nombre">{currentLang.nameLabel}:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                        {errors.nombre && <p className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '-8px' }}>{errors.nombre}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="correo">{currentLang.emailLabel}:</label>
                        <input
                            type="email"
                            id="correo"
                            name="correo"
                            value={formData.correo}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                        {errors.correo && <p className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '-8px' }}>{errors.correo}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="mensaje">{currentLang.messageLabel}:</label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            rows="5"
                            style={inputStyle}
                        ></textarea>
                        {errors.mensaje && <p className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '-8px' }}>{errors.mensaje}</p>}
                    </div>
                    
                    <button type="submit" style={buttonStyle}>
                        {currentLang.submitButton}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contacto;