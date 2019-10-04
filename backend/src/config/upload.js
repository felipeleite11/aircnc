const multer = require('multer')
const { resolve, extname, basename } = require('path')

module.exports = {
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = extname(file.originalname)
            const name = basename(file.originalname, ext)
            return cb(null, `${name}-${Date.now()}${ext}`)
        }
    })
}