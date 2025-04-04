import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.JWT_SECRET_TOKEN;

const authorization = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], secret); 
    req.user = decoded; 
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token", error: err });
  }
};

export { authorization }; 
export default authorization; 
