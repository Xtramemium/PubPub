require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const {register, login, getUsers, getRoles, updateUser, deleteUser} = require('./controllers/user');
const {
    getSingleMenuPos,
    getWholeMenu,
    addMenuPosition,
    editMenuPosition,
    deleteMenuPosition
} = require('./controllers/menu');
const mapUser = require('./helpers/mapUser');
const authenticated = require('./middlewares/authenticated')
const hasRole = require('./middlewares/hasRole')
const ROLES = require('./constants/roles');
const mapMenu = require('./helpers/mapMenu');
const mapComment = require('./helpers/mapReviews');

const port = 3001;
const app = express();

app.use(express.static('../frontend/build'))

app.use(cookieParser());
app.use(express.json());

app.post('/register', async (req, res) => {
    try {
        const {user, token} = await register(req.body.login, req.body.password);

        res.cookie('token', token, {httpOnly: true})
            .send({error: null, user: mapUser(user)});
    } catch (e) {
        res.send({error: e.message || "Unknown error"})
    }
})

app.post('/login', async (req, res) => {
    try {
        const {user, token} = await login(req.body.login, req.body.password)

        res.cookie('token', token, {httpOnly: true})
            .send({error: null, user: mapUser(user)});
    } catch (e) {
        res.send({error: e.message || "Unknown error"})
    }
})

app.post('/logout', (req, res) => {
    res.cookie('token', '', {httpOnly: true})
        .send({})
})

app.get('/menu', async (req, res) => {
    const {positions, lastPage} = await getWholeMenu(
        req.query.search,
        req.query.limit,
        req.query.page
    )

    res.send({data: {lastPage, menu: positions.map(mapMenu)}})
})

app.get('/menu/:id', async (req, res) => {
    const post = await getSingleMenuPos(req.params.id)

    res.send({data: mapMenu(post)})
})

app.use(authenticated);


app.post('/menu', hasRole([ROLES.ADMIN]), async (req, res) => {
    const newPost = await addMenuPosition({
        title: req.body.title,
        content: req.body.content,
        image: req.body.imageUrl,
    });

    res.send({data: mapMenu(newPost)})
})

app.patch('/menu/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
    const updatedPost = await editMenuPosition(
        req.params.id,
        {
            title: req.body.title,
            content: req.body.content,
            image: req.body.imageUrl,
        }
    );

    res.send({data: mapMenu(updatedPost)})
})

app.delete('/menu/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
    await deleteMenuPosition(req.params.id);

    res.send({error: null})
})

app.get('/users', hasRole([ROLES.ADMIN]), async (req, res) => {
    const users = await getUsers();

    res.send({data: users.map(mapUser)})
})

app.get('/users/roles', hasRole([ROLES.ADMIN]), async (req, res) => {
    const roles = getRoles();

    res.send({data: roles})
})

app.patch('/users/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
    const newUser = await updateUser(req.params.id, {
        role: req.body.roleId
    })

    res.send({data: mapUser(newUser)})
})

app.delete('/users/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
    await deleteUser(req.params.id)

    res.send({error: null})
})

mongoose.connect(
    process.env.DB_CONNECTION
).then(() => {
    app.listen(port, () => {
        console.log(`server on port ${port}`)
    })
})
