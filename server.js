import express from "express";
import path from "path";
import os from "os";
import { fileURLToPath } from "url";

// --- BAGIAN INI UNTUK MENGGANTIKAN __dirname ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// -----------------------------------------------

const app = express();
const PORT = 3000;

// Fungsi cari IP Server
function getServerIP() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
  return "Localhost / IP Not Found";
}

// 1. Endpoint buat React minta IP Server
app.get("/api/get-ip", (req, res) => {
  res.json({ ip: getServerIP() });
});

// 2. Sajikan file React yang sudah di-BUILD (folder dist)
app.use(express.static(path.join(__dirname, "dist")));

// 3. Apapun halaman yang dibuka, arahkan ke index.html
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server nyala di port ${PORT}`);
});
