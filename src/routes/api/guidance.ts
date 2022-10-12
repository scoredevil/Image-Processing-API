import { Router, Request, Response, NextFunction } from 'express';

const guidance: Router = Router();

guidance.get('', (request: Request, response: Response, next: NextFunction) => {
  response.send(`
    <h1 style="text-align: center;">URL must be like :</h1>
    <h3 style="text-align: center;">http://localhost:3000/pictures?name=picturesName&width=picturesWidth&height=picturesHeight</h3>
    <h4 style="text-align: center;">For Example</h4>
    <ul style="list-style: none;">
        <li style="text-align: center" ><a href="http://localhost:3000/pictures?name=background&width=200&height=200">http://localhost:3000/pictures?name=background&width=200&height=200</a></li>
        <br>
        <li style="text-align: center" ><a href="http://localhost:3000/pictures?name=gore&width=200&height=200">http://localhost:3000/pictures?name=gore&width=200&height=200</a></li>
        <br>
        <li style="text-align: center" ><a href="http://localhost:3000/pictures?name=ships&width=200&height=200">http://localhost:3000/pictures?name=ships&width=200&height=200</a></li>
    </ul>
`);
});

export default guidance;
