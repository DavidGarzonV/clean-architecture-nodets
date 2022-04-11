import { File } from './../../src/domain/entities/file.entity';

const imageTest = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB
      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`.replace(/\n/gm, ' ');

export const mockFile = (nameImage: string): File => {
  const dataImage = imageTest.match(/^data:([A-Za-z-+/]+);base64,(.+)$/)!;
  const imageData = 2;

  return {
    buffer: Buffer.from(dataImage[imageData], 'base64'),
    fieldname: nameImage,
    mimetype: dataImage[1],
		size: 5040,
		encoding: 'base64',
		originalname: 'upload.png'
  };
};

export const mockImageBuffer = () => {
  const dataImage = imageTest.match(/^data:([A-Za-z-+/]+);base64,(.+)$/)!;
  const imageData = 2;

  return Buffer.from(dataImage[imageData], 'base64');
};