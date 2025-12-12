// src/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Tugas Kelompok</h2>
      <hr />
      <div style={{ textAlign: "left", margin: "20px 0" }}>
        <p>
          <strong>Nama:</strong> Prayoga San Arisakti
        </p>
        <p>
          <strong>NIM:</strong> 103012480037
        </p>
        <p>
          <strong>Nama:</strong> Bimo Ghanis Surya Putra Wibowo
        </p>
        <p>
          <strong>NIM:</strong> 103012480036
        </p>
        <p>
          <strong>Nama:</strong> M. Agung Isra Narwin
        </p>
        <p>
          <strong>NIM:</strong> 103012480038
        </p>
        <p>
          <strong>Nama:</strong> Muhammad Nubli Zulfahmi
        </p>
        <p>
          <strong>NIM:</strong> 103012400121
        </p>
      </div>

      <button className="btn-nav" onClick={() => navigate("/calculator")}>
        Buka Kalkulator
      </button>
    </div>
  );
}

export default Home;
