import { Router } from 'express';
import {
  registrarUsuario,
  getUsuarios,
  getUsuarioPorId,
  editarUsuario,
  eliminarUsuario,
} from '../controllers/usuarioController';

const router = Router();

router.post('/usuarios/register', registrarUsuario);
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id', getUsuarioPorId);
router.put('/usuarios/:id', editarUsuario);
router.delete('/usuarios/:id', eliminarUsuario);

export default router;
