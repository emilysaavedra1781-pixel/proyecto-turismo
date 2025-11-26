import React, { useState } from "react";
import { useGlobal } from "./ContextoGlobal.jsx";
import { supabase } from "./supabaseClient";



// 📊 Importación de Chart.js
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
            error: 'Ocurrió un error. Por favor, revisa los campos con errores.',
            chartTitle: "Turistas Nacionales e Internacionales por Departamento (2024)",
            chartLabel: "Número de Turistas"
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
            error: 'An error occurred. Please check the fields for errors.',
            chartTitle: "Domestic and International Tourists by Department (2024)",
            chartLabel: "Number of Tourists"
        }
    };

    const currentLang = translations[idioma];

    // 📊 Datos de la gráfica
    const chartData = {
        labels: ["Lima", "Cusco", "Arequipa", "Puno", "Ica"],
        datasets: [
            {
                label: currentLang.chartLabel,
                data: [120000, 85000, 60000, 45000, 30000],
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: currentLang.chartTitle,
                font: { size: 18 },
            },
        }
    };

    // 📝 Validaciones
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

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        validate(name, value);
    };

    // 🚀 ENVÍO A SUPABASE
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus(null);

        let isValid = true;
        ['nombre', 'correo', 'mensaje'].forEach(field => {
            if (validate(field, formData[field])) isValid = false;
        });

        if (!isValid) {
            setSubmitStatus("error");
            return;
        }

        // ⬆ Guardar en Supabase
      const { error } = await supabase
    .from("contacto")   // ✔️ nombre real de tu tabla
    .insert([
        {
            nombre: formData.nombre,
            correo: formData.correo,
            opinion: formData.mensaje   // ✔️ tu tabla usa "opinion"
        }
    ]);


        if (error) {
            console.error("Error al guardar en Supabase:", error);
            setSubmitStatus("error");
            return;
        }

        // ✔ Éxito
        setSubmitStatus("success");
        setFormData({ nombre: '', correo: '', mensaje: '' });
        setErrors({});
    };

    // 🎨 Estilos
    const formStyle = { padding: '20px', maxWidth: '600px', margin: '20px auto', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#fff' };
    const inputStyle = { width: '100%', padding: '10px', margin: '5px 0 10px', borderRadius: '4px', border: '1px solid #ccc' };
    const buttonStyle = { padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' };

    return (
        <div className="contact-page">

            {/* 📊 Gráfica arriba del formulario */}
            <div style={{ maxWidth: "800px", margin: "20px auto" }}>
                <Bar data={chartData} options={chartOptions} />
            </div>

            {/* 📝 Formulario */}
            <div style={formStyle}>
                <h2>{currentLang.title}</h2>

                {submitStatus === 'success' && (
                    <p style={{ color: 'green', background: '#e9ffe9', padding: '10px', borderRadius: '4px' }}>
                        {currentLang.success}
                    </p>
                )}

                {submitStatus === 'error' && (
                    <p style={{ color: 'red', background: '#ffe9e9', padding: '10px', borderRadius: '4px' }}>
                        {currentLang.error}
                    </p>
                )}

                <form onSubmit={handleSubmit} noValidate>
                    <label>{currentLang.nameLabel}</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} style={inputStyle} />
                    {errors.nombre && <p style={{ color: 'red' }}>{errors.nombre}</p>}

                    <label>{currentLang.emailLabel}</label>
                    <input type="email" name="correo" value={formData.correo} onChange={handleChange} style={inputStyle} />
                    {errors.correo && <p style={{ color: 'red' }}>{errors.correo}</p>}

                    <label>{currentLang.messageLabel}</label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} rows="5" style={inputStyle}></textarea>
                    {errors.mensaje && <p style={{ color: 'red' }}>{errors.mensaje}</p>}

                    <button type="submit" style={buttonStyle}>{currentLang.submitButton}</button>
                </form>
            </div>
        </div>
    );
};

export default Contacto;
