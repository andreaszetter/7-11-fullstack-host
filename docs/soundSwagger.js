/**
 * @swagger
 * tags:
 *   name: Sound
 *   description: Sound level monitoring
 */

/**
 * @swagger
 * /sound:
 *   get:
 *     summary: Fetch sound level data
 *     tags: [Sound]
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
 *                       soundLevel:
 *                         type: string
 *                         example: "45.0"
 *
 *   post:
 *     summary: Create sound level data
 *     tags: [Sound]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               soundLevel:
 *                 type: string
 *                 example: "45.0"
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
 *                     soundLevel:
 *                       type: string
 *                       example: "45.0"
 */