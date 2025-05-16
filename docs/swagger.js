import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API for Air Quality Monitoring',
    },
    servers: [
      {
        url: 'http://localhost:8000/api',
      },
    ],
  },
  apis: ['./docs/*.js'], // Sökväg till dina Swagger-dokumentationsfiler
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

export default setupSwagger;