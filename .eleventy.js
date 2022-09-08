const fs = require('fs');


module.exports = function (eleventyConfig, forDist) {

	if (!forDist) {
		fs.rmSync('./_site', {recursive: true, force: true});

	}
	
	eleventyConfig.addPassthroughCopy("src/assets");

	return {
		dir: {
			input: "src"
		},
		//   htmlTemplateEngine: "njk"
	}
};