import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class AutorController {

    static async listarAutores (req, res) {
        try {
          const listaAutores = await autor.find({});
          res.status(200).json(listaAutores);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} falha na requisição` });
        }
    };

    static async listarAutorPorId (req, res) {
        try {
          const id = req.params.id;  
          const autorEncontrado = await autor.findById(id);
          res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} falha na requisição do autor` });
        }
    };

    static async cadastrarAutores (req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "criado com sucesso", autor: novoAutor });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autores` });
        }
    };
   
    static async atualizarAutores (req, res) {
        try {
          const id = req.params.id;  
          await autor.findByIdAndUpdate(id, req.body);
          res.status(200).json({ message: "autor atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} falha na atualização` });
        }
    };

    static async excluirAutor (req, res) {
        try {
          const id = req.params.id;  
          await autor.findByIdAndDelete(id);
          res.status(200).json({ message: "autor deletado com sucesso!" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} falha na exclusão` });
        }
    };
};

export default AutorController;