import fileService from '../services/fileService.js';
import MyError from '../middlewares/myError.js';
import fs from 'fs';

class fileController {
    async loadFiles(req, res, next) {
        try {
            const files = req.files;

            if (files == null) {
                throw MyError.BadRequest('Файлы не переданы');
            }
            const fileNames = fileService.saveFiles(files);
            if (fileNames == null) {
                throw MyError.BadRequest('Файлы не удалось загрузить');
            }
            return res.status(200).json(fileNames);
        } catch (error) {
            next(error);
        }
    }
    async getFiles(req, res, next) {
        try {
            const folders = './static';
            let fileNames = [];
            fs.readdirSync(folders).forEach((subFolder) => {
                fs.readdirSync(folders + '/' + subFolder).forEach(
                    (fileName) => {
                        fileNames.push(subFolder + '/' + fileName);
                    }
                );
            });
            return res.status(200).json(fileNames);
        } catch (error) {
            next(error);
        }
    }
    async getImg(req, res, next) {
        try {
            const folder = './static/img';
            let fileNames = [];
            fs.readdirSync(folder).forEach((fileName) => {
                fileNames.push(fileName);
            });
            return res.status(200).json(fileNames);
        } catch (error) {
            next(error);
        }
    }
    async getAudio(req, res, next) {
        try {
            const folder = './static/audio';
            let fileNames = [];
            fs.readdirSync(folder).forEach((fileName) => {
                fileNames.push(fileName);
            });
            return res.status(200).json(fileNames);
        } catch (error) {
            next(error);
        }
    }
    async getVideo(req, res, next) {
        try {
            const folder = './static/video';
            let fileNames = [];
            fs.readdirSync(folder).forEach((fileName) => {
                fileNames.push(fileName);
            });
            return res.status(200).json(fileNames);
        } catch (error) {
            next(error);
        }
    }
    async getDocument(req, res, next) {
        try {
            const folder = './static/document';
            let fileNames = [];
            fs.readdirSync(folder).forEach((fileName) => {
                fileNames.push(fileName);
            });
            return res.status(200).json(fileNames);
        } catch (error) {
            next(error);
        }
    }
    async getOther(req, res, next) {
        try {
            const folder = './static/other';
            let fileNames = [];
            fs.readdirSync(folder).forEach((fileName) => {
                fileNames.push(fileName);
            });
            return res.status(200).json(fileNames);
        } catch (error) {
            next(error);
        }
    }
}

export default new fileController();
