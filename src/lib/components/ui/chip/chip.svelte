<script lang="ts">
	import { cn } from "#lib/utils.js";
	import CheckIcon from '@lucide/svelte/icons/check';
	import XIcon from '@lucide/svelte/icons/x';
	import type { Snippet } from "svelte";

	type Props = {
		class?: string;
		variant?: "assist" | "filter" | "input" | "suggestion";
		elevated?: boolean;
		selected?: boolean;
		disabled?: boolean;
		label: string;
		leadingIcon?: Snippet;
		avatarUrl?: string;
		onRemove?: () => void;
		onclick?: () => void;
	};

	let {
		class: className,
		variant = "assist",
		elevated = false,
		selected = $bindable(false),
		disabled = false,
		label,
		leadingIcon,
		avatarUrl,
		onRemove,
		onclick,
	}: Props = $props();

	function handleClick() {
		if (disabled) return;
		if (variant === "filter") {
			selected = !selected;
		}
		onclick?.();
	}
</script>

<svelte:element
	this={onRemove ? "div" : "button"}
	role="button"
	tabindex={disabled ? -1 : 0}
	onclick={handleClick}
	onkeydown={(e: KeyboardEvent) => {
		if (onRemove && (e.key === "Enter" || e.key === " ")) {
			e.preventDefault();
			handleClick();
		}
	}}
	aria-disabled={disabled}
	class={cn(
		"m3-state-layer group/chip relative inline-flex h-8 items-center gap-2 rounded-lg px-3 text-xs font-medium transition-all duration-150 outline-none select-none cursor-pointer",
		// Flat vs Elevated
		elevated
			? "bg-md-surface-container-low shadow-elevation-1 hover:shadow-elevation-2"
			: "border border-md-outline-variant bg-transparent",
		// Variant specific styling
		variant === "filter" && selected && [
			"border-transparent bg-secondary text-secondary-foreground font-semibold shadow-none",
			elevated && "bg-secondary text-secondary-foreground shadow-elevation-1"
		],
		!selected && "text-md-on-surface hover:bg-md-on-surface/8",
		disabled && "pointer-events-none opacity-38",
		className
	)}
>
	{#if variant === "filter" && selected}
		<CheckIcon class="size-4 text-secondary-foreground animate-in zoom-in-50 duration-150" />
	{:else if avatarUrl}
		<img src={avatarUrl} alt="" class="size-5 rounded-full object-cover -ml-1" />
	{:else if leadingIcon}
		<span class="size-4 text-md-on-surface-variant flex items-center justify-center shrink-0 -ml-0.5">
			{@render leadingIcon()}
		</span>
	{/if}

	<span>{label}</span>

	{#if variant === "input" && onRemove}
		<button
			type="button"
			onclick={(e) => {
				e.stopPropagation();
				onRemove();
			}}
			aria-label="Remove chip"
			class="flex size-4 items-center justify-center rounded-full hover:bg-md-on-surface/12 -mr-1 cursor-pointer"
		>
			<XIcon class="size-3" />
		</button>
	{/if}
</svelte:element>
