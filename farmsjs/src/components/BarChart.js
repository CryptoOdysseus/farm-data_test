import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['time',];

const data = {
  labels,
  datasets: [
    {
      label: 'pH',
      data: [34, 24, 45, 46, 45, 79, 65],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Temperature',
      data: [24, 24, 75, 84, 51, 79, 65],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Rainfall',
      data: [28, 24, 45, 46, 15, 79, 65],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },

  ],
};

export default function App() {
  return <Bar data={data} />;
}

const [csvHeaders, ...csvData] = `location,datetime,sensorType,value
Friman Metsola collective,2018-12-31T22:00:00.000Z,pH,6.52
Friman Metsola collective,2018-12-31T22:00:00.000Z,rainFall,2.6`.split('\n');
const csvParsedHeaders = csvHeaders.split(',');
csvData.reduce((csv, dataRow) => {
    dataRow.split(',').forEach((data, i) => {
        const header = csvParsedHeaders[i];
        if (!csv[header]) {
            csv[header] = [];
        }

        csv[header].push(data);
    });

    return csv;
}, {})