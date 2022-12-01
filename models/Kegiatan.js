const mongoose = require('mongoose');

const KegiatanSchema = new mongoose.Schema({
    img_kegiatan: {
        type: String,
        required: true
    },
    judul_kegiatan: {
        type: String,
        required: true
    },
    tgl_kegiatan: {
      type: Date
    },
    lokasi_kegiatan: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        required: true
    }
});

const Kegiatan = mongoose.model('kegiatan', KegiatanSchema);

module.exports = Kegiatan;

// const mongoose = require('mongoose');

// const articleSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     pic: {
//         type: String,
//         required: true

//     }    

// });

// const Article = mongoose.model('article', articleSchema);

// module.exports = Article;
