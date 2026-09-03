<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { Component } from "svelte";

	export type NavItem = {
		id: string;
		label: string;
		icon: Component<{ class?: string }>;
		activeIcon?: Component<{ class?: string }>;
		badge?: string | number;
	};

	type Props = {
		class?: string;
		items: NavItem[];
		activeId: string;
		onselect?: (id: string) => void;
	};

	let {
		class: className,
		items,
		activeId = $bindable(),
		onselect,
	}: Props = $props();

	function handleSelect(id: string) {
		activeId = id;
		onselect?.(id);
	}
</script>

<nav
	class={cn(
		"flex h-20 w-full items-center justify-around bg-md-surface-container px-2 border-t border-md-outline-variant/30 select-none shadow-elevation-2",
		className
	)}
	aria-label="Bottom navigation"
>
	{#each items as item (item.id)}
		{@const isActive = activeId === item.id}
		{@const Icon = isActive && item.activeIcon ? item.activeIcon : item.icon}
		<button
			type="button"
			onclick={() => handleSelect(item.id)}
			class="group relative flex flex-1 flex-col items-center justify-center gap-1 py-2 outline-none"
		>
			<div
				class={cn(
					"relative flex h-8 w-16 items-center justify-center rounded-full transition-all duration-200",
					isActive
						? "bg-secondary text-secondary-foreground"
						: "text-md-on-surface-variant group-hover:bg-md-on-surface/8 group-hover:text-md-on-surface"
				)}
			>
				<Icon class="size-5 transition-transform group-active:scale-95" />

				{#if item.badge !== undefined}
					<span
						class="absolute -top-1 right-3 flex h-4 min-w-4 items-center justify-center rounded-full bg-md-error px-1 text-[10px] font-bold text-md-on-error shadow-xs"
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
