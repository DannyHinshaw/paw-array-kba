const gulp = require("gulp");
const ts = require("gulp-typescript");
const concat = require("gulp-concat-util");
const minify = require("gulp-minify");
const del = require("del");
const replace = require("gulp-replace");


// Gulp sequence steps
const CONCAT_STEP = "concat-ts";
const COMPILE_STEP = "compile-ts";
const CLEANUP_STEP = "cleanup-tmp";

// Files/Dirs
const OUT_FILE = "ArrayKBA.ts";
const OUT_DIR = "dist/";
const TMP_DIR = "tmp/";

//
/**
 * Concat the ts files into one in a temp directory and remove export/module refs, as they break PAW
 * (if this Regex gets unwieldy look into acorn-js).
 */
gulp.task(CONCAT_STEP, () => {
	return gulp.src([
		"src/**/*.ts",
		"!src/**/*.test.ts"
	]).pipe(concat(OUT_FILE))
		.pipe(replace(/(export|import) {(.*?)}( from (?='|"[a-zA-Z-/.*]+'|").*?)?;/gs, ""))
		.pipe(replace(/^\s*export /gm, " ")) // remove inline exports (export const foo = ...)
		.pipe(gulp.dest(TMP_DIR));
});

/**
 * Compile the single typescript file to js and move it to dist folder.
 */
gulp.task(COMPILE_STEP, () => {
	const tsProject = ts.createProject("tsconfig.json");
	tsProject.config.include = [TMP_DIR + OUT_FILE];
	const result = tsProject.src().pipe(tsProject());

	return result.js
		.pipe(minify({
			ext: {
				min: ".js"
			},
			noSource: true
		}))
		.pipe(gulp.dest(OUT_DIR));
});

/**
 * Remove the temp staging directory.
 */
gulp.task(CLEANUP_STEP, () => {
	return del("tmp/", {
		force: true
	});
});

/**
 * Run full pipeline.
 */
gulp.task("default", gulp.series(
	CONCAT_STEP,
	COMPILE_STEP,
	CLEANUP_STEP
));
