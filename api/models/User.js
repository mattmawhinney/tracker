/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

 //Associations: https://github.com/balderdashy/waterline-docs/blob/master/associations.md
 // https://github.com/balderdashy/sails/issues/124
 //has many projects
 //has many deliverable through projects 


module.exports = {

	//schema true only saves attributes listed specified in model to DB 

  schema: true,

  attributes: {

  	
  	
  	name: {
  		type: 'string',
  		required: true
  	},

  	title: {
  		type: 'string'
  	},

  	email: {
  		type: 'string',
  		email: true,
  		required: true,
  		unique: true
  	},

  	encryptedPassword: {
  		type: 'string'
  	}


  	// toJSON: function() {
   //    var obj = this.toObject();
   //    delete obj.password;
   //    delete obj.confirmation;
   //    delete obj.encryptedPassword;
   //    delete obj._csrf;
   //    return obj;
   //  }
    
  }

};
