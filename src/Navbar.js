function Navbar() {
  return (
    <nav style={styles.nav}>
      <div>
        <h2 style={styles.logo}>📊 SalesVision</h2>
        <p style={styles.sub}>Sales Analytics Dashboard</p>
      </div>
      <div style={styles.badge}>
        <span style={styles.dot}></span>
        <p style={styles.live}>Live Data</p>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    padding: '15px 30px',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  logo: {
    color: '#38bdf8',
    fontSize: '22px',
  },
  sub: {
    color: '#94a3b8',
    fontSize: '12px',
    marginTop: '3px',
  },
  badge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#0f172a',
    padding: '6px 14px',
    borderRadius: '20px',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#22c55e',
    display: 'inline-block',
  },
  live: {
    color: '#22c55e',
    fontSize: '13px',
  },
};

export default Navbar;