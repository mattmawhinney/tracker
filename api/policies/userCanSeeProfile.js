/**
 * Allow a logged-in user to see, edit and update her own profile
 * Allow admins to see everyone
 */

module.exports = function(req, res, ok) {

	//intro spect values forming sessionUserMatchesId
	// console.log(req.session.User.id, req.param('id'));

	//need to use parseInto to change string from param into integer for accurate comparison 
	var sessionUserMatchesId = req.session.User.id === parseInt(req.param('id'));
	var isAdmin = req.session.User.admin;

	//introspect variables used in control flow below 
	// console.log(sessionUserMatchesId, isAdmin)
	
	// The requested id does not match the user's id,
	// and this is not an admin
	if (!(sessionUserMatchesId || isAdmin)) {
		var noRightsError = [{name: 'noRights', message: 'You must be an admin.'}]
		req.session.flash = {
			err: noRightsError
		}
    res.redirect('/session/new');
    return;
	}

	ok();

};