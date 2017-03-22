KindEditor.plugin('greater', function(K) {
	var self = this;
	var name = 'greater';
	var symbolHtml = K.undef(self.symbolHtml, '≥');

	self.clickToolbar(name, function() {
		var cmd = self.cmd, range = cmd.range;
		self.focus();
		self.insertHtml(symbolHtml);
	});
});
