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
 *     summary: Fetch all pulse data
 *     tags: [Pulse]
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
 *                   pulse:
 *                     type: integer
 *                   created_at:
 *                     type: string
 *                     format: date-time

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
 *               device_id:
 *                 type: string
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
 *                 device_id:
 *                   type: string
 *                 pulse:
 *                   type: integer
 *                 created_at:
 *                   type: string
 *                   format: date-time

 * /pulse/{id}/latest-data:
 *   get:
 *     summary: Get latest pulse data for a specific device
 *     tags: [Pulse]
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
 *                 latest_pulse:
 *                   type: integer
 *                 latest_timestamp:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: No data found for the specified device

 * /pulse/{id}/trend:
 *   get:
 *     summary: Get the latest 50 pulse values for a specific device
 *     tags: [Pulse]
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
 *                       pulse:
 *                         type: integer
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *       404:
 *         description: No trend data found for the specified device
 */
