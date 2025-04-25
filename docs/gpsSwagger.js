/**
 * @swagger
 * tags:
 *   name: GPS
 *   description: GPS data monitoring
 */

/**
 * @swagger
 * /gps:
 *   get:
 *     summary: Fetch GPS data
 *     tags: [GPS]
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
 *                       latitude:
 *                         type: string
 *                         example: "59.3293"
 *                       longtitude:
 *                         type: string
 *                         example: "18.0686"
 *
 *   post:
 *     summary: Create GPS data
 *     tags: [GPS]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               latitude:
 *                 type: string
 *                 example: "59.3293"
 *               longtitude:
 *                 type: string
 *                 example: "18.0686"
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
 *                   example: values received
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: date-time
 *                     latitude:
 *                       type: string
 *                       example: "59.3293"
 *                     longtitude:
 *                       type: string
 *                       example: "18.0686"
 */