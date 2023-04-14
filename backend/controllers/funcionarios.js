const funcionario = require('../models/funcionarios.js')

exports.getFuncionarios = async(req, res) => {
    try {
        const funcionarios = await funcionario.FuncionarioModel.find();
        res.json(funcionarios)
    }catch(error) {
        res.status(500).json({ message: error.message });

    }
}

exports.getoneFuncionario = async (req, res) => {   
  try {;
    res.status(201).json(await funcionario.FuncionarioModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createFuncionario = async (req, res) => {   
    try {;
      res.status(201).json(await funcionario.FuncionarioModel.create(req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updateFuncionario = async (req, res) => {   
    try {;
      res.status(201).json(await funcionario.FuncionarioModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deleteFuncionario = async (req, res) => {   
    try {;
      res.status(201).json(await funcionario.FuncionarioModel.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
