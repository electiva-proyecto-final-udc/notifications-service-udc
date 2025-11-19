const axios = require("axios");

let globalToken = null;

function setToken(token) {
  globalToken = token;
}

// Instancia reutilizable para todos los micros
const httpClient = axios.create({
  timeout: 8000,
});

// Interceptor para INYECTAR el token automáticamente
httpClient.interceptors.request.use(
  (config) => {
    if (globalToken) {
      config.headers["Authorization"] = `Bearer ${globalToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

module.exports = { httpClient, setToken };
