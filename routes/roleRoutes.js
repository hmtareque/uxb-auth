const express = require('express');

const router = express.Router();
const roleController = require('../controllers/roleController');

//Request 
const storeRoleRequest = require('../requests/storeRoleRequest');
const updateRoleRequest = require('../requests/updateRoleRequest');
const ActivateRoleRequest = require('../requests/ActivateRoleRequest');

/**
 * Supply a specified role
 */
router.get('/roles/:roleId', roleController.getRole);

/**
 * Supply the list of all roles
 */
router.get('/roles', roleController.getRoles);

/**
 * Store newly created role
 */ 
router.post('/roles', storeRoleRequest.validate(), roleController.storeRole);


/**
 * Update a specified role
 */
router.put('/roles/:role_id', roleController.updateRole);


/**
 * Delete a specifed role
 */
router.put('/roles/:role_id/activate', ActivateRoleRequest.validate(), roleController.ActivateRole);


/**
 * Delete a specifed role
 */
router.delete('/roles/:roleId', roleController.deleteRole);


module.exports = router;