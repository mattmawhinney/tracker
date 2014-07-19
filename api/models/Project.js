/**
* Project.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/


// belongs to many users aliased as contributors
//has many deliverables


module.exports = {

  attributes: {

  	

  	name: {
  		type: 'string',
  		required: true
  	},

  	description: {
  		type: 'string',
  		required: true
  	},

  	startDate: {
  		type: 'date',
  		required: true
  	},

  	endDate: {
  		type: 'date',
  		required: true
  	},

  	phase : {
  		type: 'date'

  	}



  }
};

