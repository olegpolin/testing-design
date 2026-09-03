<script lang="ts">
	import { Slider as SliderPrimitive } from "bits-ui";
	import { cn, type WithoutChildrenOrChild } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		value = $bindable(),
		orientation = "horizontal",
		class: className,
		...restProps
	}: WithoutChildrenOrChild<SliderPrimitive.RootProps> = $props();
</script>

<!--
Discriminated Unions + Destructing (required for bindable) do not
get along, so we shut typescript up by casting `value` to `never`.
-->
<SliderPrimitive.Root
	bind:ref
	bind:value={value as never}
	data-slot="slider"
	{orientation}
	class={cn(
		"data-vertical:min-h-40 relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:w-auto data-vertical:flex-col",
		className
	)}
	{...restProps}
>
	{#snippet children({ thumbItems })}
		<span
			data-slot="slider-track"
			data-orientation={orientation}
			class={cn(
				"relative grow overflow-hidden rounded-full bg-md-surface-container-highest data-horizontal:h-4 data-horizontal:w-full data-vertical:h-full data-vertical:w-4"
			)}
		>
			<SliderPrimitive.Range
				data-slot="slider-range"
				class={cn(
					"absolute select-none bg-primary data-horizontal:h-full data-vertical:w-full"
				)}
			/>
		</span>
		{#each thumbItems as thumb (thumb.index)}
			<SliderPrimitive.Thumb
				data-slot="slider-thumb"
				index={thumb.index}
				class="relative block size-6 shrink-0 select-none rounded-full border-2 border-md-surface bg-primary shadow-elevation-2 transition-all hover:scale-110 focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:outline-none active:scale-110 disabled:pointer-events-none disabled:opacity-38"
			/>
		{/each}
	{/snippet}
</SliderPrimitive.Root>
