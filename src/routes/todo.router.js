'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/todo.controller');

/**
  * @endpoint: /todo/
  * @method: POST
**/
router.post('/', controller.post);

/**
  * @endpoint: /todo/:id
  * @method: PUT
**/
router.put('/:id', controller.put);

/**
  * @endpoint: /todo/
  * @method: DELETE
**/
router.delete('/', controller.delete);

module.exports = router;