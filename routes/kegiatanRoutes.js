const { Router } = require('express');
const kegiatanController = require('../controllers/kegiatanController');
const { requireAuth, isAdmin } = require('../middlewares/authMiddleware');


const router = Router();

router.get('/kegiatan', kegiatanController.kegiatan_get);
router.get('/kegiatan/:id', kegiatanController.kegiatan_get_id);
router.post('/postKegiatan',[requireAuth, isAdmin],kegiatanController.kegiatan_post);
router.put('/kegiatan/edit/:id',[requireAuth, isAdmin], kegiatanController.kegiatan_edit_put);
router.delete('/kegiatan/:id',[requireAuth, isAdmin], kegiatanController.kegiatan_delete)


module.exports = router;