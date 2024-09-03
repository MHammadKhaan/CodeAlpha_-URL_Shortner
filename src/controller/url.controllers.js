import { nanoid } from "nanoid";
import { Url } from "../model/url.model.js";
const createShortId = async (req, res) => {
  const originalUrl = req.body;
  console.log(originalUrl);

  if (!originalUrl) {
    return res.status(400).json({ error: "url is required" });
  }
  const shortId = nanoid(8);
  if (!shortId) {
    return res.json({ error: "short id not created" });
  }
  await Url.create({
    shortID: shortId,
    redirectedUrl: originalUrl.url,
  });

  res.json({ id: shortId, message: "ShortId created !!" });
};
const redirectURL = async (req, res) => {
  const { shortId } = req.params;
  if (!shortId) {
    return res.status(400).json({ error: "shortID is required" });
  }
  const urlDoc = await Url.findOne({
    shortID: shortId,
  });
  if (!urlDoc) {
    return res.status(400).json({ error: "document not found" });
  }
  res.redirect(urlDoc.redirectedUrl);
};
export { createShortId, redirectURL };
