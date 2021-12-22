import * as uuid from 'uuid';
import * as path from 'path';

class FileService {
    saveFiles(files) {
        try {
            let fileNames = [];
            if (files) {
                if (files.file) {
                    if (!Array.isArray(files.file)) {
                        files.file = Array(files.file);
                    }
                    files.file.forEach((file) => {
                        const extension = file.name.split('.')[1];
                        const fileName = uuid.v4() + '.' + extension;
                        fileNames.push(fileName);
                        let filePath = '';
                        switch (extension) {
                            case 'mp3':
                            case 'wav':
                                filePath = path.resolve(
                                    'static/audio',
                                    fileName
                                );
                                break;
                            case 'mp4':
                            case 'avi':
                            case 'mpg':
                            case 'mov':
                                filePath = path.resolve(
                                    'static/video',
                                    fileName
                                );
                                break;
                            case 'jpg':
                            case 'jpeg':
                            case 'png':
                            case 'bmp':
                                filePath = path.resolve('static/img', fileName);
                                break;
                            case 'docx':
                            case 'doc':
                            case 'rtf':
                            case 'xlsx':
                            case 'txt':
                                filePath = path.resolve(
                                    'static/document',
                                    fileName
                                );
                                break;
                            case 'rar':
                            case 'tar':
                            case 'zip':
                            case 'html':
                                filePath = path.resolve(
                                    'static/other',
                                    fileName
                                );
                                break;
                        }
                        file.mv(filePath);
                    });
                }
            }

            return fileNames;
        } catch (error) {
            console.log(error);
        }
    }
}
export default new FileService();
