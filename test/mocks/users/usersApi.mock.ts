import { UsersRepository } from '../../../src/domain/repositories/user.repository';

export const getMethodMock = jest.fn();

export const mockUsersApi = {
  get: getMethodMock,
} as UsersRepository;
