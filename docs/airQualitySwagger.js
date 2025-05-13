/**
 * @swagger
 * tags:
 *   name: AirQuality
 *   description: Air Quality monitoring
 */

/**
 * @swagger
 * /airquality:
 *   get:
 *     summary: Fetch all air quality data
 *     tags: [AirQuality]
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
 *                   smoke:
 *                     type: string
 *                   propane:
 *                     type: string
 *                   co2:
 *                     type: string
 *                   created_at:
 *                     type: string
 *                     format: date-time

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
 *               device_id:
 *                 type: string
 *               smoke:
 *                 type: string
 *               propane:
 *                 type: string
 *               co2:
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
 *                 smoke:
 *                   type: string
 *                 propane:
 *                   type: string
 *                 co2:
 *                   type: string
 *                 created_at:
 *                   type: string
 *                   format: date-time

 * /airquality/{id}/latest-data:
 *   get:
 *     summary: Get latest sensor data for a specific device
 *     tags: [AirQuality]
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
 *                 latest_smoke:
 *                   type: string
 *                 latest_propane:
 *                   type: string
 *                 latest_co2:
 *                   type: string
 *                 latest_timestamp:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: No data found for the specified device

 * /airquality/{id}/trend:
 *   get:
 *     summary: Get the latest 50 sensor values for a specific device
 *     tags: [AirQuality]
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
 *                       smoke:
 *                         type: string
 *                       propane:
 *                         type: string
 *                       co2:
 *                         type: string
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *       404:
 *         description: No trend data found for the specified device
 */
