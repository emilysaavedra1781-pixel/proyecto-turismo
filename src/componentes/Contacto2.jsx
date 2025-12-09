import React, { useState } from "react";
import { useGlobal } from "./ContextoGlobal.jsx";


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

    // ⬅️ OBTENEMOS IDIOMA Y TRADUCCIONES DE SUPABASE
    const { idioma, traducciones } = useGlobal();

    if (!traducciones || Object.keys(traducciones).length === 0) {
        return <p>Cargando contenidos...</p>;
    }

    const t = traducciones;

    // 📊 Datos de la gráfica
    const chartData = {
        labels: ["Lima", "Cusco", "Arequipa", "Puno", "Ica"],
        datasets: [
            {
                label: t.contacto_grafico_label?.[idioma],
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
                text: t.contacto_grafico_titulo?.[idioma],
                font: { size: 18 },
            },
        }
    };

    // 📝 Validaciones
    const validate = (name, value) => {
        let error = '';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === 'nombre' && !value.trim()) {
            error = t.contacto_error_nombre?.[idioma];
        } else if (name === 'correo' && !emailRegex.test(value)) {
            error = t.contacto_error_correo?.[idioma];
        } else if (name === 'mensaje' && value.length < 10) {
            error = t.contacto_error_mensaje?.[idioma];
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

        try {
  const response = await fetch("/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nombre: formData.nombre,
      correo: formData.correo
    })
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Error del servidor:", data);
    setSubmitStatus("error");
    return;
  }

  setSubmitStatus("success");
  setFormData({ nombre: "", correo: "", mensaje: "" });
  setErrors({});
} catch (err) {
  console.error("Error de red:", err);
  setSubmitStatus("error");
}

 }

     

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
                <h2>{t.contacto_titulo?.[idioma]}</h2>

                {submitStatus === 'success' && (
                    <p style={{ color: 'green', background: '#e9ffe9', padding: '10px', borderRadius: '4px' }}>
                        {t.contacto_envio_exito?.[idioma]}
                    </p>
                )}

                {submitStatus === 'error' && (
                    <p style={{ color: 'red', background: '#ffe9e9', padding: '10px', borderRadius: '4px' }}>
                        {t.contacto_envio_error?.[idioma]}
                    </p>
                )}

                <form onSubmit={handleSubmit} noValidate>
                    <label>{t.contacto_nombre_label?.[idioma]}</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} style={inputStyle} />
                    {errors.nombre && <p style={{ color: 'red' }}>{errors.nombre}</p>}

                    <label>{t.contacto_correo_label?.[idioma]}</label>
                    <input type="email" name="correo" value={formData.correo} onChange={handleChange} style={inputStyle} />
                    {errors.correo && <p style={{ color: 'red' }}>{errors.correo}</p>}

                    <label>{t.contacto_mensaje_label?.[idioma]}</label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} rows="5" style={inputStyle}></textarea>
                    {errors.mensaje && <p style={{ color: 'red' }}>{errors.mensaje}</p>}

                    <button type="submit" style={buttonStyle}>
                        {t.contacto_boton_enviar?.[idioma]}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contacto;

