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
 *     summary: Fetch all GPS records
 *     tags: [GPS]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/GPS'
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
 *             required: [device_id, latitude, longitude]
 *             properties:
 *               device_id:
 *                 type: string
 *               latitude:
 *                 type: number
 *               longitude:
 *                 type: number
 *     responses:
 *       201:
 *         description: Data created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GPS'
 */

/**
 * @swagger
 * /gps/{id}/latest-data:
 *   get:
 *     summary: Get latest GPS data for a device
 *     tags: [GPS]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Device ID
 *     responses:
 *       200:
 *         description: Latest GPS coordinates
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 device_id:
 *                   type: string
 *                 latest_latitude:
 *                   type: number
 *                 latest_longitude:
 *                   type: number
 *                 latest_timestamp:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: No data found
 */

/**
 * @swagger
 * /gps/{id}/trend:
 *   get:
 *     summary: Get latest 50 GPS positions for a device
 *     tags: [GPS]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Device ID
 *     responses:
 *       200:
 *         description: GPS position history
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
 *                     $ref: '#/components/schemas/GPS'
 *       404:
 *         description: No trend data found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     GPS:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         device_id:
 *           type: string
 *         latitude:
 *           type: number
 *         longitude:
 *           type: number
 *         created_at:
 *           type: string
 *           format: date-time
 */