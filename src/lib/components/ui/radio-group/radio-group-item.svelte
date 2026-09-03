<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
	import CircleIcon from '@lucide/svelte/icons/circle';
	import { cn, type WithoutChildrenOrChild } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithoutChildrenOrChild<RadioGroupPrimitive.ItemProps> = $props();
</script>

<RadioGroupPrimitive.Item
	bind:ref
	data-slot="radio-group-item"
	class={cn(
		"m3-state-layer relative flex size-5 items-center justify-center rounded-full transition-all duration-200 outline-none select-none",
		"border-2 border-md-outline hover:border-primary",
		"data-checked:border-primary data-checked:text-primary",
		"focus-visible:ring-3 focus-visible:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-38",
		className
	)}
	{...restProps}
>
	{#snippet children({ checked })}
		<div data-slot="radio-group-indicator" class="flex size-full items-center justify-center">
			{#if checked}
				<div class="size-2.5 rounded-full bg-primary animate-in zoom-in-50 duration-150"></div>
			{/if}
		</div>
	{/snippet}
</RadioGroupPrimitive.Item>
