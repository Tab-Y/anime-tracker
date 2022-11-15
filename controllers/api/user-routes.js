// to get to this folder   /api/user/
const router = require('express').Router();
const { Users } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const createUserData = await Users.create(req.body, {        // create new user
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        const userData = await Users.findOne({                       // finds user
            where: { email: req.body.email }
        });

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(createUserData);                   // creates json response of the new user data
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await Users.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: `Something isn't right here... \nIncorrect email or password, please try again` });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: `Something isn't right here... \nIncorrect email or password, please try again` });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'It Worked! You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;