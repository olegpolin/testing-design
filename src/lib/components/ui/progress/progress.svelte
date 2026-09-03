<script lang="ts">
	import { Progress as ProgressPrimitive } from "bits-ui";
	import { cn, type WithoutChildrenOrChild } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		max = 100,
		value,
		indeterminate = false,
		...restProps
	}: WithoutChildrenOrChild<ProgressPrimitive.RootProps> & {
		indeterminate?: boolean;
	} = $props();

	const isIndeterminate = $derived(indeterminate || value === undefined || value === null);
</script>

<ProgressPrimitive.Root
	bind:ref
	data-slot="progress"
	class={cn("relative flex h-1.5 w-full items-center overflow-hidden rounded-full bg-md-surface-container-highest", className)}
	{value}
	{max}
	{...restProps}
>
	{#if isIndeterminate}
		<div class="h-full w-full flex-1 bg-transparent relative overflow-hidden">
			<div class="absolute inset-y-0 bg-primary rounded-full animate-indeterminate-short"></div>
		</div>
	{:else}
		<div
			data-slot="progress-indicator"
			class="h-full bg-primary rounded-full transition-all duration-300 ease-out"
			style="width: {Math.min(100, Math.max(0, (100 * (value ?? 0)) / (max ?? 1)))}%"
		></div>
	{/if}
</ProgressPrimitive.Root>
