import {
  getPicturePath,
  isPictureInThumb,
  createPictureThumb
} from '../routes/api/pictures';
import path from 'path';

const thpath = path.resolve(__dirname, '../../assets/thumb');
const fpath = path.resolve(__dirname, '../../assets/full');

describe('get picture path', (): void => {
  it('send invalid data', async (): Promise<void> => {
    const result: null | string = await getPicturePath('', '', '');
    expect(result).toBeNull();
  });

  it('send invalid name', async (): Promise<void> => {
    const result: null | string = await getPicturePath('test', '200', '200');
    expect(result).toBeNull();
  });

  it('send invalid picture width', async (): Promise<void> => {
    const result: null | string = await getPicturePath('test', 'aaa', '200');
    expect(result).toBeNull();
  });

  it('send invalid picture height', async (): Promise<void> => {
    const result: null | string = await getPicturePath('test', '200', 'aaa');
    expect(result).toBeNull();
  });

  it('send valid picture data', async (): Promise<void> => {
    const result: null | string = await getPicturePath('cat', '200', '200');
    expect(result).toEqual(path.resolve(thpath, 'cat_200X200.jpg'));
  });

  it('send valid picture data without width and height', async (): Promise<void> => {
    const result: null | string = await getPicturePath('cat', '', '');
    expect(result).toEqual(path.resolve(fpath, 'cat.jpg'));
  });
});

describe('check if Picture is in thumb', (): void => {
  it('check picture already exists', async (): Promise<void> => {
    const result: boolean = await isPictureInThumb('cat', '200', '200');
    expect(result).toBeTrue();
  });

  it("check picture doesn't exists", async (): Promise<void> => {
    const result: boolean = await isPictureInThumb('anyName', '400', '400');
    expect(result).toBeFalse();
  });

  it('check picture with wrong data', async (): Promise<void> => {
    const result: boolean = await isPictureInThumb('anyName', 'aaa', 'bbb');
    expect(result).toBeFalse();
  });
  it("check if don't send any picture data", async (): Promise<void> => {
    const result: boolean = await isPictureInThumb('', '', '');
    expect(result).toBeFalse();
  });
});

describe('image processing with sharp', (): void => {
  it('create Picture Thumb with name, width and height', async (): Promise<void> => {
    const result: null | string = await createPictureThumb('cat', '200', '200');
    expect(result).toBeNull();
  });

  it('send invalid data to create Picture Thumb', async (): Promise<void> => {
    const result: null | string = await createPictureThumb('', '', '');
    expect(result).toEqual('Error');
  });

  it('send only Picture name', async (): Promise<void> => {
    const result: null | string = await createPictureThumb('cat', '', '');
    expect(result).toEqual('Error');
  });

  it('send invalid width', async (): Promise<void> => {
    const result: null | string = await createPictureThumb('cat', 'aaa', '200');
    expect(result).toEqual('Error');
  });
  it('send invalid height', async (): Promise<void> => {
    const result: null | string = await createPictureThumb('cat', '200', 'aaa');
    expect(result).toEqual('Error');
  });
});
