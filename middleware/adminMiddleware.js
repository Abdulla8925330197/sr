import { authorization } from "./authMiddleware.js";

const isAdmin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};

export { isAdmin }; 
export default isAdmin; 
