/**
 * @swagger
 * tags:
 *   name: SoundLevel
 *   description: Sound level monitoring
 */

/**
 * @swagger
 * /soundlevel:
 *   get:
 *     summary: Fetch all sound level data
 *     tags: [SoundLevel]
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
 *                   sound:
 *                     type: integer
 *                   created_at:
 *                     type: string
 *                     format: date-time

 *   post:
 *     summary: Create sound level data
 *     tags: [SoundLevel]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               device_id:
 *                 type: string
 *               sound:
 *                 type: integer
 *                 example: 70
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
 *                 sound:
 *                   type: integer
 *                 created_at:
 *                   type: string
 *                   format: date-time

 * /soundlevel/{id}/latest-data:
 *   get:
 *     summary: Get latest sound data for a specific device
 *     tags: [SoundLevel]
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
 *                 latest_sound:
 *                   type: integer
 *                 latest_timestamp:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: No data found for the specified device

 * /soundlevel/{id}/trend:
 *   get:
 *     summary: Get the latest 50 sound values for a specific device
 *     tags: [SoundLevel]
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
 *                       sound:
 *                         type: integer
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *       404:
 *         description: No trend data found for the specified device
 */
