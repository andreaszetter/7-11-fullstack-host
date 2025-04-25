/**
 * @swagger
 * tags:
 *   name: AirQuality
 *   description: Air Quality monitoring
 */

/**
 * @swagger
 * /airQuality:
 *   get:
 *     summary: Fetch air quality data
 *     tags: [AirQuality]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: values were fetched
 *                 value:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         format: date-time
 *                       pm1:
 *                         type: string
 *                       pm2:
 *                         type: string
 *                       pm10:
 *                         type: string
 *                       tvoc:
 *                         type: string
 *
 *   post:
 *     summary: Create air quality data
 *     tags: [AirQuality]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pm1:
 *                 type: string
 *               pm2:
 *                 type: string
 *               pm10:
 *                 type: string
 *               tvoc:
 *                 type: string
 *     responses:
 *       201:
 *         description: Data created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: values fetched
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: date-time
 *                     pm1:
 *                       type: string
 *                     pm2:
 *                       type: string
 *                     pm10:
 *                       type: string
 *                     tvoc:
 *                       type: string
 */