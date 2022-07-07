import { db } from '../controllers/mongo.js'

async function validateUser(req, res, next) {
  const { authorization } = req.headers;

  const token = authorization?.replace('Bearer ', '');
  const usuario = await db.collection('usuario').findOne({ token });

  if (!usuario) {
    return res.sendStatus(401);
  }

  res.locals.usuario = usuario;

  next();
}

export default validateUser;