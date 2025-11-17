import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useGlobal } from '../ContextoGlobal';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Estadisticas = () => {
    const { idioma } = useGlobal();

    const datosEstadisticos = {
        departamentos: ['Lima', 'Cusco', 'Arequipa', 'Puno', 'Ica'],
        turistas2024: [120000, 85000, 60000, 45000, 30000]
    };

    const translations = {
        es: {
            title: 'Turistas Nacionales e Internacionales por Departamento (2024)',
            label: 'Número de Turistas',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)'
        },
        en: {
            title: 'Domestic and International Tourists by Department (2024)',
            label: 'Number of Tourists',
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)'
        }
    };
    
    const currentLang = translations[idioma];

    const chartData = {
        labels: datosEstadisticos.departamentos,
        datasets: [
            {
                label: currentLang.label,
                data: datosEstadisticos.turistas2024,
                backgroundColor: currentLang.backgroundColor,
                borderColor: currentLang.borderColor,
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
                text: currentLang.title,
                font: {
                    size: 18
                },
                color: 'var(--color-texto, #333)'
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'var(--color-texto, #333)' 
                }
            },
            x: {
                ticks: {
                    color: 'var(--color-texto, #333)' 
                }
            }
        }
    };

    const containerStyle = { padding: '20px', maxWidth: '800px', margin: '20px auto', backgroundColor: 'var(--color-fondo-secundario, #fff)', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' };

    return (
        <div className="estadisticas-container" style={containerStyle}>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default Estadisticas;