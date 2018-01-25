function ConsoleLogOnBuildWebpackPlugin () {
};
//这是一个学习webpack插件而写的demo
ConsoleLogOnBuildWebpackPlugin.prototype.apply = function (compiler) {
	compiler.plugin('run', function(compiler, callback) {
		console.log("<----------- webpack 构建过程开始 ----------->");
		console.log("时间:",new Date(),'\n');
		callback();
	});
};

module.exports = ConsoleLogOnBuildWebpackPlugin;
