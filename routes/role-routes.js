const express = require('express');

const router = express.Router();
const RoleController = require('../controllers/role-controller');

//Request 
const storeRoleRequest = require('../requests/roles/store-role-request');
const updateRoleRequest = require('../requests/roles/update-role-request');
const ActivateRoleRequest = require('../requests/ActivateRoleRequest');

/**
 * Supply a specified role
 */
router.get('/roles/:roleId', RoleController.getRole);

/**
 * Supply the list of all roles
 */
router.get('/roles', RoleController.getRoles);

/**
 * Store newly created role
 */ 
router.post('/roles', storeRoleRequest.validate(), RoleController.storeRole);


/**
 * Update a specified role
 */
router.put('/roles/:role_id', RoleController.updateRole);


/**
 * Delete a specifed role
 */
router.put('/roles/:role_id/activate', ActivateRoleRequest.validate(), RoleController.ActivateRole);


/**
 * Delete a specifed role
 */
router.delete('/roles/:roleId', RoleController.deleteRole);


module.exports = router;