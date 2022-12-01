const { Router } = require('express');
const userController = require('../controllers/userController');
const { requireAuth, isAdmin } = require('../middlewares/authMiddleware')

const router = Router();

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.put('/profile/:id', requireAuth, userController.update_profile);
router.get('/users',[requireAuth, isAdmin], userController.user_get);
router.get('/users/:id',[requireAuth, isAdmin], userController.user_get_id);
router.delete('/users/:id',[requireAuth, isAdmin],userController.user_delete);
router.post('/users',[requireAuth, isAdmin], userController.user_post)


module.exports = router;