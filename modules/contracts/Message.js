var private = {}, self = null,
	library = null, modules = null;

function Message(cb, _library) {
	self = this;
	self.type = 7
	library = _library;
	cb(null, self);
}

Message.prototype.create = function (data, trs) {
    // recipient
    trs.recipientId = data.recipientId;

    // Create transaction container
    trs.asset = {
        message: new Buffer(data.message, 'utf8').toString('hex') // Save message as hex string
    };

    return trs;
}

Message.prototype.calculateFee = function (trs) {
    return 100000000;
}

Message.prototype.verify = function (trs, sender, cb, scope) {
    // Check if message length is greater than 320 characters
    if (trs.asset.message.length > 320) {
        return setImmediate(cb, "Max length of message is 320 characters.");
    }

    setImmediate(cb, null, trs);
}

Message.prototype.getBytes = function (trs) {
    return new Buffer(trs.asset.message, 'hex');
}

Message.prototype.apply = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Message.prototype.undo = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Message.prototype.applyUnconfirmed = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Message.prototype.undoUnconfirmed = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Message.prototype.ready = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

Message.prototype.save = function (trs, cb) {
	setImmediate(cb);
}

Message.prototype.dbRead = function (row) {
	return null;
}

Message.prototype.normalize = function (asset, cb) {
    // Call validator on our asset object
    library.validator.validate(asset, {
        type: "object", // It is an object
        properties: {
            message: { // It contains a message property
                type: "string", // It is a string
                format: "hex", // It is in a hexadecimal format
                minLength: 1 // Minimum length of string is 1 character
            }
        },
        required: ["message"] // Message property is required and must be defined
    }, cb);
}

Message.prototype.onBind = function (_modules) {
	modules = _modules;
	modules.logic.transaction.attachAssetType(self.type, self);
}

module.exports = Message;
