import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div style={styles.container}>
      <h1>Hello, React App! 🚀</h1>

      <div style={styles.card}>
        <p>Click count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div style={styles.card}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name && <p>Welcome, {name}!</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    fontFamily: "Arial",
  },
  card: {
    marginTop: "1rem",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
};

export default App;