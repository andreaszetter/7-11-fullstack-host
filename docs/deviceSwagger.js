/**
 * @swagger
 * tags:
 *   name: Device
 *   description: Device monitoring
 */

/**
 * @swagger
 * /device:
 *   get:
 *     summary: Fetch all devices
 *     tags: [Device]
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
 *                   id:
 *                     type: string

 *   post:
 *     summary: Create a new device
 *     tags: [Device]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       201:
 *         description: Device created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string

 * /device/{id}/latest-data:
 *   get:
 *     summary: Get latest data for a specific device
 *     tags: [Device]
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
 *                   type: number
 *                 latest_pulse:
 *                   type: number
 *                 latest_smoke:
 *                   type: number
 *                 latest_propane:
 *                   type: number
 *                 latest_co2:
 *                   type: number
 *                 latest_sound:
 *                   type: number
 *                 latest_latitude:
 *                   type: number
 *                 latest_longitude:
 *                   type: number
 *                 latest_timestamp:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: No data found for the specified device

 * /device/{id}/trend:
 *   get:
 *     summary: Get the latest 50 sensor values for a specific device
 *     tags: [Device]
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
 *                   type: object
 *                   properties:
 *                     temperature:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           temperature:
 *                             type: number
 *                           created_at:
 *                             type: string
 *                             format: date-time
 *                     airquality:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           smoke:
 *                             type: number
 *                           propane:
 *                             type: number
 *                           co2:
 *                             type: number
 *                           created_at:
 *                             type: string
 *                             format: date-time
 *                     pulse:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           pulse:
 *                             type: number
 *                           created_at:
 *                             type: string
 *                             format: date-time
 *                     position:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           latitude:
 *                             type: number
 *                           longitude:
 *                             type: number
 *                           created_at:
 *                             type: string
 *                             format: date-time
 *                     soundlevel:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           sound:
 *                             type: number
 *                           created_at:
 *                             type: string
 *                             format: date-time
 *       404:
 *         description: No trend data found for the specified device
 */
