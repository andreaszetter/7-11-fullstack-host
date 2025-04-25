/**
 * @swagger
 * tags:
 *   name: Pulse
 *   description: Pulse monitoring
 */

/**
 * @swagger
 * /pulse:
 *   get:
 *     summary: Fetch pulse data
 *     tags: [Pulse]
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
 *                       pulse:
 *                         type: integer
 *                         example: 75
 *
 *   post:
 *     summary: Create pulse data
 *     tags: [Pulse]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pulse:
 *                 type: integer
 *                 example: 75
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
 *                     pulse:
 *                       type: integer
 *                       example: 75
 */