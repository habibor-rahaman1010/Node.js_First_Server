const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())
const port = 5000;

const x = {
    id: "#H78F6UG7GF",
    name: "habibor Rahaman",
    description: "He is a good progrmmer, and good practice wirte code",
    programming: ['python', 'javaScript', 'php', 'typeScript', 'C++'],
    start: function name() {
        console.log("hello programmer")
    },
    friends: [
        { id: 'YTFYF54F', name: 'Habibor Rahaman', career: 'CSE' },
        { id: 'SR56SD6Y', name: 'Rifat', career: 'EEE' },
        { id: 'OTU6FG6F', name: 'Arafat', career: 'EEE' },
        { id: 'HYGU67FL', name: 'Siyam', career: 'CSE' },
        { id: 'QW75TY5D', name: 'Tarek', career: 'CSE' },
        { id: 'HYGU67FL', name: 'Iftekhar', career: 'CSE' },
        { id: 'JH8UI78C', name: 'Wahid', career: 'CSE' },
    ]
}

const users = [
    { id: 'YTFYF54F', image: 'https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA=', name: 'Habibor Rahaman', email: 'habibor144369@gmail.com', phone: '01769812382', career: 'CSE' },
    { id: 'SR56SD6Y', image: 'https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA=', name: 'Rifat', email: 'rifat23@gmail.com', phone: '01769812382', career: 'EEE' },
    { id: 'OTU6FG6F', image: 'https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA=', name: 'Arafat', email: 'arfat902@gmail.com', phone: '01769812382', career: 'EEE' },
    { id: 'HYGU67FL', image: 'https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA=', name: 'Siyam', email: 'siyam9874@gmail.com', phone: '01769812382', career: 'CSE' },
    { id: 'QW75TY5D', image: 'https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA=', name: 'Tarek', email: 'tarek6327@gmail.com', phone: '01769812382', career: 'CSE' },
    { id: 'HYGU97FL', image: 'https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA=', name: 'Iftekhar', email: 'iftekhar673@gmail.com', phone: '01769812382', career: 'CSE' },
    { id: 'JH8UI78C', image: 'https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA=', name: 'Wahid', email: 'wahid7283@gmail.com', phone: '01769812382', career: 'CSE' },
    { id: 'YIHYF54F', image: 'https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA=', name: 'Allen', email: 'allen8923@gmail.com', phone: '01769812382', career: 'EEE' },
    { id: 'SR96SD6Y', image: 'https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA=', name: 'Rio', email: 'rio7823@gmail.com', phone: '01769812382', career: 'EEE' },
    { id: 'OTM6FG6F', image: 'https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA=', name: 'Maffen', email: 'mafen5423@gmail.com', phone: '01769812382', career: 'EEE' },
    { id: 'HYGU07FL', image: 'https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA=', name: 'Jesos', email: 'jesos9898@gmail.com', phone: '01769812382', career: 'CSE' },
    { id: 'QW78TY5D', image: 'https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA=', name: 'Tokio', email: 'tokio323@gmail.com', phone: '01769812382', career: 'CSE' },
    { id: 'HYMU67FL', image: 'https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA=', name: 'Mendise', email: 'mendise3244@gmail.com', phone: '01769812382', career: 'EEE' },
    { id: 'JH9UI78C', image: 'https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA=', name: 'Bafet', email: 'bafet4234@gmail.com', phone: '01769812382', career: 'CSE' }
]

app.get('/', (req, res) => {
    res.send(x);
});

app.get('/friends', (req, res) => {
    res.send(x.friends);
});

//post methods use here
app.post('/users', (req, res) => {
    const allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let storPass = "";
    for (let i = 0; i < 8; i++) {
        const gp = Math.random() * allChar.length;
        storPass += allChar.substring(gp, gp + 1);
    };

    const newUser = req.body;
    newUser.id = storPass;
    users.push(newUser);
    res.json(newUser);
});

//all users
app.get('/my_all_user', (req, res) => {
    res.send(users);
});

//dinamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

//search api use id..
app.get('/users', (req, res) => {
    const search_id = req.query.search_id;
    if (search_id) {
        const searchResult = users.find((user) => user.id.toUpperCase().includes(search_id.toUpperCase()));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});

// search filter api.... usename
app.get('/all_users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter((user) => user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});

// all student show api..
app.get('/student/all/', (req, res) => {
    res.send(
        [
            { id: 0, name: 'Arafat', semester: '6', dep: 'EEE' },
            { id: 1, name: 'Rahat', semester: '6', dep: 'CSE' },
            { id: 2, name: 'Tarek', semester: '6', dep: 'CSE' },
            { id: 3, name: 'Rifat', semester: '6', dep: 'EEE' },
        ]
    )
});

app.listen(port, () => {
    console.log(`server running successfully port: ${port}`)
});