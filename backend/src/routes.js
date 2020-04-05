const { Router } = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const GeneralController = require('./controllers/GeneralController');

const routes = Router();

routes.get('/operadoras', GeneralController.operatorIndex);
routes.get('/contatos', GeneralController.contactIndex);
routes.post('/contato', celebrate({
  [Segments.BODY]: Joi.object().keys({
    nome: Joi.string().required(),
    telefone: Joi.string().required(),
    operadora: Joi.required(),
  }),
}), GeneralController.createContact);
routes.use((req, res) => { res.status(404).send('Não foi possível encontrar o destino desejado, desculpe.'); });

module.exports = routes;