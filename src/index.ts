import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to the HTML page!");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
