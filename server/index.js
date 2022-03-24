//importing dependencies
const { application } = require('express');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxIiwiZmlyc3RuYW1lIjoiZmlyc3RuYW1lIiwibGFzdG5hbWUiOiJsYXN0bmFtZSIsInVzZXJuYW1lIjoidGVzdCIsInBhc3N3b3JkIjoidGVzdCIsImNvbnRhY3RudW1iZXIiOiIxMjM0NTY3ODkwIn0.4EgJklx1Lbwl1vmvZlIpCm4Qy5RM5sEi-I1JOkhpodI';

const users = [
    {
        uid: 1,
        firstname:"firstname",
        lastname:"lastname",
        username:'test',
        password:'test',
        contactnumber:'1234567890',
        accessToken: jwt
    },
];

const products = [
    {
        id: 1,
        product_name: "pencil",
        quantity: "1",
        status: "Active"
    },
    {
        id: 2,
        product_name: "paper",
        quantity: "2",
        status: "Active"
    }
]


app.use(cors());
app.use(bodyParser.json());

//api home
app.get('/', (req,res) => {
    res.send('reacttest api');
});

//get specific user using id
app.get('/user/:uid', async (req,res) => {
    try {
        const user = await users.find(c => c.uid == req.params.uid);
        res.send(user);
    } catch(err){
        res.send({ message: err });
    }
    
});

//login and get accessToken
app.post('/login', async (req,res) => {
    try {
        if(!req.body.username || !req.body.password){
            res.send({message: 'Please fill up username and password'});
        }
        const user = await users.find(user => (user.username == req.body.username) && (user.password == req.body.password));

        if (user){
            res.send({accessToken: user.accessToken});
        } else {
            res.send({message: 'no user found with those credentials'});
        }
    } catch(err){
        res.send({ message: err });
    }
    
});

//get all the products in api
app.get('/products', (req,res) => {
    try {
        res.send(products);
    } catch(err){
        res.send({ message: err});
    }
});

//PORT
app.listen(3008, () => console.log('Listening on port 3008...'));