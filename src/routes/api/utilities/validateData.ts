import path from 'path';
import { promises as fsPromises } from 'fs';

const fpath = path.resolve(__dirname, '../../../../assets/full');

async function validateData(
  _name: string,
  _width: string,
  _height: string
): Promise<null | string> {
  let msg: null | string = null;

  if (!_name) {
    return (msg = 'You must enter a name!');
  }

  if ((await isPicturesExists(_name)) === false) {
    const available: string = (await getAvailablePictures()).join(' |or| ');
    return `<h1>Available pictures = ${available} </h1>`;
  }

  if (!_height) {
    msg = 'You must enter height!';
  } else if (+_height < 1) {
    msg = 'height must be positive number!';
  } else if (Number.isNaN(+_height)) {
    msg = 'height must be number!';
  }

  if (!_width) {
    msg = 'You must enter width!';
  } else if (+_width < 1) {
    msg = 'width must be positive number!';
  } else if (Number.isNaN(+_width)) {
    msg = 'width must be a number!';
  }

  return msg;
}

async function isPicturesExists(_name = ''): Promise<boolean> {
  if (!_name) return false;
  return (await getAvailablePictures()).includes(_name);
}

async function getAvailablePictures(): Promise<string[]> {
  const AvailablePictures: string[] = (await fsPromises.readdir(fpath)).map(
    (picturesName: string): string => picturesName.split('.')[0]
  );
  return AvailablePictures;
}
export default validateData;
