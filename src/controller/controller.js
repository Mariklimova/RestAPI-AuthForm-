const express = require('express');
const router = express.Router();
const { createUser, getAllUser, deleteUserById, getUserById, updateUserPath,updateUserById,authUser } = require('../service/service');

router.post('/reg', async (req, res) => {
    try {
        const { username, email, phone, pwd } = req.body;
        const user = await createUser(username, email, phone, pwd);
        res.status(200).send(user)
    } catch (er) {
        res.status(404).send(er.message)
    }
});

router.get('/', async (req, res) => {
    try {
        const user = await getAllUser();
        res.status(200).send(user)
    } catch (er) {
        res.status(404).send(er.message)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await deleteUserById(id)

        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await getUserById(id);
        res.status(200).send(user)
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const user = await updateUserPath(id, body);
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, phone, pwd } = req.body;
        const user = await updateUserById(id, username, email, phone, pwd);
        res.status(200).send(user)
    } catch (er) {
        res.status(404).send(er.message)
    }
})

router.post('/auth', async (req, res) => {
    try {
        const { email, pwd } = req.body;
        const user = await authUser(email, pwd);
        res.status(200).send(user)
    } catch (er) {
        res.status(404).send(er.message)
    }
})






module.exports = router