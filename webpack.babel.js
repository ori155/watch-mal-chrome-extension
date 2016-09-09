module.exports = {
	"presets": ["react"],
	"plugins": [
//		"transform-async-to-generator",
		"syntax-async-functions",
		["transform-regenerator", {
		        asyncGenerators: false, // true by default
		        generators: false, // true by default
		        async: true // true by default
		    }]

		]
}
