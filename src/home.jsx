// // src/Home.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="container">
//       <h2>Tugas Kelompok</h2>
//       <hr />
//       <div style={{ textAlign: "left", margin: "20px 0" }}>
//         <p>
//           <strong>Nama:</strong> Prayoga San Arisakti
//         </p>
//         <p>
//           <strong>NIM:</strong> 103012480037
//         </p>
//         <p>
//           <strong>Nama:</strong> Bimo Ghanis Surya Putra Wibowo
//         </p>
//         <p>
//           <strong>NIM:</strong> 103012480036
//         </p>
//         <p>
//           <strong>Nama:</strong> M. Agung Isra Narwin
//         </p>
//         <p>
//           <strong>NIM:</strong> 103012480038
//         </p>
//         <p>
//           <strong>Nama:</strong> Muhammad Nubli Zulfahmi
//         </p>
//         <p>
//           <strong>NIM:</strong> 103012400121
//         </p>
//       </div>

//       <button className="btn-nav" onClick={() => navigate("/calculator")}>
//         Buka Kalkulator
//       </button>
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useState } from "react"; // Tambah useState & useEffect
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [serverIP, setServerIP] = useState("Loading IP..."); // Variabel buat simpan IP

  // Pas halaman dibuka, minta IP ke server.js
  useEffect(() => {
    fetch("/api/get-ip")
      .then((res) => res.json())
      .then((data) => setServerIP(data.ip))
      .catch(() => setServerIP("Gagal ambil IP"));
  }, []);

  return (
    <div className="container">
      <h2>Tugas Kelompok</h2>
      <div
        style={{
          backgroundColor: "#ffebee",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid red",
          marginBottom: "20px",
        }}
      >
        <p style={{ margin: 0, fontWeight: "bold", color: "#d32f2f" }}>
          Served by AWS Instance IP: {serverIP}
        </p>
      </div>

      <hr />
      <div style={{ textAlign: "left", margin: "20px 0" }}>
        {/* ... (Sisa kodingan nama kelompok kamu tetap sama di sini) ... */}
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

      {/* Tambahin tombol buat ke kalkulator kalau belum ada */}
      <button onClick={() => navigate("/calculator")}>Buka Kalkulator</button>
    </div>
  );
}

export default Home;
