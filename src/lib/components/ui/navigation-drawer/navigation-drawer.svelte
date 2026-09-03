<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { Component, Snippet } from "svelte";

	export type DrawerItem = {
		id: string;
		label: string;
		icon: Component<{ class?: string }>;
		badge?: string | number;
		section?: string;
	};

	type Props = {
		class?: string;
		headline?: string;
		items: DrawerItem[];
		activeId: string;
		header?: Snippet;
		footer?: Snippet;
		onselect?: (id: string) => void;
	};

	let {
		class: className,
		headline = "Material 3",
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

	// Group items by section
	const groupedItems = $derived(() => {
		const groups: { section?: string; items: DrawerItem[] }[] = [];
		let currentSection: string | undefined = undefined;
		let currentList: DrawerItem[] = [];

		for (const item of items) {
			if (item.section !== currentSection) {
				if (currentList.length > 0) {
					groups.push({ section: currentSection, items: currentList });
				}
				currentSection = item.section;
				currentList = [item];
			} else {
				currentList.push(item);
			}
		}
		if (currentList.length > 0) {
			groups.push({ section: currentSection, items: currentList });
		}
		return groups;
	});
</script>

<aside
	class={cn(
		"flex h-full w-72 flex-col justify-between rounded-r-3xl border-r border-md-outline-variant/30 bg-md-surface-container-low p-3 select-none",
		className
	)}
	aria-label="Navigation drawer"
>
	<div class="flex flex-col gap-2">
		{#if header}
			<div class="px-3 py-2">
				{@render header()}
			</div>
		{:else if headline}
			<div class="px-4 py-3">
				<h2 class="text-base font-bold text-md-on-surface">{headline}</h2>
			</div>
		{/if}

		<nav class="flex flex-col gap-4">
			{#each groupedItems() as group}
				<div class="flex flex-col gap-1">
					{#if group.section}
						<div class="px-4 pt-3 pb-1 text-xs font-semibold tracking-wider text-md-on-surface-variant uppercase">
							{group.section}
						</div>
					{/if}

					{#each group.items as item (item.id)}
						{@const isActive = activeId === item.id}
						{@const Icon = item.icon}
						<button
							type="button"
							onclick={() => handleSelect(item.id)}
							class={cn(
								"m3-state-layer relative flex h-14 w-full items-center gap-4 rounded-full px-4 text-sm font-medium transition-all duration-200 outline-none",
								isActive
									? "bg-secondary text-secondary-foreground font-semibold shadow-elevation-1"
									: "text-md-on-surface-variant hover:bg-md-on-surface/8 hover:text-md-on-surface"
							)}
						>
							<Icon class="size-5 shrink-0" />
							<span class="flex-1 text-left">{item.label}</span>

							{#if item.badge !== undefined}
								<span
									class={cn(
										"flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-semibold",
										isActive
											? "bg-primary text-on-primary"
											: "bg-md-surface-container-highest text-md-on-surface"
									)}
								>
									{item.badge}
								</span>
							{/if}
						</button>
					{/each}
				</div>
			{/each}
		</nav>
	</div>

	{#if footer}
		<div class="border-t border-md-outline-variant/30 px-3 pt-3">
			{@render footer()}
		</div>
	{/if}
</aside>
