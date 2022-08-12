const express = require('express');
const router = express.Router();
const job = require('../models/Job');

// Add Job via Post
router.post('/add', (req, res)=>{
    let {title, description, salary,company, email, new_job} = req.body;
});