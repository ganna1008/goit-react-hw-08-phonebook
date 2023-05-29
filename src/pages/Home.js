const styles = {
  container: {
    // minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '15px',
  },
  title: {
    marginTop: '20px',
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  img: {
    objectFit: 'cover',
    borderRadius: '5px',
    width: '100%',
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <img
        src="https://ukraineverstehen.de/wp-content/uploads/shutterstock_1049176127-e1537001451192.jpg"
        alt="Ukraine"
      />
      <h1 style={styles.title}>Welcome to Phone Book </h1>
    </div>
  );
};

export default Home;
