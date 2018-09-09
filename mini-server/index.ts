import * as express from 'express';

let app = express();

app.use('/user/login', function(req: express.Request, res: express.Response) {   
    res.json({login:true});
});

app.get('/user', function(req: express.Request, res: express.Response) {   
    res.json({ok:true});
});

app.use(function(req, res, next) {});
app.use(function(err, req, res:express.Response, next) {
    res.json({error:err});
});

let port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Server is running!");
});