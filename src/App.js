import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import KPICard from './KPICard';
import SalesBarChart from './BarChart';
import SalesPieChart from './PieChart';
import Filter from './Filter';

const allData = {
  All:         { sales: '1,240', revenue: '₹4,80,000', orders: '340', avg: '₹1,412' },
  Electronics: { sales: '420',   revenue: '₹1,80,000', orders: '120', avg: '₹1,500' },
  Clothing:    { sales: '310',   revenue: '₹1,20,000', orders: '95',  avg: '₹1,263' },
  Groceries:   { sales: '250',   revenue: '₹80,000',   orders: '60',  avg: '₹1,333' },
  Furniture:   { sales: '160',   revenue: '₹60,000',   orders: '40',  avg: '₹1,500' },
  Sports:      { sales: '100',   revenue: '₹40,000',   orders: '25',  avg: '₹1,600' },
};

function App() {
  const [selected, setSelected] = useState('All');

  const data = allData[selected];

  return (
    <div className="app">
      <Navbar />
      <Filter selected={selected} onSelect={setSelected} />
     <div style={styles.cardRow}>
  <KPICard icon="🛍️" label="Total Sales"     value={data.sales}   sub="↑ this month" />
  <KPICard icon="💰" label="Total Revenue"   value={data.revenue} sub="↑ this month" />
  <KPICard icon="📦" label="Total Orders"    value={data.orders}  sub="↑ this month" />
  <KPICard icon="📊" label="Avg Order Value" value={data.avg}     sub="↑ this month" />
</div>
      <div style={styles.chartRow}>
        <div style={styles.barChart}>
          <SalesBarChart />
        </div>
        <div style={styles.pieChart}>
          <SalesPieChart />
        </div>
      </div>
    </div>
  );
}

const styles = {
  cardRow: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    marginBottom: '20px',
  },
  chartRow: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  barChart: {
    flex: 2,
    minWidth: '300px',
  },
  pieChart: {
    flex: 1,
    minWidth: '280px',
  },
};

export default App;