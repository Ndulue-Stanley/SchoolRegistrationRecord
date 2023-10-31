import express, {Application} from 'express';
import cors from 'cors';
import './utils/dbConfig'
import { mainApp } from './mainApp';


const port:number = 8588;

const app:Application = express()
mainApp(app)
app.use(express.json())
app.use(cors())

const server = app.listen(port, ()=>{
    console.log('connected.....');
    
})

process.on('uncaughtException', (err:Error)=>{
    console.log('uncaughtException', err);
    process.exit(1)
})

process.on('unhandledRejection', (reason:any)=>{
    console.log('unhandledRejection', reason);

   server.close(()=>{
    process.exit(1)
   })
    
})