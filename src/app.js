import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import path from 'path';
import cors from 'cors';

class App{
    
    constructor(){
        this.server = express();
        
        mongoose.connect('mongodb+srv://devhouse:devhouse@devhouse.xvymb6g.mongodb.net/devhouse?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(cors());

        //middleware que da o caminho para a url da imagem para poder ser acessada
        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'uploads'))
        );
        
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;