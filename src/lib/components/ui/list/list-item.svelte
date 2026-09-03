<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";

	type Props = {
		class?: string;
		headline: string;
		supportingText?: string;
		overline?: string;
		lines?: 1 | 2 | 3;
		leading?: Snippet;
		trailing?: Snippet;
		trailingSupportingText?: string;
		onclick?: () => void;
		disabled?: boolean;
	};

	let {
		class: className,
		headline,
		supportingText,
		overline,
		lines = 2,
		leading,
		trailing,
		trailingSupportingText,
		onclick,
		disabled = false,
	}: Props = $props();
</script>

<svelte:element
	this={onclick ? "button" : "div"}
	type={onclick ? "button" : undefined}
	role={onclick ? undefined : "listitem"}
	onclick={disabled ? undefined : onclick}
	class={cn(
		"relative flex w-full items-center gap-4 px-4 py-2 transition-colors select-none text-left",
		lines === 1 && "min-h-14",
		lines === 2 && "min-h-18",
		lines === 3 && "min-h-22 items-start pt-3",
		onclick && "m3-state-layer cursor-pointer hover:bg-md-on-surface/8 active:bg-md-on-surface/12",
		disabled && "opacity-38 pointer-events-none",
		className
	)}
>
	{#if leading}
		<div class="flex size-10 shrink-0 items-center justify-center text-md-on-surface-variant">
			{@render leading()}
		</div>
	{/if}

	<div class="flex flex-1 flex-col justify-center overflow-hidden">
		{#if overline}
			<span class="text-[11px] font-semibold tracking-wider text-md-on-surface-variant uppercase">
				{overline}
			</span>
		{/if}

		<span class="truncate text-sm font-medium text-md-on-surface">
			{headline}
		</span>

		{#if supportingText}
			<span class={cn("text-xs text-md-on-surface-variant", lines === 3 ? "line-clamp-2" : "truncate")}>
				{supportingText}
			</span>
		{/if}
	</div>

	{#if trailing || trailingSupportingText}
		<div class="flex shrink-0 items-center gap-2 text-md-on-surface-variant">
			{#if trailingSupportingText}
				<span class="text-xs">{trailingSupportingText}</span>
			{/if}
			{#if trailing}
				{@render trailing()}
			{/if}
		</div>
	{/if}
</svelte:element>
