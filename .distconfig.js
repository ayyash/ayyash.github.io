
const devConfig = require('./.eleventy.js');
const fs = require('fs');

module.exports = function (eleventyConfig) {
	fs.rmSync('./dist', {recursive: true, force: true});

	const config = devConfig(eleventyConfig, true);

	eleventyConfig.addLayoutAlias('base', 'base.dist.html');
	// TODO: shortcode for header

	return {
		dir: {
			input: config.dir.input,
			output: "dist"
		},
		//   htmlTemplateEngine: "njk"
	}
};