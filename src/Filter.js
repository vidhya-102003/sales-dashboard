const categories = ['All', 'Electronics', 'Clothing', 'Groceries', 'Furniture', 'Sports'];

function Filter(props) {
  return (
    <div style={styles.container}>
      <p style={styles.label}>Filter by Category:</p>
      <div style={styles.buttons}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => props.onSelect(cat)}
            style={{
              ...styles.button,
              backgroundColor: props.selected === cat ? '#38bdf8' : '#1e293b',
              color: props.selected === cat ? '#0f172a' : '#94a3b8',
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#1e293b',
    borderRadius: '10px',
    padding: '15px 20px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    flexWrap: 'wrap',
  },
  label: {
    color: '#94a3b8',
    fontSize: '14px',
  },
  buttons: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  button: {
    padding: '6px 16px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: 'bold',
  },
};

export default Filter;