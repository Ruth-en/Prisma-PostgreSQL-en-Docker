import { Request, Response } from 'express';
import * as usuarioService from '../services/usuarioService';

export const registrarUsuario = async (req: Request, res: Response) => {
  const { nombre, email, password } = req.body;
  try {
    const nuevoUsuario = await usuarioService.crearUsuario(nombre, email, password);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};

export const getUsuarios = async (_req: Request, res: Response) => {
  const usuarios = await usuarioService.obtenerUsuarios();
  res.json(usuarios);
};

export const getUsuarioPorId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuario = await usuarioService.obtenerUsuarioPorId(id);
  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json(usuario);
};

export const editarUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const usuario = await usuarioService.actualizarUsuario(id, data);
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
};

export const eliminarUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await usuarioService.eliminarUsuario(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
};
