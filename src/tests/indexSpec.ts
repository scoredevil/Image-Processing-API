import supertest, { SuperTest, Test, Response } from 'supertest';
import app from '../index';

const request: SuperTest<Test> = supertest(app);

describe('check Endpoint API', (): void => {
  describe('guidance Endpoint', (): void => {
    it('GET /', async (): Promise<void> => {
      const response: Response = await request.get('/');
      expect(response.status).toBe(200);
    });
  });

  describe('Not send pictures name', () => {
    it('GET /pictures', async (): Promise<void> => {
      const response: Response = await request.get('/pictures');
      expect(response.status).toBe(400);
    });
  });

  describe("send doesn't exist pictures name", () => {
    it('GET /pictures?name=anyName', async (): Promise<void> => {
      const response: Response = await request.get('/pictures?name=anyName');
      expect(response.status).toBe(400);
    });
  });

  describe("don't send pictures width", () => {
    it('GET /pictures?name=cat&height=300', async (): Promise<void> => {
      const response: Response = await request.get(
        '/pictures?name=cat&height=300'
      );
      expect(response.status).toBe(400);
    });
  });

  describe('send string pictures width', () => {
    it('GET /pictures?name=cat&width=aaa', async (): Promise<void> => {
      const response: Response = await request.get(
        '/pictures?name=cat&width=aaa'
      );
      expect(response.status).toBe(400);
    });
  });

  describe('send negative pictures width', () => {
    it('GET /pictures?name=cat&width=-10', async (): Promise<void> => {
      const response: Response = await request.get(
        '/pictures?name=cat&height=-10'
      );
      expect(response.status).toBe(400);
    });
  });

  describe("don't send pictures height", () => {
    it('GET /pictures?name=cat&width=300', async (): Promise<void> => {
      const response: Response = await request.get(
        '/pictures?name=cat&width=300'
      );
      expect(response.status).toBe(400);
    });
  });

  describe('send string pictures height', () => {
    it('GET /pictures?name=cat&height=aaa', async (): Promise<void> => {
      const response: Response = await request.get(
        '/pictures?name=cat&height=aaa'
      );
      expect(response.status).toBe(400);
    });
  });

  describe('send negative pictures height', () => {
    it('GET /pictures?name=cat&height=-10', async (): Promise<void> => {
      const response: Response = await request.get(
        '/pictures?name=cat&height=-10'
      );
      expect(response.status).toBe(400);
    });
  });

  describe('send pictures without width and height', () => {
    it('GET /pictures?name=cat', async (): Promise<void> => {
      const response: Response = await request.get('/pictures?name=cat');
      expect(response.status).toBe(400);
    });
  });

  describe('send valid pictures data', () => [
    it('GET /pictures?name=cat&width=200&height=200', async () => {
      const response: Response = await request.get(
        '/pictures?name=cat&width=200&height=200'
      );
      expect(response.status).toBe(200);
    })
  ]);
});
