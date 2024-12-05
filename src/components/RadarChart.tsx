import { FC, useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { Category } from '../types';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface RadarChartProps {
  categories: Category[];
}

const RadarChart: FC<RadarChartProps> = ({ categories }) => {
  const chartRef = useRef<ChartJS>(null);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const data = {
    labels: [
      'Naturhensyn',
      'Arealbruk',
      'Ressursbruk',
      'Stedsidentitet',
      'Destinasjon',
      'Kontekst',
      'Tillit',
      'Eierskap',
      'Kunnskap'
    ],
    datasets: [
      {
        label: 'Bærekraft',
        data: [
          ...categories[0].answers.map(a => a.value || 0),
          null,
          null,
          null,
          null,
          null,
          null
        ],
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        borderColor: 'rgb(16, 185, 129)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(16, 185, 129)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(16, 185, 129)',
        fill: true,
        segment: {
          borderColor: ctx => ctx.p0.parsed.r === 0 || ctx.p1.parsed.r === 0 ? 'rgba(16, 185, 129, 0.2)' : 'rgb(16, 185, 129)'
        }
      },
      {
        label: 'Skjønnhet',
        data: [
          null,
          null,
          null,
          ...categories[1].answers.map(a => a.value || 0),
          null,
          null,
          null
        ],
        backgroundColor: 'rgba(245, 158, 11, 0.2)',
        borderColor: 'rgb(245, 158, 11)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(245, 158, 11)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(245, 158, 11)',
        fill: true,
        segment: {
          borderColor: ctx => ctx.p0.parsed.r === 0 || ctx.p1.parsed.r === 0 ? 'rgba(245, 158, 11, 0.2)' : 'rgb(245, 158, 11)'
        }
      },
      {
        label: 'Fellesskap',
        data: [
          null,
          null,
          null,
          null,
          null,
          null,
          ...categories[2].answers.map(a => a.value || 0)
        ],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(59, 130, 246)',
        fill: true,
        segment: {
          borderColor: ctx => ctx.p0.parsed.r === 0 || ctx.p1.parsed.r === 0 ? 'rgba(59, 130, 246, 0.2)' : 'rgb(59, 130, 246)'
        }
      },
      {
        label: 'Lav ambisjon sone',
        data: Array(9).fill(1),
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        borderColor: 'rgba(239, 68, 68, 0.2)',
        borderWidth: 1,
        pointRadius: 0,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)'
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        suggestedMin: 0,
        suggestedMax: 3,
        ticks: {
          stepSize: 1,
          callback: (value: number) => value.toString(),
          font: {
            size: window.innerWidth < 768 ? 10 : 12
          }
        },
        pointLabels: {
          font: {
            size: window.innerWidth < 768 ? 10 : 12
          }
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: window.innerWidth < 768 ? 10 : 20,
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            size: window.innerWidth < 768 ? 12 : 14
          },
          filter: (item: any) => item.text !== 'Lav ambisjon sone'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#1f2937',
        bodyColor: '#4b5563',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        padding: window.innerWidth < 768 ? 8 : 12,
        cornerRadius: 8,
        titleFont: {
          size: window.innerWidth < 768 ? 12 : 14,
          weight: 'bold'
        },
        bodyFont: {
          size: window.innerWidth < 768 ? 11 : 13
        },
        callbacks: {
          title: (tooltipItems: any[]) => {
            const item = tooltipItems[0];
            return item.label;
          },
          label: (context: any) => {
            if (context.dataset.label === 'Lav ambisjon sone') return null;
            const value = context.raw;
            if (value === null) return null;
            if (value === 0) return `${context.dataset.label}: Ikke besvart`;
            return `${context.dataset.label}: Nivå ${value}`;
          }
        }
      }
    },
    elements: {
      line: {
        tension: 0.4
      }
    }
  };

  return (
    <div className="aspect-square max-w-xl mx-auto h-[300px] sm:h-[400px] md:h-[500px]">
      <Radar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default RadarChart;