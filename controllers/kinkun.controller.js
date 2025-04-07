const multer = require('multer');
const path = require('path');

//1. สร้างที่อยู่สำหรับเก็บไฟล์ที่อัปโหลด และเปลี่ยนชื่อไฟล์ที่อัปโหลดเพื่อไม่ให้ซ้ำกัน
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/kinkan');
    },
    filename: (req, file, cb) => {
        cb(null, 'kinkun_' + Math.floor(Math.random() * Date.now()) + path.extname(file.originalname));
    }
});
//2. ตัวฟังก์ชันอัปโหลดไฟล์
exports.upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 50 // ขนาดไฟล์สูงสุด 5MB
    },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/; //กำหนดประเภทของไฟล์ที่อนุญาตให้อัปโหลด
        const mimetype = filetypes.test(file.mimetype); //ตรวจสอบประเภทของไฟล์ที่อัปโหลด
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase()); //ตรวจสอบนามสกุลของไฟล์ที่อัปโหลด
        if (mimetype && extname) {
            return cb(null, true); //อนุญาตให้ไฟล์ที่อัปโหลดผ่านการตรวจสอบ
        } else {
            cb('Error: File upload only supports the following filetypes - ' + filetypes); //ไม่อนุญาตให้ไฟล์ที่อัปโหลดผ่านการตรวจสอบ
        }
    }
});

exports.createKinkun = async (req, res) => {
    try {

    }catch (error) {
        res.status(500).json({ message: 'พบปัญหาในการทำงาน ${err.message}' });
    }
}

exports.editKinkun =async (req, res,) => {
    try {

    }catch (error) {
        res.status(500).json({ message: 'พบปัญหาในการทำงาน ${err.message}' });
    }
}

exports.delelteKinkun = async (req, res) => {
    try {

    }catch (error) {
        res.status(500).json({ message: 'พบปัญหาในการทำงาน ${err.message}' });
    }
}

exports.showAllKinkun = async  (req, res) => {
    try {

    }catch (error) {
        res.status(500).json({ message: 'พบปัญหาในการทำงาน ${err.message}' });
    }
}

exports.showOnlyKinkun = async  (req, res) => {
    try {

    }catch (error) {
        res.status(500).json({ message: 'พบปัญหาในการทำงาน ${err.message}' });
    }
}

exports.upload = multer({});

exports.checkLogin = async (req, res) => {}

exports.createUser = async (req, res) => {}

exports.checkLogin = async (req, res) => {}

exports.editUser = async (req, res) => {}
