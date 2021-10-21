const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<tr>')
      res.write('<th>Food/Drink </th>')
      res.write('<th>Location </th>')
      res.write('<th>Price</th>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<table>')
      res.write('<td>Biriyani</td>')
      res.write('<td>India</td>')
      res.write('<td>150 - 200</td>')    
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Burgers</td>')
      res.write('<td>USA</td>')
      res.write('<td>100 - 150</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Fast food</td>')
      res.write('<td>China</td>')
      res.write('<td>100 - 200</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Sandwiches</td>')
      res.write('<td>UK</td>')
      res.write('<td>150 - 200</td>')
      res.write('</tr>')
      res.write('</table>')
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})