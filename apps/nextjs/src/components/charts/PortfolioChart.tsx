import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const data = [
  { name: "Mon", uv: 3000, pv: 2400, amt: 2400 },
  { name: "Tues", uv: 4230, pv: 2400, amt: 2400 },
  { name: "Wed", uv: 4450, pv: 2400, amt: 2400 },
  { name: "Thurs", uv: 4900, pv: 2400, amt: 2400 },
  { name: "Fri", uv: 4550, pv: 2400, amt: 2400 },
  { name: "Sat", uv: 5500, pv: 2400, amt: 2400 },
  { name: "Sun", uv: 6000, pv: 2400, amt: 2400 },
];

const PortfolioChart = () => {
  return (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
};

export default PortfolioChart;
