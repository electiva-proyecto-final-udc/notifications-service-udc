// src/services/userService.js
const { httpClient } = require("../../config/httpClient");

const userServiceUrl = process.env.USER_SERVICE_URL;

if (!userServiceUrl) {
  console.error("ERROR: USER_SERVICE_URL no está definido");
}

/**
 * Cliente genérico para consultar al micro de usuarios
 */
async function fetchUser(path, id) {
  try {
    const url = `${userServiceUrl}/user-service/v1/${path}/${id}`;
    const response = await httpClient.get(url);
    console.log(`Consultando usuarios en: ${path}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error consultando usuarios en: ${path}/${id}`, error.message);
    throw error;
  }
}

/**
 * Obtener CLIENTE por ID
 */
async function getClientById(id) {
  return fetchUser("clients", id);
}

/**
 * Obtener TÉCNICO por ID
 */
async function getTechnicianById(id) {
  return fetchUser("technician", id);
}

module.exports = {
  getClientById,
  getTechnicianById,
};
