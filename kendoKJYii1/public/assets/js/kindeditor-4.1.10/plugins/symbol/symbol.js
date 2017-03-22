KindEditor.plugin('symbol', function(K) {
	var self = this;
	var name = 'symbol';
	var symbolHtml = K.undef(self.symbolHtml, '±');

	self.clickToolbar(name, function() {
		var cmd = self.cmd, range = cmd.range;
		self.focus();
		self.insertHtml(symbolHtml);
	});
});
