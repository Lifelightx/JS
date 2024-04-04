// console.log("Hello world");
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Server</title>
      <style>
          *{
              margin: 0;
              padding: 0;
              font-family: poppins;
          }
          body,html{
              height: 100%;
              width: 100%;
          }
          body{
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
          }
          .container{
              box-sizing: border-box;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              border: 2px solid rgb(47, 46, 46);
              border-radius: 12px 4px 23px 155px;
              width: 50vw;
              padding: 23px;
              background-color: rgb(207, 255, 239);
          }
          p{
              padding: 23px;
              text-align: justify;
          }
          
      </style>
  </head>
  <body>
      <div class="container">
          <h1>Server</h1>
          <p>
              Displaying web pages: A web server stores web server software and a website's component files, and connects to the Internet. Sending or receiving emails: A server renders specialized services such as displaying web pages and sending or receiving emails. Connecting to a printer: A print server allows all clients on a network to use the printer 
          </p>
      </div>
  </body>
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
