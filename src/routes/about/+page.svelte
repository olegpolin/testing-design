<script lang="ts">
	import { Cta, PageHero, Shape } from '#lib/components/site/index.js';
	import { principles, studio, team, timeline } from '#lib/site.js';
</script>

<svelte:head>
	<title>About — {studio.name}</title>
	<meta name="description" content="A design studio founded in Dessau in 2019. Fourteen people, three cities, one set of rules." />
</svelte:head>

<PageHero eyebrow="About" title="One set of rules" shape="circle" color="blue">
	<p>Founded in Dessau in {studio.founded}. Fourteen people across three cities, all working to the same grid.</p>
</PageHero>

<section class="border-b-8 border-ink">
	<div class="site-container grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-10 section-pad">
		<h2 class="display col-span-12 text-[clamp(2rem,4.5vw,4rem)] md:col-span-7">
			The name is borrowed from the Bauhaus preliminary course, where students unlearned before they learned.
		</h2>
		<div class="col-span-12 flex flex-col gap-6 text-lg leading-relaxed md:col-span-4 md:col-start-9">
			<p>
				We start every project the same way: strip the brief down to what the work must do, then build
				back up only what earns its place.
			</p>
			<p>
				It makes us slow to add and quick to remove. Clients tell us that is the part they were
				missing.
			</p>
		</div>
	</div>
</section>

<section class="border-b-8 border-ink bg-fog">
	<div class="site-container section-pad">
		<div class="mb-12 flex flex-col gap-4">
			<p class="eyebrow">Principles</p>
			<h2 class="display text-[clamp(2.25rem,5vw,4.5rem)]">Three, not thirty</h2>
		</div>
		<ul class="grid grid-cols-1 gap-px bg-ink md:grid-cols-3">
			{#each principles as principle (principle.title)}
				<li class="flex flex-col gap-8 bg-fog p-8 md:p-10">
					<Shape kind={principle.shape} color={principle.color} class="size-16" />
					<h3 class="display text-2xl">{principle.title}</h3>
					<p class="text-base leading-relaxed">{principle.text}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="border-b-8 border-ink">
	<div class="site-container section-pad">
		<div class="mb-12 flex flex-col gap-4">
			<p class="eyebrow">People</p>
			<h2 class="display text-[clamp(2.25rem,5vw,4.5rem)]">Who you will work with</h2>
		</div>
		<ul class="grid grid-cols-2 gap-8 md:grid-cols-4">
			{#each team as person (person.name)}
				<li class="flex flex-col gap-5">
					<div class="flex aspect-square items-end justify-start overflow-hidden bg-fog p-5">
						<Shape kind={person.shape} color={person.color} class="size-[60%]" />
					</div>
					<div class="flex flex-col gap-1">
						<h3 class="font-display text-xl font-semibold">{person.name}</h3>
						<p class="eyebrow">{person.role}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="border-b-8 border-ink">
	<div class="site-container grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-10 section-pad">
		<div class="col-span-12 flex flex-col gap-4 md:col-span-4">
			<p class="eyebrow">Timeline</p>
			<h2 class="display text-[clamp(2.25rem,5vw,4.5rem)]">Since {studio.founded}</h2>
		</div>
		<ol class="col-span-12 border-t-2 border-ink md:col-span-8">
			{#each timeline as entry (entry.year)}
				<li class="grid grid-cols-12 gap-4 border-b-2 border-ink py-6">
					<span class="display col-span-3 text-3xl text-bauhaus-red md:col-span-2">{entry.year}</span>
					<p class="col-span-9 text-base leading-relaxed md:col-span-8">{entry.text}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<Cta title="Come and see the studio." text="We keep Fridays open for visitors. Bring the brief, we will make the coffee." action="Plan a visit" />
