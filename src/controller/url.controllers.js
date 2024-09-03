import { nanoid } from "nanoid";
import { Url } from "../model/url.model.js";
const createShortId = async (req, res) => {
  const originalUrl = req.body;
  if (!originalUrl) {
    return res.status(400).json({ error: "url is required" });
  }
  const shortID = nanoid(8);
  if (!shortID) {
    return res.json({ error: "short id not created" });
  }
  await Url.create({
    shortID: shortID,
    redirectedUrl: originalUrl,
  });

  res.json({ id: shortID, message: "ShortId created !!" });
};

export { createShortId };
