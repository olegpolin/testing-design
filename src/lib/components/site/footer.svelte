<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Button } from '#lib/components/ui/button/index.js';
	import { Input } from '#lib/components/ui/input/index.js';
	import { contact, nav, studio } from '#lib/site.js';
	import Shape from './shape.svelte';

	let email = $state('');
	const year = new Date().getFullYear();

	function subscribe(event: SubmitEvent) {
		event.preventDefault();
		if (!email) return;
		toast.success('Subscribed', { description: `We will write to ${email} four times a year.` });
		email = '';
	}
</script>

<footer class="bg-ink text-paper">
	<div class="site-container grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-12 py-16 md:py-24">
		<div class="col-span-12 flex flex-col gap-4 md:col-span-4">
			<p class="eyebrow opacity-70">Studio</p>
			<address class="flex flex-col gap-1 text-base not-italic">
				{#each contact.address as line (line)}
					<span>{line}</span>
				{/each}
			</address>
			<a href="mailto:{contact.email}" class="rule-link hover:text-bauhaus-yellow">{contact.email}</a>
			<a href="tel:{contact.phone.replace(/\s/g, '')}" class="rule-link hover:text-bauhaus-yellow">{contact.phone}</a>
		</div>

		<nav class="col-span-6 flex flex-col gap-3 md:col-span-2" aria-label="Footer">
			<p class="eyebrow opacity-70">Site</p>
			{#each nav as item (item.href)}
				<a href={item.href} class="hover:text-bauhaus-yellow">{item.label}</a>
			{/each}
		</nav>

		<div class="col-span-6 flex flex-col gap-3 md:col-span-2">
			<p class="eyebrow opacity-70">Elsewhere</p>
			{#each contact.socials as social (social.label)}
				<a href={social.href} rel="noreferrer" class="hover:text-bauhaus-yellow">{social.label}</a>
			{/each}
		</div>

		<form class="col-span-12 flex flex-col gap-4 md:col-span-4" onsubmit={subscribe}>
			<label for="newsletter-email" class="eyebrow opacity-70">Four letters a year</label>
			<div class="flex items-end gap-3">
				<Input
					id="newsletter-email"
					type="email"
					name="email"
					required
					autocomplete="email"
					placeholder="you@company.com"
					bind:value={email}
					class="border-paper text-paper placeholder:text-paper/50 focus-visible:border-bauhaus-yellow"
				/>
				<Button type="submit" variant="outline" class="shrink-0 border-paper text-paper hover:border-bauhaus-yellow">Sign up</Button>
			</div>
		</form>
	</div>

	<div class="site-container overflow-hidden">
		<p aria-hidden="true" class="display -mb-[0.12em] text-[clamp(4rem,19vw,17rem)] leading-none">{studio.name}</p>
	</div>

	<div class="border-t-2 border-paper/30">
		<div class="site-container flex flex-col-reverse items-start justify-between gap-6 py-6 md:flex-row md:items-center">
			<p class="text-sm opacity-70">© {year} {studio.name}. Dessau, Berlin, Zürich.</p>
			<div class="flex items-center gap-3">
				<Shape kind="triangle" color="yellow" class="size-6" />
				<Shape kind="circle" color="blue" class="size-6" />
				<Shape kind="square" color="red" class="size-6" />
			</div>
		</div>
	</div>
</footer>
