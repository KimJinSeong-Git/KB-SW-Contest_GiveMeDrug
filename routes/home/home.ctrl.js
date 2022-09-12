'use strict';

const home = (req, res) =>{
    // == root ==
    res.render('home/index');
}

const login = (req, res) =>{
    // == login ==
    res.render('home/login');
}

module.exports = {
    home,
    login,
};