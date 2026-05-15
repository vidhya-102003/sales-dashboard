import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 4800 },
  { month: 'May', sales: 7000 },
  { month: 'Jun', sales: 6000 },
  { month: 'Jul', sales: 8000 },
  { month: 'Aug', sales: 7500 },
  { month: 'Sep', sales: 6200 },
  { month: 'Oct', sales: 9000 },
  { month: 'Nov', sales: 8500 },
  { month: 'Dec', sales: 11000 },
];

function SalesBarChart() {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>📈 Monthly Sales</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="month" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{ backgroundColor: '#1e293b', border: 'none' }}
            labelStyle={{ color: '#38bdf8' }}
          />
          <Bar dataKey="sales" fill="#38bdf8" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#1e293b',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
  },
  title: {
    color: '#94a3b8',
    marginBottom: '15px',
    fontSize: '16px',
  },
};

export default SalesBarChart;