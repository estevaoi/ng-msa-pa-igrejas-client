/**
 *
 * @author PabloFlanmarion
 */
const axios = require("axios");
const config = require("../config/config");

/**
 * Configuração para Client do Axios.
 */
const api = axios.create({
  baseURL: config.BASE_URL,
  responseType: "json",
  maxRedirects: 5,
});

class RegiaoClient {}

/**
 * Metodo Client para recuperar todos registros na tabela Regiões.
 *
 * @param {*} perfil
 * @returns Promises
 */
exports.getAllRegiao = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = (await api.get(`/v1/regiao`, config)).data;
  return response;
};

/**
 * Metodo Client para recuperar um registro na tabela Regiões, dado um ID.
 *
 * @param {*} token
 * @param {*} id
 * @returns
 */
exports.getRegiao = async (token, id) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = (await api.get(`/v1/regiao/${id}`, config)).data;
  return response;
};

/**
 * Metodo Client para inserir registros na tabela Regiões.
 *
 * @param {*} token
 * @param {*} payloadRequest
 * @returns Promises
 */
exports.createRegiao = async (token, payloadRequest) => {
  //console.log(payloadRequest);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = (await api.post(`/v1/regiao`, payloadRequest, config)).data;
  return response;
};

/**
 * Metodo Client para deletar um registro na tabela Regiões, dado um ID.
 *
 * @param {*} token
 * @param {*} id
 * @returns
 */
exports.deleteRegiao = async (token, id) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = (await api.delete(`/v1/regiao/${id}`, config)).data;
  return response;
};

/**
 * Metodo Client para atualizar registros na tabela Regiões,dado um ID.
 *
 * @param {*} token
 * @param {*} payloadRequest
 * @returns Promises
 */
exports.updateRegiao = async (token, payloadRequest) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = (await api.put(`/v1/regiao/`, payloadRequest, config)).data;
  return response;
};
