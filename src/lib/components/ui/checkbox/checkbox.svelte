<script lang="ts">
	import { Checkbox as CheckboxPrimitive } from "bits-ui";
	import CheckIcon from '@lucide/svelte/icons/check';
	import MinusIcon from '@lucide/svelte/icons/minus';
	import { cn, type WithoutChildrenOrChild } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		checked = $bindable(false),
		indeterminate = $bindable(false),
		class: className,
		...restProps
	}: WithoutChildrenOrChild<CheckboxPrimitive.RootProps> = $props();
</script>

<CheckboxPrimitive.Root
	bind:ref
	data-slot="checkbox"
	class={cn(
		"m3-state-layer relative flex size-5 items-center justify-center rounded-[4px] transition-all duration-200 outline-none select-none",
		"border-2 border-md-outline hover:border-primary",
		"data-checked:border-primary data-checked:bg-primary data-checked:text-on-primary",
		"data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-on-primary",
		"focus-visible:ring-3 focus-visible:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-38",
		className
	)}
	bind:checked
	bind:indeterminate
	{...restProps}
>
	{#snippet children({ checked, indeterminate })}
		<div
			data-slot="checkbox-indicator"
			class="[&>svg]:size-3.5 grid place-content-center text-current transition-none"
		>
			{#if checked}
				<CheckIcon  />
			{:else if indeterminate}
				<MinusIcon  />
			{/if}
		</div>
	{/snippet}
</CheckboxPrimitive.Root>
