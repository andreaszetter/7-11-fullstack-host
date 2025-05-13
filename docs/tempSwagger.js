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
 *     summary: Fetch all temperature data
 *     tags: [Temperature]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   device_id:
 *                     type: string
 *                   temperature:
 *                     type: string
 *                   created_at:
 *                     type: string
 *                     format: date-time

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
 *               device_id:
 *                 type: string
 *               temperature:
 *                 type: string
 *     responses:
 *       201:
 *         description: Data created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 device_id:
 *                   type: string
 *                 temperature:
 *                   type: string
 *                 created_at:
 *                   type: string
 *                   format: date-time

 * /temperature/{id}/latest-data:
 *   get:
 *     summary: Get latest temperature data for a specific device
 *     tags: [Temperature]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Device ID to fetch the latest data
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with latest data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 device_id:
 *                   type: string
 *                 latest_temperature:
 *                   type: string
 *                 latest_timestamp:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: No data found for the specified device

 * /temperature/{id}/trend:
 *   get:
 *     summary: Get the latest 50 temperature values for a specific device
 *     tags: [Temperature]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Device ID to fetch the trend data
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response with trend data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 device_id:
 *                   type: string
 *                 trend:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       temperature:
 *                         type: string
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *       404:
 *         description: No trend data found for the specified device
 */
