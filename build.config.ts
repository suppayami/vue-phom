import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
	entries: ['src/index'],
	clean: true,
	declaration: true,
	externals: ['vue'],
	rollup: {
		emitCJS: true,
		inlineDependencies: true,
		dts: {
			respectExternal: true,
		},
	},
})
