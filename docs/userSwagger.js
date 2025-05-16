/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Fetch all users
 *     tags: [Users]
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
 *                     type: integer
 *                   company_id:
 *                     type: integer
 *                   firstname:
 *                     type: string
 *                   surname:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phonenumber:
 *                     type: string
 *                   device_id:
 *                     type: string
 *                   role:
 *                     type: string

 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               company_id:
 *                 type: integer
 *               firstname:
 *                 type: string
 *               surname:
 *                 type: string
 *               password_hash:
 *                 type: string
 *               email:
 *                 type: string
 *               phonenumber:
 *                 type: string
 *               device_id:
 *                 type: string
 *               role:
 *                 type: string
 *                 example: user
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 company_id:
 *                   type: integer
 *                 firstname:
 *                   type: string
 *                 surname:
 *                   type: string
 *                 email:
 *                   type: string
 *                 phonenumber:
 *                   type: string
 *                 device_id:
 *                   type: string
 *                 role:
 *                   type: string
 */
