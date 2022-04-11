import express from 'express';
import OfferRoutes from './offers/offer.routes';
import UsersRoutes from './users/users.routes';

const apiPathVersion = '/api/v1';

export const init = (app: express.Express) => {
  app.use(`${apiPathVersion}/offers`, [], OfferRoutes);
  app.use(`${apiPathVersion}/users`, [], UsersRoutes);
  app.all('*', (_req, res) => res.status(404).send({ data: 'Route not found' }));
};
