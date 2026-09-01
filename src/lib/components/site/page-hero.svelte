<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ShapeColor, ShapeKind } from '#lib/site.js';
	import Shape from './shape.svelte';

	interface Props {
		eyebrow: string;
		title: string;
		shape?: ShapeKind;
		color?: ShapeColor;
		children?: Snippet;
	}

	let { eyebrow, title, shape = 'circle', color = 'yellow', children }: Props = $props();
</script>

<section class="relative overflow-hidden border-b-8 border-ink">
	<Shape
		kind={shape}
		{color}
		class="absolute -top-[6vw] -right-[8vw] size-[46vw] md:-top-[8vw] md:-right-[4vw] md:size-[30vw]"
	/>
	<div class="site-container relative grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-10 py-16 md:py-28">
		<div class="col-span-12 flex flex-col gap-8">
			<p class="eyebrow">{eyebrow}</p>
			<h1 class="display max-w-[10ch] text-[clamp(3.25rem,10vw,9.5rem)]">{title}</h1>
		</div>
		{#if children}
			<div class="col-span-12 md:col-span-5 md:col-start-8">
				<div class="max-w-[38ch] text-lg leading-relaxed">
					{@render children()}
				</div>
			</div>
		{/if}
	</div>
</section>
