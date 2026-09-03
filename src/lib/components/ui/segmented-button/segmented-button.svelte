<script lang="ts">
	import { cn } from "#lib/utils.js";
	import CheckIcon from '@lucide/svelte/icons/check';
	import type { Component } from "svelte";

	export type SegmentOption = {
		id: string;
		label: string;
		icon?: Component<{ class?: string }>;
		disabled?: boolean;
	};

	type Props = {
		class?: string;
		options: SegmentOption[];
		selected: string | string[];
		multi?: boolean;
		onchange?: (selected: string | string[]) => void;
	};

	let {
		class: className,
		options,
		selected = $bindable(),
		multi = false,
		onchange,
	}: Props = $props();

	function isSelected(id: string): boolean {
		if (Array.isArray(selected)) {
			return selected.includes(id);
		}
		return selected === id;
	}

	function toggleOption(id: string) {
		if (multi) {
			const current = Array.isArray(selected) ? [...selected] : [selected as string];
			const index = current.indexOf(id);
			if (index > -1) {
				current.splice(index, 1);
			} else {
				current.push(id);
			}
			selected = current;
			onchange?.(current);
		} else {
			selected = id;
			onchange?.(id);
		}
	}
</script>

<div
	class={cn(
		"inline-flex h-10 items-center rounded-full border border-md-outline-variant p-0 overflow-hidden select-none bg-md-surface",
		className
	)}
	role="group"
>
	{#each options as option, i (option.id)}
		{@const active = isSelected(option.id)}
		{@const Icon = option.icon}
		<button
			type="button"
			disabled={option.disabled}
			onclick={() => toggleOption(option.id)}
			class={cn(
				"m3-state-layer relative flex h-full flex-1 items-center justify-center gap-2 px-4 text-xs font-medium transition-all duration-200 outline-none",
				i > 0 && "border-l border-md-outline-variant",
				active
					? "bg-secondary text-secondary-foreground font-semibold"
					: "text-md-on-surface hover:bg-md-on-surface/8",
				option.disabled && "pointer-events-none opacity-38"
			)}
		>
			{#if active}
				<CheckIcon class="size-4 text-secondary-foreground animate-in zoom-in-50 duration-150" />
			{:else if Icon}
				<Icon class="size-4 text-md-on-surface-variant" />
			{/if}
			<span>{option.label}</span>
		</button>
	{/each}
</div>
