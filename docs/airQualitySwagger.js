/**
 * @swagger
 * tags:
 *   name: AirQuality
 *   description: Air quality sensor data
 */

/**
 * @swagger
 * /airquality:
 *   get:
 *     summary: Get all air quality sensor entries
 *     tags: [AirQuality]
 *     responses:
 *       200:
 *         description: List of all air quality readings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AirQuality'
 *   post:
 *     summary: Add a new air quality reading
 *     tags: [AirQuality]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [device_id, smoke, propane, co2]
 *             properties:
 *               device_id:
 *                 type: string
 *               smoke:
 *                 type: number
 *               propane:
 *                 type: number
 *               co2:
 *                 type: number
 *     responses:
 *       201:
 *         description: Created air quality record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AirQuality'
 */

/**
 * @swagger
 * /airQuality/{id}/latest-data:
 *   get:
 *     summary: Get latest air quality values for a device
 *     tags: [AirQuality]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Device ID
 *     responses:
 *       200:
 *         description: Latest air quality data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 device_id:
 *                   type: string
 *                 latest_smoke:
 *                   type: number
 *                 latest_propane:
 *                   type: number
 *                 latest_co2:
 *                   type: number
 *                 latest_timestamp:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: No data found
 */

/**
 * @swagger
 * /airQuality/{id}/trend:
 *   get:
 *     summary: Get last 50 air quality readings for a device
 *     tags: [AirQuality]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Device ID
 *     responses:
 *       200:
 *         description: List of air quality readings
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
 *                     $ref: '#/components/schemas/AirQuality'
 *       404:
 *         description: No trend data found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     AirQuality:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         device_id:
 *           type: string
 *         smoke:
 *           type: number
 *         propane:
 *           type: number
 *         co2:
 *           type: number
 *         created_at:
 *           type: string
 *           format: date-time
 */
