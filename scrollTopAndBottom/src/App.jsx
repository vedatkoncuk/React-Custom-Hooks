import React from "react";
import useFetch from "./components/useFetch.jsx";

function App() {
  const { data, loading, error } = useFetch("https://fakestoreapi.com/products");

  // Scroll fonksiyonları
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  // Loading ve error kontrol
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <button style={{ margin: "20px", padding: "10px", borderRadius: "8px" }} onClick={scrollToBottom}>Scroll to Bottom</button>

      {data && data.length > 0 && data.map((item) => (
        <h4 style={{ marginBottom: "20px", color: "#00b4d8" }} key={item.id}>{item.title}</h4>
      ))}

      <button style={{ margin: "20px", padding: "10px", borderRadius: "8px" }} onClick={scrollToTop}>Scroll to Top</button>
    </div>
  );
}

export default App;
