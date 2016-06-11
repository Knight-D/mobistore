"use strict";

const mongoose = require('mongoose');

var config = require('./config');

const collectionSchema = {

	collectTime: {type: Date},
  enabled: {type: Boolean, default: true},

	client: {type: mongoose.Schema.Types.ObjectId, ref: 'StrClient'},
	product: {type: mongoose.Schema.Types.ObjectId, ref: 'StrProduct'},

}

module.exports = mongoose.Schema(collectionSchema, config.schemaOptions);
