module.exports = function(grunt) {
	grunt.initConfig({
		'create-windows-installer': {
			ia32: {
				appDirectory: './electron-quick-start-win32-ia32',
				outputDirectory: './dist',
				name: 'MyApp',
				description: 'MyApp',
				authors: 'My Company Ltd',
				exe: 'electron-quick-start.exe'
			}
		}
	});

	grunt.loadNpmTasks('grunt-electron-installer');
}