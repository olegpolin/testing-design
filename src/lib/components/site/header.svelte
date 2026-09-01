<script lang="ts">
	import { page } from '$app/state';
	import { toggleMode } from 'mode-watcher';
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import MenuIcon from '@lucide/svelte/icons/menu';
	import XIcon from '@lucide/svelte/icons/x';
	import { Button } from '#lib/components/ui/button/index.js';
	import { nav, studio } from '#lib/site.js';

	let open = $state(false);
	let current = $derived(page.url.pathname);
</script>

<header class="border-b-8 border-ink bg-background">
	<div class="site-container flex h-20 items-center justify-between gap-6">
		<a href="/" class="flex items-center gap-3 font-display text-2xl font-semibold lowercase tracking-tight" aria-label="{studio.name} home">
			<span aria-hidden="true" class="size-4 bg-bauhaus-red"></span>
			{studio.name}
		</a>

		<nav class="hidden items-center gap-8 md:flex" aria-label="Primary">
			{#each nav as item (item.href)}
				<a
					href={item.href}
					aria-current={current.startsWith(item.href) ? 'page' : undefined}
					class="eyebrow py-2 underline-offset-8 decoration-2 hover:text-secondary aria-[current=page]:underline"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-2">
			<Button variant="ghost" size="icon" onclick={toggleMode} aria-label="Toggle colour scheme">
				<SunIcon class="dark:hidden" />
				<MoonIcon class="hidden dark:block" />
			</Button>
			<Button href="/contact" class="hidden md:inline-flex">Start a project</Button>
			<Button
				variant="outline"
				size="icon"
				class="md:hidden"
				onclick={() => (open = !open)}
				aria-expanded={open}
				aria-controls="mobile-nav"
				aria-label={open ? 'Close menu' : 'Open menu'}
			>
				{#if open}
					<XIcon />
				{:else}
					<MenuIcon />
				{/if}
			</Button>
		</div>
	</div>

	{#if open}
		<nav id="mobile-nav" class="border-t-2 border-ink md:hidden" aria-label="Primary mobile">
			{#each nav as item (item.href)}
				<a
					href={item.href}
					onclick={() => (open = false)}
					aria-current={current.startsWith(item.href) ? 'page' : undefined}
					class="site-container flex items-center justify-between border-b-2 border-ink py-5 font-display text-2xl uppercase tracking-wide aria-[current=page]:bg-accent aria-[current=page]:text-accent-foreground"
				>
					{item.label}
					<span aria-hidden="true" class="size-3 bg-bauhaus-blue"></span>
				</a>
			{/each}
			<div class="site-container py-5">
				<Button href="/contact" class="w-full" onclick={() => (open = false)}>Start a project</Button>
			</div>
		</nav>
	{/if}
</header>
