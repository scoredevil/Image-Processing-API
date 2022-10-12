import express from 'express';

import images from './api/pictures';

const routes = express.Router();

routes.use('/pictures', images);

export default routes;
