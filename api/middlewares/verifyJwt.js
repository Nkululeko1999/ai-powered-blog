import jwt from "jsonwebtoken";

export const verifyJwt = async (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token)
    return res.status(401).json({ success: false, error: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    // console.log(err);

    if (err)
      return res.status(403).json({ success: false, error: "Forbidden" });

    (req.user = decoded.userId);

    next();
  });
};
