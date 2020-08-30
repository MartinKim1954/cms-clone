const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/customers', (req, res) => {
    res.send([{
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name': '김창수',
        'birthday': '910916',
        'gender': '남자',
        'job': '개발자'
    },
    {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': '정송희',
        'birthday': '921231',
        'gender': '여자',
        'job': '군인'
    },
    {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': '나은지',
        'birthday': '940219',
        'gender': '여자',
        'job': '개발자'
    },

    ])
})

app.listen(port, () => console.log(`Listening on port ${port}`)) 