import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Electronics', value: 4000 },
  { name: 'Clothing', value: 3000 },
  { name: 'Groceries', value: 2000 },
  { name: 'Furniture', value: 1500 },
  { name: 'Sports', value: 1000 },
];

const COLORS = ['#38bdf8', '#818cf8', '#22c55e', '#f59e0b', '#f43f5e'];

function SalesPieChart() {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>🛒 Sales by Category</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: '#1e293b', border: 'none' }}
            labelStyle={{ color: '#38bdf8' }}
          />
          <Legend />
        </PieChart>
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

export default SalesPieChart;