const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Employee = new Schema(
	{
	    name: { type: String, required: true },
	    surname: { type: String, required: true },
	    salary: { type: Number, required: true },
	 },
     { timestamps: true },
)
	
module.exports = mongoose.model('users', Employee)