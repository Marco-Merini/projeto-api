import Prestadores from "../models/prestador_model.js"

//busca todos os prestadores registrados na tabela prestador
// por meio do método findAll
export const getPrestadores = async (req, res) => {
    try {
        const prestadores = await Prestadores.findAll()
        res.send(prestadores)
    } catch (e) {
        console.log("Erro ao acessar a tabela Prestadores",e)
    }
}

// inseri registros na tabela prestador por meio do 
//método create
export const createPrestadores = async (req, res) => {
    try {
        await Prestadores.create(req.body)
        res.json({
            "message":"Um novo registro de prestador foi inserido no Banco de dados"
        })
    } 
    catch (e) {
        console.log("Erro ao Inserir um novo prestador", e)
    }
}


//atualiza registros da tabela prestador por meio
// da função update
export const updatePrestadores = async (req, res) => {
  try {
    await Prestadores.update(req.body, {
      where: {
        nome_prestador: req.params.nome
      }
    });
    res.json({
      "message": "O Prestador " + req.params.nome + " foi atualizado"
    });
  } catch (e) {
    console.log("Erro ao atualizar a Cadastro Prestadores", e);
  }
}

export const deletePrestadores = async (req, res) => {
  try {
    await Prestadores.destroy({
      where: {
        nome_prestador: req.params.nome
      }
    });
    res.json({
      "message": "O Prestador " + req.params.nome + " Foi excluído do Banco de Dados"
    });
  } catch (e) {
    console.log("Erro ao excluir registro Prestadores", e);
  }
}