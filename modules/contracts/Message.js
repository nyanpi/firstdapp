var private = {}, self = null,
	library = null, modules = null;

function Message(cb, _library) {
	self = this;
	self.type = 7
	library = _library;
	cb(null, self);
}

Message.prototype.create = function (data, trs) {
	return trs;
}

Message.prototype.calculateFee = function (trs) {
	return 0;
}

Message.prototype.verify = function (trs, sender, cb, scope) {
	setImmediate(cb, null, trs);
}

Message.prototype.getBytes = function (trs) {
	return null;
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
	setImmediate(cb);
}

Message.prototype.onBind = function (_modules) {
	modules = _modules;
	modules.logic.transaction.attachAssetType(self.type, self);
}

module.exports = Message;
