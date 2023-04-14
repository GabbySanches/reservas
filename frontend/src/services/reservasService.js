import axios from 'axios';
/*
const api = axios.create({
  baseURL: 'http://localhost:5000',
});
*/

var reservasService = {
  getReservas: async () => {
    var rsvsAPI = axios.get('http://localhost:2527/apirsvs/');
    return await rsvsAPI;
  },
  getOneReservas: async (id) => {
    var rsvsAPI1 = await axios.get('http://localhost:2527/apirsvs/unica/'+ id);
    return rsvsAPI1;
  },
  postReservas: async (sala) =>{
    var sala = await axios.post('http://localhost:2527/apirsvs/', sala);
    return sala;
  },
  updtReservas: async (id, sala) =>{
    var Rsvsupdt = await axios.put('http://localhost:2527/apirsvs/'+ id, sala);
    return Rsvsupdt;
  },
  deltReservas: async (id) =>{
    var cancrsvs = await axios.put('http://localhost:2527/apirsvs/cancelar/'+ id);
    return cancrsvs;
  }
};

export default reservasService;