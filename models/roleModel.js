const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roleSchema = new Schema({
   name: { type: String, required: true },
   authorizations: { type: Array, required: true },
   active: { type: Boolean, default: true },
   users: [
      {
         type: Schema.Types.ObjectId,
         ref: 'User'
       }
   ],
   created_at: { type: Date, default: Date.now() },
   created_by: { type: Number },
   updated_at: { type: Date, default: null },
   updated_by: { type: Number, default: null },
   deleted_at: { type: Date, default: null },
   deleted_by: { type: Number, default: null }
});

roleSchema.statics = {
   isValid(role_id) {
      return this.findById(role_id)
         .then(role => {
            if (!role) {
               return Promise.reject('Role not found');
            }
         })
   },

   isNameAlreadyExist(name) {
      return this.exists({ name: name, deleted_at: null })
         .then(role => {
            if (role) {
               return Promise.reject('Role name already in use');
            }
         })
   },

//    permitted(permissions, module, action) {
//       console.log(permitted(role.permissions, 'roles', 'update'));
//       const data = permissions.find(item => item[module] !== undefined);
//       if(data !== undefined) {
//           const permitted = data[module].find(permission => permission === action);
//           return (permitted !== undefined) ? true : false;
//       }
//       return false;
//   }
}

module.exports = mongoose.model('Role', roleSchema);