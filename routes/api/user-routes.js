const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

router
    .route('/users')
    .get(getAllUser)
    .post(createUser);

    router
    .route('/users/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/users/:userId/friends/:friendId')
    .post()
    .delete();


module.exports = router;
