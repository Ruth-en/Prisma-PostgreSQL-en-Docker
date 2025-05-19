import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const crearUsuario = async (nombre: string, email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return prisma.usuario.create({
    data: {
      nombre,
      email,
      password: hashedPassword,
    },
  });
};

export const obtenerUsuarios = () => prisma.usuario.findMany();

export const obtenerUsuarioPorId = (id: string) => prisma.usuario.findUnique({ where: { id } });

export const actualizarUsuario = (id: string, data: { nombre?: string; email?: string }) => {
  return prisma.usuario.update({ where: { id }, data });
};

export const eliminarUsuario = (id: string) => prisma.usuario.delete({ where: { id } });
