const cliente = require('../models/clientes.js')

exports.getClientes = async(req, res) => {
    try {
        const clientes = await cliente.ClienteModel.find();
        res.json(clientes)
    }catch(error) {
        res.status(500).json({ message: error.message });

    }
}

exports.getoneCliente = async (req, res) => {   
  try {;
    res.status(201).json(await cliente.ClienteModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createCliente = async (req, res) => {   
    try {;
      res.status(201).json(await cliente.ClienteModel.create(req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updateCliente = async (req, res) => {   
    try {;
      res.status(201).json(await cliente.ClienteModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deleteCliente = async (req, res) => {   
    try {;
      res.status(201).json(await cliente.ClienteModel.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
