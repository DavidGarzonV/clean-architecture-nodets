import { FileUploader } from '../../../src/domain/utils/fileUploader';

export const deleteMethodMock = jest.fn();
export const uploadMethodMock = jest.fn();

export const mockFileUploader = {
	delete: deleteMethodMock,
	upload: uploadMethodMock,
} as FileUploader;