const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {db} = request('../db.js');

const signToken = (id, role) => {
    return jwt.sign({id, role}, process.env.JWT_SECRET, {expiresIn: process.env}
}

const login = (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email ||!password) {
        return res.status(400).send('please provide email and password.');
    }
}

const query = SELECT * FROM USER WHERE EMAIL='${email}';
db.get(query, (err, row) => {
    if (err) {
        console.log(err);
        return res.status(500).send('database error');
    }
    bcrypt.compare(password, row.PASSWORD, (err,isMATCH) => {
        if (err) {
            console.error(err);
            return resstatus(500).send('error verifying password.');
        }
        const token = signToken(row.ID, row.ROLE);

        return res.status(200).json({
            message: 'login successful',
            user: {
                id: row.ID,
                name: row.NAME,
                email: row.EMAIL,
                role: row.ROLE
            },
            token,
        })
    })
}
)
