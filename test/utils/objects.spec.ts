import { assignObject } from '../../src/infrastructure/utils/objects';

describe('infrastructure/utils/object', () => {
	test('should return a deep copied object', () => {
		const object1 = {
			a: 1,
			b: 'b',
			c: false,
		};

		const object2 = {
			a: undefined,
			b: 'c',
			d: () => 'test',
		};

		const result = assignObject(object1, object2);
		expect(result).toEqual({
			...object2,
			...object1,
		})
	});
})