function KPICard(props) {
  return (
    <div style={styles.card}>
      <p style={styles.label}>{props.icon} {props.label}</p>
      <h2 style={styles.value}>{props.value}</h2>
      <p style={styles.sub}>{props.sub}</p>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#1e293b',
    borderRadius: '10px',
    padding: '20px',
    flex: 1,
    minWidth: '150px',
    borderLeft: '4px solid #38bdf8',
  },
  label: {
    color: '#94a3b8',
    fontSize: '13px',
    marginBottom: '8px',
  },
  value: {
    color: '#f1f5f9',
    fontSize: '26px',
    marginBottom: '5px',
  },
  sub: {
    color: '#22c55e',
    fontSize: '12px',
  },
};

export default KPICard;