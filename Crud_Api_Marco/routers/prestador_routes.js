import express from "express"
import {getPrestadores, createPrestadores, updatePrestadores, deletePrestadores} from "../controllers/prestador_controller.js" 

const router = express.Router()

router.get('/prestadores', getPrestadores)
router.post('/prestadores', createPrestadores)
router.put('/prestadores/:nome', updatePrestadores);
router.delete('/prestadores/:nome', deletePrestadores);

export default router