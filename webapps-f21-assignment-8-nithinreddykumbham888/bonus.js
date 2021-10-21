const http = require('http')    //Pull in a useful node package
var array = ['Indigo','Air India','Spicejet','Vistara','Air Asia','Go Air'] 
number = Math.floor(Math.random() * 5);
number1 = Math.floor(Math.random() * 5);     
console.log(array)
console.log(number,number1)                         
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Flights </title> </head>')
      res.write('<body>')
      res.write('<h1>Nithin Reddy Preferred Flights</h1>')
      res.write('\n')
      res.write(`Choice 1 : `+array[number])  
      res.write('\n')  
      res.write(`Choice 2 :`+array[number1])
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})

// Create a new server called bonus.js.  
// Keep an array of at least 6 items that are related to 
// each other in some way (E.g names, colors, animals, etc.)  
// Generate two random indices and use those values to get two of the items.  
// Create a response html that has an appropriate title and 
// heading for your collection and puts the pair of items into response. 
// g(${search_params.get("a")},${search_params.get("b")})