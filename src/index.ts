/* eslint-disable  @typescript-eslint/no-explicit-any */
import express, { NextFunction, Request, Response } from 'express';
import routes from './routes';
import log from './utillties/logger';
const PORT = 3000;
const app = express();
app.use('', log, routes);
app.listen(PORT, () => {
  console.log(`Server is starting at port:${PORT}`);
});
app.use('', log, routes);
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(200).send('<h1>Working Successfully</h1>');
});
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.send(`<h1>${error.message}</h1>`);
});
export default app;
