import { Router, Request, Response, NextFunction } from 'express';
import path from 'path';
import sharp from 'sharp';
import { promises as fsPromises } from 'fs';

import validateData from './utilities/validateData';

const pictures: Router = Router();
const fpath = path.resolve(__dirname, '../../../assets/full');
const thpath = path.resolve(__dirname, '../../../assets/thumb');

pictures.get(
  '',
  async (request: Request, response: Response, next: NextFunction) => {
    let SendToUser: null | string;

    const pictureName: string = request.query.name as string;
    const pictureWidth: string = request.query.width as string;
    const pictureHeight: string = request.query.height as string;

    SendToUser = await validateData(pictureName, pictureWidth, pictureHeight);
    if (SendToUser)
      return response
        .status(400)
        .send(`<h1 style="text-align: center; color:red;">${SendToUser}</h1>`);

    if (
      (await isPictureInThumb(pictureName, pictureWidth, pictureHeight)) ===
      false
    ) {
      SendToUser = await createPictureThumb(
        pictureName,
        pictureWidth,
        pictureHeight
      );
    }
    if (SendToUser)
      return response
        .status(400)
        .send(`<h1 style="text-align: center; color:red;">${SendToUser}</h1>`);

    SendToUser = await getPicturePath(pictureName, pictureWidth, pictureHeight);
    SendToUser
      ? response.sendFile(SendToUser)
      : response
          .status(400)
          .send('<h1 style="text-align: center; color:red;">Error</h1>');
  }
);

/**
 * get picture path
 * @param _name name of picture
 * @param _width width of picture
 * @param _height height of picture
 * @returns path of Picture or null if Picture isn't exists
 */
export async function getPicturePath(
  _name: string,
  _width: string,
  _height: string
): Promise<null | string> {
  let picturePath: string;

  if (_width && _height) {
    picturePath = path.resolve(thpath, `${_name}_${_width}X${_height}.jpg`);
  } else {
    picturePath = path.resolve(fpath, `${_name}.jpg`);
  }

  try {
    await fsPromises.access(picturePath);
    return picturePath;
  } catch {
    return null;
  }
}

/**
 * check if Picture is in Thumb or not
 * @param _name name of picture
 * @param _width width of picture
 * @param _height height of picture
 * @returns true if Picture is in Thumb or false if not
 */
export async function isPictureInThumb(
  _name: string,
  _width: string,
  _height: string
): Promise<boolean> {
  try {
    await fsPromises.access(
      path.resolve(thpath, `${_name}_${_width}X${_height}.jpg`)
    );
    return true;
  } catch {
    return false;
  }
}

/**
 * add Picture to Thumb
 * @param _name name of picture
 * @param _width width of picture
 * @param _height height of picture
 * @returns null if Picture created or error if some thing happened
 */
export async function createPictureThumb(
  _name: string,
  _width: string,
  _height: string
): Promise<null | string> {
  try {
    await sharp(path.resolve(fpath, `${_name}.jpg`))
      .resize(+_width, +_height)
      .toFormat('jpg')
      .toFile(path.resolve(thpath, `${_name}_${_width}X${_height}.jpg`));
    return null;
  } catch {
    return 'Error';
  }
}

export default pictures;
