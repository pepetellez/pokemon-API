const router = require('express').Router()

const {
    getType,
    createType,
    modifyType,
    deleteType,
} = require('../controllers/types');

router.get('/', getType);
router.post('/', createType);
router.put('/:id', modifyType);
router.delete('/:id', deleteType);

module.exports = router;