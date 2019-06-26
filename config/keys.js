//module.exports-making the object avilable outside of the file
module.exports = {
	//connect to mongoDB
	mongoURI: 'mongodb://alex:a123456@ds139435.mlab.com:39435/mernstack',
	//we can choose any text we want for the jwt
	secretOrKey: 'secret',
};
