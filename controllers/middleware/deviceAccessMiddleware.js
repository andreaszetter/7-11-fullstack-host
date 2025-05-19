const authorizeDeviceAccess = async (req, res, next) => {
  const { role, email, company } = req.user;
  const requestedDeviceId = req.params.id;
  const pool = req.pool; // ✅ Get it from the request

  try {
    if (role === 'admin') {
      // Admins: check if any user in same company has access to this device
      const result = await pool.query(`
        SELECT 1 FROM users 
        WHERE device_id = $1 AND company_id = $2
        LIMIT 1
      `, [requestedDeviceId, company]);

      if (result.rows.length > 0) {
        return next();
      }
    }

    if (role === 'user') {
      // Get user's assigned device from DB
      const userDeviceResult = await pool.query(`
        SELECT device_id FROM users WHERE email = $1
      `, [email]);

      
      const userDeviceId = userDeviceResult.rows[0]?.device_id;

      if (userDeviceId && userDeviceId === requestedDeviceId) {
        return next();
      }
    }

    return res.status(403).json({ message: 'Not enough authority for this path' });
  } catch (err) {
    console.error("Authorization middleware error:", err);
    return res.status(500).json({ message: 'Internal server error during authorization.' });
  }
};

export default authorizeDeviceAccess;
