<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { Component, Snippet } from "svelte";

	export type RailItem = {
		id: string;
		label: string;
		icon: Component<{ class?: string }>;
		activeIcon?: Component<{ class?: string }>;
		badge?: string | number;
	};

	type Props = {
		class?: string;
		items: RailItem[];
		activeId: string;
		header?: Snippet;
		footer?: Snippet;
		onselect?: (id: string) => void;
	};

	let {
		class: className,
		items,
		activeId = $bindable(),
		header,
		footer,
		onselect,
	}: Props = $props();

	function handleSelect(id: string) {
		activeId = id;
		onselect?.(id);
	}
</script>

<aside
	class={cn(
		"flex h-full w-20 flex-col items-center justify-between border-r border-md-outline-variant/30 bg-md-surface-container-low py-4 select-none",
		className
	)}
	aria-label="Navigation rail"
>
	<div class="flex w-full flex-col items-center gap-4">
		{#if header}
			<div class="flex items-center justify-center">
				{@render header()}
			</div>
		{/if}

		<nav class="flex w-full flex-col items-center gap-2">
			{#each items as item (item.id)}
				{@const isActive = activeId === item.id}
				{@const Icon = isActive && item.activeIcon ? item.activeIcon : item.icon}
				<button
					type="button"
					onclick={() => handleSelect(item.id)}
					class="group relative flex w-full flex-col items-center justify-center gap-1 py-1.5 outline-none"
				>
					<div
						class={cn(
							"relative flex h-8 w-14 items-center justify-center rounded-full transition-all duration-200",
							isActive
								? "bg-secondary text-secondary-foreground"
								: "text-md-on-surface-variant group-hover:bg-md-on-surface/8 group-hover:text-md-on-surface"
						)}
					>
						<Icon class="size-5 transition-transform group-active:scale-95" />

						{#if item.badge !== undefined}
							<span
								class="absolute -top-1 right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-md-error px-1 text-[10px] font-bold text-md-on-error shadow-xs"
							>
								{item.badge}
							</span>
						{/if}
					</div>

					<span
						class={cn(
							"text-[11px] transition-colors",
							isActive
								? "font-semibold text-md-on-surface"
								: "font-medium text-md-on-surface-variant"
						)}
					>
						{item.label}
					</span>
				</button>
			{/each}
		</nav>
	</div>

	{#if footer}
		<div class="flex w-full flex-col items-center">
			{@render footer()}
		</div>
	{/if}
</aside>
