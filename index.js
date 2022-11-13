const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from smarty mega kill!')
});

const users = [
    { id: 1, name: 'killing spree', email: 'spree@gmail.com', phone: '123' },
    { id: 2, name: 'dominating', email: 'dominating@gmail.com', phone: '123' },
    { id: 3, name: 'mega kill', email: 'megakill@gmail.com', phone: '123' },
    { id: 4, name: 'unstoppable', email: 'unstoppable@gmail.com', phone: '123' },
    { id: 5, name: 'wicked sick', email: 'wickedsick@gmail.com', phone: '123' }
]

// app.get('/users', (req, res) => {
//     res.send(users)
// });

app.get('/users', (req, res) => {
    // console.log('query', req.query);
    // res.send(users)
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    // const user = users[id];
    const user = users.find(u => u.id == id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})