import type {GroConfigCreator, GroConfigPartial} from '@feltcoop/gro';

const files = ['lib/index.ts', 'lib/style.css'];

export const config: GroConfigCreator = async ({dev}) => {
	const partial: GroConfigPartial = {
		builds: [dev ? null : {name: 'library', platform: 'node', input: files}],
		types: false, // right now this is the primary thing we do for REPL compatibility
	};
	return partial;
};
