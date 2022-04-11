import { GetUsersUseCase } from './getUsers.usecase';
import { mockUsersApi } from '../../../../test/mocks/users/usersApi.mock';
import { mockUser } from '../../../../test/mocks/users/users.mock';

describe('getUsers', () => {
	let getUsersUseCase: GetUsersUseCase;

	beforeEach(() => {
		getUsersUseCase = new GetUsersUseCase(
			mockUsersApi,
		);
	})

	test('should return an array of users', async () => {
		(mockUsersApi.get as jest.Mock).mockReturnValue([mockUser]);
		const users = await getUsersUseCase.run();

		expect(users).toHaveLength(1);
	});
});