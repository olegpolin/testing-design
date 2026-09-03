<script lang="ts">
	import { cn } from "#lib/utils.js";
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import type { Snippet } from "svelte";

	type Props = {
		class?: string;
		label: string;
		leadingIcon?: Snippet;
		variant?: "filled" | "tonal" | "elevated" | "outlined";
		onclick?: () => void;
		onMenuToggle?: () => void;
		disabled?: boolean;
	};

	let {
		class: className,
		label,
		leadingIcon,
		variant = "filled",
		onclick,
		onMenuToggle,
		disabled = false,
	}: Props = $props();

	const variantStyles = {
		filled: "bg-primary text-on-primary divider-primary-dark",
		tonal: "bg-secondary text-secondary-foreground",
		elevated: "bg-md-surface-container-low text-primary shadow-elevation-1",
		outlined: "border border-md-outline-variant bg-transparent text-primary",
	};
</script>

<div
	class={cn(
		"inline-flex h-10 items-center rounded-full overflow-hidden select-none",
		variantStyles[variant],
		disabled && "pointer-events-none opacity-38",
		className
	)}
>
	<button
		type="button"
		{disabled}
		onclick={onclick}
		class="m3-state-layer flex h-full items-center gap-2 pl-5 pr-3 text-sm font-medium outline-none transition-colors hover:bg-current/8"
	>
		{#if leadingIcon}
			<span class="size-4 shrink-0 flex items-center justify-center">
				{@render leadingIcon()}
			</span>
		{/if}
		<span>{label}</span>
	</button>

	<div class="h-5 w-[1px] bg-current/20"></div>

	<button
		type="button"
		{disabled}
		onclick={onMenuToggle}
		aria-label="More actions"
		class="m3-state-layer flex h-full items-center justify-center px-3 outline-none transition-colors hover:bg-current/8"
	>
		<ChevronDownIcon class="size-4" />
	</button>
</div>
