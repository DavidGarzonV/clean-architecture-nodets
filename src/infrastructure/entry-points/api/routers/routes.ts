import express from 'express';
import OfferRoutes from './offers/offer.routes';

const apiPathVersion = '/api/v1/offers';

export const init = (app: express.Express) => {
  app.use(apiPathVersion, [], OfferRoutes);
  app.all('*', (_req, res) => res.status(404).send({ data: 'Route not found' }));
};
