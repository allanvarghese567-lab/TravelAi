const express = require('express');

const swaggerUi =
  require('swagger-ui-express');

const app = express();

const port =
  process.env.PORT || 3000;

const swaggerDocument = {

  openapi: '3.0.0',

  info: {

    title: 'Travel AI Platform',

    version: '1.0.0'

  },

  paths: {

    '/': {

      get: {

        summary: 'Health Check',

        responses: {

          200: {

            description: 'Success'

          }

        }

      }

    }

  }

};

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.get('/', (req, res) => {

  res.json({

    success: true,

    message:
      'Travel AI Platform Running'

  });

});

app.listen(port, () => {

  console.log(
    `Server running on ${port}`
  );

});
