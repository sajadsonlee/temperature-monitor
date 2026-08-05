import 'dotenv/config';

function required(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Variável obrigatória ausente: ${name}`);
  return value;
}

function port(name) {
  const value = Number(required(name));
  if (!Number.isInteger(value) || value < 1 || value > 65535) {
    throw new Error(`Porta inválida: ${name}`);
  }
  return value;
}

const trustProxy = Number(process.env.TRUST_PROXY ?? 0);
if (!Number.isInteger(trustProxy) || trustProxy < 0) {
  throw new Error('TRUST_PROXY deve ser um inteiro não negativo');
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  host: process.env.HOST ?? '127.0.0.1',
  port: port('PORT'),
  db: {
    host: required('DB_HOST'),
    port: port('DB_PORT'),
    name: required('DB_NAME'),
    user: required('DB_USER'),
    password: required('DB_PASSWORD')
  },
  frontendOrigin: process.env.FRONTEND_ORIGIN ?? 'http://localhost:3000',
  trustProxy
};