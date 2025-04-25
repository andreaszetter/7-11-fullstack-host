/**
 * @swagger
 * tags:
 *   name: Temperature
 *   description: Temperature monitoring
 */

/**
 * @swagger
 * /temperature:
 *   get:
 *     summary: Fetch temperature data
 *     tags: [Temperature]
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
 *                       temperature:
 *                         type: string
 *                         example: "25.5"
 *
 *   post:
 *     summary: Create temperature data
 *     tags: [Temperature]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               temperature:
 *                 type: string
 *                 example: "25.5"
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
 *                     temperature:
 *                       type: string
 *                       example: "25.5"
 */