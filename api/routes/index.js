import express from "express";
import index from "../controllers/indexController";
import create from "../controllers/createController";
import stats from "../controllers/statsController";
import redirect from "../controllers/redirectController";

const getRoutes = () => {
  const router = new express.Router();
  router.use(express.json());

  // Get request for Index page
  router.get("/", index.index);

  // POST request for shortening the URL
  router.post("/", create.createLink);

  // GET request for redirecting shortcode to URL
  router.get("/:shortcode", redirect.redirectLink);

  // GET request for retrieving shortcode stats
  router.get("/:shortcode/stats", stats.linkStats);

  return router;
};

export default getRoutes;
