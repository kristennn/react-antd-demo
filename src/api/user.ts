import { http } from '../utils/request';

export type User = {
  username: string;
  password: string;
};

export const login = async (user: User): Promise<User> => {
  return await http.post('/login', user);
};
