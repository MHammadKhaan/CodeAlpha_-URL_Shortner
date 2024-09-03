import { Router } from "express";
import { createShortId, redirectURL } from "../controller/url.controllers.js";

const router = Router();

router.route("/").post(createShortId);
router.route("/:shortId").get(redirectURL);

export default router;
