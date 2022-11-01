const e = require("express");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("User List");
});

router.get("/new", (req, res) => {
    res.render("users/new", {firstname: "Saurabh"});
});

router.post("/",(req, res) => {
    const isValid = true;
    if(isValid) {
        users.push({firstname: req.body.firstname});
        res.redirect(`/users/${users.length - 1}`)
    } else {
   console.log(req.body.firstname); 
   res.render("users/new", {firstname: req.body.firstname});
    }
})

router
.route("/:id")
.get((req, res) => {
    console.log(req.user)
    res.send(`Get user with ID ${req.params.id}`);
})
.put((req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
})
.delete((req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
})

const users = [{name: 'Saurabh'}, {name: 'James'}];
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next();
})

module.exports = router