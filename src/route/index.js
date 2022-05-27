const { Router } = require("express");
const sign = require("./signup/index");
const authRouter = require("./auth/index");
const productRouter = require('./product/index')

const router = Router();

router.use("/signup", sign);
router.use("/auth", authRouter);
router.use('/product', productRouter)
module.exports = router;
