const Router = require('express')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const userRouter = require ('./userRouter')
const deviceRouter = require ('./deviceRouter')


const router = new Router();

router.use(`/user`, userRouter);
router.use(`/type`, typeRouter);
router.use(`/brand`, brandRouter);
router.use(`/device`, userRouter);

module.exports = router;