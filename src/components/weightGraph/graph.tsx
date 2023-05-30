import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const WeightGraph = () => {
  const [weightData, setWeightData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const downloadWeightData = async () => {
        const token = localStorage.getItem('token');
        if(!token) {
            // Redirect to login page
            window.location.href = '/login';
        }
        const currentDate = new Date();
        const lastMonthDate = new Date();
        lastMonthDate.setMonth(currentDate.getDay() - 1);
        const startTimestamp = Math.round(lastMonthDate.getTime()/1000)
        const endTimestamp = Math.round(currentDate.getTime()/1000)
        const response = await axios.get(`http://127.0.0.1:8080/weight/${startTimestamp}/${endTimestamp}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      return response.data;
    };

    const fetchWeightData = async () => {
      const weightData = await downloadWeightData();
      setWeightData(weightData);
      setIsLoading(false);
    };

    fetchWeightData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Format timestamp to a readable format
  const formatTimestamp = (timestamp: string | number | Date) => {
    const date = new Date(timestamp);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  return (
    <div>
      <h1>Weight Graph</h1>
      <div style={{ width: '100%' }}>
        <LineChart width={600} height={300} data={weightData}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis
            dataKey="date"
            tickFormatter={formatTimestamp}
            interval={0}
            />
            <YAxis dataKey="value" />
            <Tooltip />
            <Legend />
        </LineChart>
    </div>
    </div>
  );
};

export default WeightGraph;
