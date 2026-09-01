<script lang="ts">
	import { cn } from '#lib/utils.js';
	import type { ShapeColor, ShapeKind } from '#lib/site.js';

	interface Props {
		kind?: ShapeKind;
		color?: ShapeColor;
		class?: string;
	}

	let { kind = 'circle', color = 'yellow', class: className }: Props = $props();

	const colors: Record<ShapeColor, string> = {
		red: 'bg-bauhaus-red',
		blue: 'bg-bauhaus-blue',
		yellow: 'bg-bauhaus-yellow',
		ink: 'bg-ink',
		paper: 'bg-paper'
	};

	const kinds: Record<ShapeKind, string> = {
		circle: 'rounded-full',
		square: '',
		triangle: '[clip-path:polygon(50%_0,100%_100%,0_100%)]',
		half: 'rounded-t-full'
	};
</script>

<div aria-hidden="true" class={cn('shrink-0', colors[color], kinds[kind], className)}></div>
