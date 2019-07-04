import { IUser } from './user.interface';

export interface JwtPayload {
  user: IUser;
  token: string;
}
