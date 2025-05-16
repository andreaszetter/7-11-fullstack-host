import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// dotenv.config();

// Middleware for verifying JWT token
function verifyJWT(req, res, next) {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).json({ error: "JWT-token saknas." });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET || "yoheybro", (error, payload) => {
        // If verification failed
        if (error) {
            return res
                .status(403)
                .json({ error: "JWT-token is invalid or has expired." });
        }

        // Om verifieringen gick bra(inget err) så får vi tillbaka en payload, och vi sparar den i req objectet.
        req.user = payload;

        next();
    });
}

export default verifyJWT;