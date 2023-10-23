import { Request } from 'express';
import multer from 'multer';
import path from 'path';

const uploadsConfig = {
    storage: multer.diskStorage({
        // local onde será salvo
        destination: path.join(__dirname, '..', '..', 'images'),
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        },
    }),
    limits: {
        fileSize: 10 * 1024 * 1024,
    },
    fileFilter: (req: Request, file: Express.Multer.File, cb: (error: Error | null, acceptFile: boolean) => void) => {
        const mimeType = ['image/png', 'image/jpeg', 'image/gif', 'image/jpg'];

        if (!mimeType.includes(file.mimetype)) {
            return cb(new Error('Invalid file type'), false);
        }

        cb(null, true);
    },
} as multer.Options;

const upload = multer(uploadsConfig);

export default upload;
