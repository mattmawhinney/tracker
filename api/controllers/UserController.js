/**
 * UserController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */

  'new': function (req, res) {
  	res.view();
  },


  create: function (req, res, next) {

	  // Create a User with the params sent from 
	  // the sign-up form --> new.ejs
	  User.create( req.params.all(), function userCreated (err, user) {
	      
	      // // If there's an error
	      // if (err) return next(err);

	      if (err) {
	        // console.log(err);
	        req.session.flash = {
	          err: err
	        }

	        // If error redirect back to sign-up page
	        return res.redirect('/user/new');
	      }

	      // After successfully creating the user
	      // redirect to the show action
	      // From ep1-6: //res.json(user); 

	      res.json(user);
	      // res.redirect('/user/show/'+user.id);
	  });
	},
  

};
