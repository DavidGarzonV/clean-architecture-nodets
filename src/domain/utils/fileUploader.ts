import { File } from './../entities/file.entity';

export interface FileUploader {
  upload: (files: File | File[]) => Promise<string | string[]>;
  delete: (fileName: string) => Promise<boolean>;
}
