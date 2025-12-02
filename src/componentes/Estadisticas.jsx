import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useGlobal } from '../ContextoGlobal';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Estadisticas = () => {
    const { idioma, traducciones } = useGlobal();

    if (!traducciones || Object.keys(traducciones).length === 0) {
        return <p>Cargando estadísticas...</p>;
    }

    const t = traducciones;

    const datosEstadisticos = {
        departamentos: ['Lima', 'Cusco', 'Arequipa', 'Puno', 'Ica'],
        turistas2024: [120000, 85000, 60000, 45000, 30000]
    };

    // ⭐ Traducciones desde la BD Supabase
    const title = t.estadisticas_titulo?.[idioma] || "";
    const label = t.estadisticas_label?.[idioma] || "";

    const chartData = {
        labels: datosEstadisticos.departamentos,
        datasets: [
            {
                label: label,
                data: datosEstadisticos.turistas2024,
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'var(--color-texto, #333)'
                }
            },
            title: {
                display: true,
                text: title,
                font: { size: 18 },
                color: 'var(--color-texto, #333)'
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: { color: 'var(--color-texto, #333)' }
            },
            x: {
                ticks: { color: 'var(--color-texto, #333)' }
            }
        }
    };

    const containerStyle = { 
        padding: '20px',
        maxWidth: '800px',
        margin: '20px auto',
        backgroundColor: 'var(--color-fondo-secundario, #fff)',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
    };

    return (
        <div className="estadisticas-container" style={containerStyle}>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default Estadisticas;
