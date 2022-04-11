import { promises as fs } from 'fs';
import { File } from './../../domain/entities/file.entity';
import config from '../../application/config/config';
import { FileUploader } from '../../domain/utils/fileUploader';


export class LocalFileUploader implements FileUploader {
	private async _uploadFile(file: File) {
		const uploadPath = `${config.get('uploadpath')}/${file.originalname}`;
		await fs.writeFile(uploadPath, file.buffer);
		return uploadPath;
	}

	upload(files: File | File[]): Promise<string | string[]> {
		if (Array.isArray(files)) {
			return Promise.all(files.map(f => this._uploadFile(f)))
		}

		return this._uploadFile(files);
	}

	async delete(fileName: string): Promise<boolean> {
		await fs.rm(fileName);
		return Promise.resolve(true);
	}
}