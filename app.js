const http = require('http');

const server = http.createServer((req, res) =>{
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'text/html');

    if(url === '/' || url === '/Home'){
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><h1>Welcome to homepage</h1>');
        res.write('<button onclick="window.location.href=&quot;/Home&quot;">Home</button>');
        res.write('<button onclick="window.location.href=&quot;/createUser&quot;">Create User</button>');
        res.write('<button onclick="window.location.href=&quot;/users&quot;">Users</button>');
        res.write('</body></html>');
        return res.end();
    }
    if(url === '/createUser'){
        res.write('<html>');
        res.write('<head><title>First Assignment</title></head>');
        res.write('<body><h1>Congrats on writing your first assignment code</h1>');
        res.write('<button onclick="window.location.href=&quot;/Home&quot;">Home</button>');
        res.write('<button onclick="window.location.href=&quot;/createUser&quot;">Create User</button>');
        res.write('<button onclick="window.location.href=&quot;/users&quot;">Users</button>');
        res.write('<form action = "/create-user" method = "POST"><input type = "text" name = "username"><button type = "submit">Create</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body>');
        res.write('<button onclick="window.location.href=&quot;/Home&quot;">Home</button>');
        res.write('<button onclick="window.location.href=&quot;/createUser&quot;">Create User</button>');
        res.write('<button onclick="window.location.href=&quot;/users&quot;">Users</button>');
        res.write('<h1>Names of My Family members</h1><ul><li>Rasheed</li><li>Zareena</li><li>Rafique</li><li>Riyaz</li><li>Afreen</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) =>{
            body.push(chunk);
        });

        return req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.statusCode = 302;
            res.setHeader('Location', '/createUser');
            return res.end();
        });  
    }
});

server.listen(3000);