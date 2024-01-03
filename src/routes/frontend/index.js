import express from "express";
import userRoutes from "./user.js";
import designerRoutes from "./designer.js";
import paymentRoutes from "./payment.js";
import orderRoutes from "./order.js";
import ratingRoutes from "./rating.js";
import { dirname } from "../../app.js";
import path from "path";
const routes = express.Router();

routes.get("/", (req, res) => {
  res.sendFile(path.join(dirname, "../public", `index.html`));
});

routes.get("/signin", (req, res) => {
  res.sendFile(path.join(dirname, "../public", `signin.html`));
});

routes.get("/signup", (req, res) => {
  res.sendFile(path.join(dirname, "../public", `signup.html`));
});

routes.get("/about-us", (req, res) => {
  res.sendFile(path.join(dirname, "../public", `about-us.html`));
});
routes.get("/contact", (req, res) => {
  res.sendFile(path.join(dirname, "../public", `contact.html`));
});
routes.use("/user", userRoutes);
routes.use("/designer", designerRoutes);
routes.use("/payment", paymentRoutes);
routes.use("/order", orderRoutes);
routes.use("/rating", ratingRoutes);
routes.use("/public", express.static(path.join(dirname, "../public")));

export default routes;
