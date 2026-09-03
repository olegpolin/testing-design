<script lang="ts">
	import { Switch as SwitchPrimitive } from "bits-ui";
	import { cn, type WithoutChildrenOrChild } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		checked = $bindable(false),
		showIcons = false,
		size = "default",
		...restProps
	}: WithoutChildrenOrChild<SwitchPrimitive.RootProps> & {
		size?: "sm" | "default";
		showIcons?: boolean;
	} = $props();
</script>

<SwitchPrimitive.Root
	bind:ref
	bind:checked
	data-slot="switch"
	data-size={size}
	class={cn(
		"peer group/switch relative inline-flex shrink-0 items-center rounded-full transition-all duration-200 outline-none select-none",
		"data-[size=default]:h-8 data-[size=default]:w-13 data-[size=sm]:h-6 data-[size=sm]:w-10",
		"data-checked:bg-primary data-checked:border-primary",
		"data-unchecked:bg-md-surface-container-highest data-unchecked:border-2 data-unchecked:border-md-outline",
		"focus-visible:ring-3 focus-visible:ring-primary/40 data-disabled:cursor-not-allowed data-disabled:opacity-38",
		className
	)}
	{...restProps}
>
	<SwitchPrimitive.Thumb
		data-slot="switch-thumb"
		class={cn(
			"pointer-events-none flex items-center justify-center rounded-full transition-all duration-200",
			// Checked state: larger 24px thumb
			"group-data-checked/switch:bg-on-primary group-data-checked/switch:text-primary",
			"group-data-[size=default]/switch:group-data-checked/switch:size-6 group-data-[size=default]/switch:group-data-checked/switch:translate-x-[22px]",
			"group-data-[size=sm]/switch:group-data-checked/switch:size-4.5 group-data-[size=sm]/switch:group-data-checked/switch:translate-x-[18px]",
			// Unchecked state: 16px thumb (without icons) or 20px (with icons)
			"group-data-unchecked/switch:bg-md-outline group-data-unchecked/switch:text-md-surface-container-highest",
			showIcons
				? "group-data-[size=default]/switch:group-data-unchecked/switch:size-6 group-data-[size=default]/switch:group-data-unchecked/switch:translate-x-1"
				: "group-data-[size=default]/switch:group-data-unchecked/switch:size-4 group-data-[size=default]/switch:group-data-unchecked/switch:translate-x-1.5",
			"group-data-[size=sm]/switch:group-data-unchecked/switch:size-3.5 group-data-[size=sm]/switch:group-data-unchecked/switch:translate-x-1"
		)}
	>
		{#if showIcons}
			{#if checked}
				<svg class="size-3.5 stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<polyline points="20 6 9 17 4 12"></polyline>
				</svg>
			{:else}
				<svg class="size-3 stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			{/if}
		{/if}
	</SwitchPrimitive.Thumb>
</SwitchPrimitive.Root>
