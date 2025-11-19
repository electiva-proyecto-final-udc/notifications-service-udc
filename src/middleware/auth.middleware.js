const jwt = require("jsonwebtoken");
const { setToken } = require("../config/httpClient");  // 👈 IMPORTANTE
require("dotenv").config();

module.exports = function verifyToken(req, res, next) {
    const authHeader = req.headers["authorization"];

    if (!authHeader)
        return res.status(401).json({ error: "MISSING AUTHORIZATION HEADER" });

    const parts = authHeader.split(" ");

    if (parts.length !== 2 || parts[0] !== "Bearer")
        return res.status(401).json({ error: "INVALID AUTHORIZATION HEADER" });

    const token = parts[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        global.decodedUser = decoded;

        setToken(token);

        next();
    } catch (err) {
        console.error("JWT error:", err);
        return res.status(403).json({ error: "INVALID OR EXPIRED TOKEN" });
    }
};
