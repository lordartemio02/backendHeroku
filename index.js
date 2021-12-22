import express from 'express';
import config from 'config';
import router from './routes/routes.js';
import corsMiddleware from './middlewares/corsMiddleware.js';
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';

import errorMiddleware from './middlewares/errorMiddleware.js';

const PORT = process.env.PORT || config.get('defaultPort');

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use(router);

app.use(errorMiddleware);
app.use(function (req, res, next) {
    res.status(404).sendFile('./pages/notFoundPage.html', { root: '.' });
});

async function startApp() {
    try {
        await mongoose.connect(config.get('db_url'), {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        app.listen(PORT, () => console.log('Server started on port ' + PORT));
    } catch (error) {
        console.log(error);
    }
}

startApp();
