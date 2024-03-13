import { expressjwt } from 'express-jwt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { UserServices } from '../services/user.services';

const secret = Buffer.from('Zfds51d51s874r1s21rs2r1s2r1/s6/sf1s5f15', 'base64');

export const authMiddleware = expressjwt({
  algorithms: ['HS256'],
  credentialsRequired: false,
  secret,
});

export async function handleLogin(req: Request, res: Response) {
  const { emailOrName, password } = req.body;
  const user = await UserServices.getUserByEmail(emailOrName);
  if (!user || user.password !== password) {
    res.sendStatus(401);
  } else {
    const claims = { sub: user.id, email: user.email };
    const token = jwt.sign(claims, secret);
    res.send({ token });
  }
}
