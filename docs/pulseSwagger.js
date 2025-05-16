/**
 * @swagger
 * tags:
 *   name: Pulse
 *   description: Pulse sensor monitoring
 */

/**
 * @swagger
 * /pulse:
 *   get:
 *     summary: Get all pulse records
 *     tags: [Pulse]
 *     responses:
 *       200:
 *         description: List of all pulse readings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pulse'
 *   post:
 *     summary: Add a new pulse record
 *     tags: [Pulse]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [device_id, pulse]
 *             properties:
 *               device_id:
 *                 type: string
 *               pulse:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Created pulse record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pulse'
 */

/**
 * @swagger
 * /pulse/{id}/latest-data:
 *   get:
 *     summary: Get latest pulse data for a device
 *     tags: [Pulse]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Device ID
 *     responses:
 *       200:
 *         description: Latest pulse data
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
 *         description: No data found
 */

/**
 * @swagger
 * /pulse/{id}/trend:
 *   get:
 *     summary: Get last 50 pulse readings for a device
 *     tags: [Pulse]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Device ID
 *     responses:
 *       200:
 *         description: Pulse trend data
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
 *                     $ref: '#/components/schemas/Pulse'
 *       404:
 *         description: No trend data found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Pulse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         device_id:
 *           type: string
 *         pulse:
 *           type: integer
 *         created_at:
 *           type: string
 *           format: date-time
 */
