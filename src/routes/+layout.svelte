<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '#lib/components/ui/sonner/index.js';
	import { Footer, Header } from '#lib/components/site/index.js';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher defaultMode="light" />

<Toaster richColors />

<a
	href="#main"
	class="eyebrow sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-bauhaus-yellow focus:px-4 focus:py-3 focus:text-ink"
>
	Skip to content
</a>

<div class="flex min-h-svh flex-col">
	<Header />
	<main id="main" class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
