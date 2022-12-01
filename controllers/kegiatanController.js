const Kegiatan = require('../models/Kegiatan');
const asyncHandler = require('express-async-handler');


module.exports.kegiatan_get = asyncHandler(async (req, res) => {
  const kegiatan = await Kegiatan.find();
  res.status(200).json({ kegiatan });
});


module.exports.kegiatan_get_id = asyncHandler(async (req, res) => {
  const kegiatan = await Kegiatan.findById(req.params.id);

  if (kegiatan) {
    res.status(200).json(kegiatan);
  } else {
    res.status(404).json({ message: "kegiatan not found" });
  }


});

module.exports.kegiatan_post = asyncHandler(async (req, res) => {
  const { img_kegiatan, judul_kegiatan, tgl_kegiatan, lokasi_kegiatan, deskripsi } = req.body;

  if (!img_kegiatan || !judul_kegiatan || !tgl_kegiatan || !lokasi_kegiatan || !deskripsi) {
    res.status(400);
    throw new Error("Please Fill all the fields");
    return;
  } else {
    const kegiatan  = new Kegiatan ({ img_kegiatan, judul_kegiatan, tgl_kegiatan, lokasi_kegiatan, deskripsi });

    const createdKegiatan = await kegiatan.save();

    res.status(201).json(createdKegiatan);
  }
})

module.exports.kegiatan_edit_put = asyncHandler(async (req, res) => {
  const { img_kegiatan, judul_kegiatan, tgl_kegiatan, lokasi_kegiatan, deskripsi } = req.body;

  const kegiatan = await Kegiatan.findById(req.params.id);

  if (kegiatan) {
    kegiatan.img_kegiatan = img_kegiatan;
    kegiatan.judul_kegiatan = judul_kegiatan;
    kegiatan.tgl_kegiatan = tgl_kegiatan;
    kegiatan.lokasi_kegiatan = lokasi_kegiatan;
    kegiatan.deskripsi = deskripsi;

    const updatedKegiatan = await kegiatan.save();
    res.status(200).json({ message: "kegiatan Update", updatedKegiatan });
  } else {
    res.status(404);
    throw new Error("kegiatan not found");
  }
});

module.exports.kegiatan_delete = asyncHandler(async (req, res) => {
  const kegiatan = await Kegiatan.findById(req.params.id);

  if (kegiatan) {
    await kegiatan.remove();
    res.status(200).json({ message: "kegiatan Removed" });
  } else {
    res.status(404);
    throw new Error("kegiatan not Found");
  }
});
