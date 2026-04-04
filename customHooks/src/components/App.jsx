
import { use, useState } from 'react'
import useFetch from './useFetch'

function App() {

  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products",
    { method: "GET" });

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>


  return (
    <div>
      {data && data.products.map((item) => (
        <h1 key={item.id}>{item.title}</h1>
      ))}
    </div>
  )
}

export default App
