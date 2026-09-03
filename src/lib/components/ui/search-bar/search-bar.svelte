<script lang="ts">
	import { cn } from "#lib/utils.js";
	import SearchIcon from '@lucide/svelte/icons/search';
	import MicIcon from '@lucide/svelte/icons/mic';
	import XIcon from '@lucide/svelte/icons/x';
	import SlidersHorizontalIcon from '@lucide/svelte/icons/sliders-horizontal';

	type Props = {
		class?: string;
		placeholder?: string;
		value?: string;
		showFilter?: boolean;
		showVoice?: boolean;
		onSearch?: (query: string) => void;
		onFilter?: () => void;
	};

	let {
		class: className,
		placeholder = "Search showcase components...",
		value = $bindable(""),
		showFilter = true,
		showVoice = true,
		onSearch,
		onFilter,
	}: Props = $props();

	let isFocused = $state(false);

	function handleClear() {
		value = "";
		onSearch?.("");
	}
</script>

<div
	class={cn(
		"relative flex h-14 w-full items-center gap-3 rounded-full bg-md-surface-container-high px-4 text-md-on-surface shadow-elevation-1 transition-all duration-200 hover:shadow-elevation-2",
		isFocused && "shadow-elevation-3 ring-2 ring-primary bg-md-surface-container-highest",
		className
	)}
>
	<div class="flex size-6 shrink-0 items-center justify-center text-md-on-surface-variant">
		<SearchIcon class="size-5" />
	</div>

	<input
		type="text"
		bind:value
		{placeholder}
		onfocus={() => (isFocused = true)}
		onblur={() => (isFocused = false)}
		oninput={() => onSearch?.(value)}
		class="w-full bg-transparent text-base md:text-sm text-md-on-surface placeholder:text-md-on-surface-variant/70 outline-none"
	/>

	{#if value.length > 0}
		<button
			type="button"
			onclick={handleClear}
			aria-label="Clear search"
			class="m3-state-layer flex size-8 shrink-0 items-center justify-center rounded-full text-md-on-surface-variant hover:bg-md-on-surface/8"
		>
			<XIcon class="size-4" />
		</button>
	{/if}

	{#if showVoice}
		<button
			type="button"
			aria-label="Voice search"
			class="m3-state-layer flex size-9 shrink-0 items-center justify-center rounded-full text-md-on-surface-variant hover:bg-md-on-surface/8"
		>
			<MicIcon class="size-5" />
		</button>
	{/if}

	{#if showFilter}
		<button
			type="button"
			onclick={onFilter}
			aria-label="Search filters"
			class="m3-state-layer flex size-9 shrink-0 items-center justify-center rounded-full text-md-on-surface-variant hover:bg-md-on-surface/8"
		>
			<SlidersHorizontalIcon class="size-5" />
		</button>
	{/if}
</div>
