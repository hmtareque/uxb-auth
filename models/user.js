const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
   role_id: { type: Schema.Types.ObjectId, ref: 'Role', required: true },
   title: { type: String, default: null },
   first_name: { type: String, required: true },
   last_name: { type: String, required: true },
   email: { type: String, required: true },
   mobile: { type: String,  require: true }, //default: null
   password: { type: String, required: true },
   status: { type: String, require: true },
   test: {type: Number, require: true},
   last_logged_in_at: {
      time: { type: Date, default: null },
      location: { 
         lat: {type: Number, default: null},
         lng: {type: Number, default: null}
      }
   },
   created_at: { type: Date, default: Date.now() },
   created_by: { type: Number, default: null },
   updated_at: { type: Date, default: null },
   updated_by: { type: Number, default: null },
   deleted_at: { type: Date, default: null },
   deleted_by: { type: Number, default: null }
});

userSchema.statics = {
   isValid(id) {
      return this.findById(id)
         .then(user => {
            if (!user) {
               return Promise.reject('User not found');
            }
         })
   },
   
   /**
    * Check email already exist or not for the user 
    * 
    * @param String email 
    */
   isEmailAlreadyExist(email) {
      return this.exists({ email: email, deleted_at: null })
         .then(user => {
            if (user) {
               return Promise.reject('E-mail already in use');
            }
         })
   },
}

module.exports = mongoose.model('User', userSchema);