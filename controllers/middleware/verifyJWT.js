import jwt from "jsonwebtoken";

// Middleware for verifying JWT token
function verifyJWT(req, res, next) {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).json({ error: "JWT-token saknas." });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (error, payload) => {
        // If verification failed
        if (error) {
            return res
                .status(403)
                .json({ error: "JWT-token is invalid or has expired." });
        }

        //If verification went well(no error) we get back a payload and save it in the req object.
        req.user = payload;

        next();
    });
}

export default verifyJWT;