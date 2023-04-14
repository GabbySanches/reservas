import axios from 'axios';
/*
const api = axios.create({
  baseURL: 'http://localhost:5000',
});
*/

var funcionariosService = {
  getFuncionarios: async () => {
    var funcAPI = axios.get('http://localhost:2527/apifuncs/');
    return await funcAPI;
  },
  getOnefuncionarios: async (id) => {
    var funcAPI1 = await axios.get('http://localhost:2527/apifuncs/'+ id);
    return funcAPI1;
  },
  postFuncionarios: async (sala) =>{
    var sala = await axios.post('http://localhost:2527/apifuncs/', sala);
    return sala;
  },
  updtFuncionarios: async (id, sala) =>{
    var funcupdt = await axios.put('http://localhost:2527/apifuncs/'+ id, sala);
    return funcupdt;
  },
  deltFuncionarios: async (id) =>{
    var deltfunc = await axios.delete('http://localhost:2527/apifuncs/'+ id);
    return deltfunc;
  }
};

export default funcionariosService;