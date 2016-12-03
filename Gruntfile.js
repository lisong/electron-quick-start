module.exports = function(grunt) {
	grunt.initConfig({
		'create-windows-installer': {
			ia32: {
				appDirectory: './MyApp-win32-ia32',
				outputDirectory: './dist',
				name: 'MyApp',
				description: 'MyApp',
				authors: 'My Company Ltd',
				exe: 'MyApp.exe'
			}
		}
	});

	grunt.loadNpmTasks('grunt-electron-installer');
}