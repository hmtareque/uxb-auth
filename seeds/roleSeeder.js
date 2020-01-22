const Role = require('../models/roleModel');

const roleSeeder = () => {

    const roles = ['Manager', 'Content Editor', 'SEO Manager'];

    const role = {
        client_id: '5e284cd0d506e523b361d10b',
        permissions: [],
        created_by: 1
    };

    roles.map((name) => {

role.name = name;



const newRole = new Role(role);
newRole.save();


console.info(newRole); 

    });

    
}

module.exports = { roleSeeder };