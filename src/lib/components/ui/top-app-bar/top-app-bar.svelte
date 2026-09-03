<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";

	type Props = {
		class?: string;
		title: string;
		subtitle?: string;
		variant?: "center" | "small" | "medium" | "large";
		leading?: Snippet;
		actions?: Snippet;
		elevated?: boolean;
	};

	let {
		class: className,
		title,
		subtitle,
		variant = "center",
		leading,
		actions,
		elevated = false,
	}: Props = $props();
</script>

<header
	class={cn(
		"w-full bg-md-surface transition-all select-none",
		elevated && "shadow-elevation-2 bg-md-surface-container",
		variant === "center" && "flex h-16 items-center justify-between px-4",
		variant === "small" && "flex h-16 items-center justify-between px-4",
		variant === "medium" && "flex flex-col justify-between p-4 min-h-28",
		variant === "large" && "flex flex-col justify-between p-4 min-h-38",
		className
	)}
>
	<div class="flex h-16 w-full items-center justify-between">
		<div class="flex items-center gap-3">
			{#if leading}
				<div class="flex size-10 items-center justify-center">
					{@render leading()}
				</div>
			{/if}

			{#if variant === "small"}
				<h1 class="text-lg font-semibold tracking-tight text-md-on-surface">{title}</h1>
			{/if}
		</div>

		{#if variant === "center"}
			<div class="absolute left-1/2 -translate-x-1/2 text-center pointer-events-none">
				<h1 class="text-base md:text-lg font-semibold tracking-tight text-md-on-surface">{title}</h1>
				{#if subtitle}
					<p class="text-xs text-md-on-surface-variant">{subtitle}</p>
				{/if}
			</div>
		{/if}

		{#if actions}
			<div class="flex items-center gap-1">
				{@render actions()}
			</div>
		{:else}
			<div class="w-10"></div>
		{/if}
	</div>

	{#if variant === "medium"}
		<div class="pt-2 pb-1">
			<h1 class="text-2xl font-bold tracking-tight text-md-on-surface">{title}</h1>
			{#if subtitle}
				<p class="text-xs text-md-on-surface-variant mt-0.5">{subtitle}</p>
			{/if}
		</div>
	{:else if variant === "large"}
		<div class="pt-4 pb-2">
			<h1 class="text-3xl font-extrabold tracking-tight text-md-on-surface">{title}</h1>
			{#if subtitle}
				<p class="text-sm text-md-on-surface-variant mt-1">{subtitle}</p>
			{/if}
		</div>
	{/if}
</header>
