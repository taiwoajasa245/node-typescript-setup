import express, { Request, Response } from 'express'; 

const app = express();
const router = express.Router(); 

app.use(express.json())



router.get('/about', (_req, res: Response) => {
    res.send('About Us');

});


app.get('/type', ( req: Request, res: Response ) => { 
    res.json('Hello TypesScritpt'); 
    console.log(req.url);

}); 

app.use('/api/find/me', router ); 


app.listen( 3000, () => { 
    console.log('listening for request on port 3000 ');
})
