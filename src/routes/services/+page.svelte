<script lang="ts">
	import { Button } from '#lib/components/ui/button/index.js';
	import { Cta, PageHero, Shape } from '#lib/components/site/index.js';
	import { process, services, studio } from '#lib/site.js';
</script>

<svelte:head>
	<title>Services — {studio.name}</title>
	<meta
		name="description"
		content="Identity, product, spatial, and type. Four practices, one studio."
	/>
</svelte:head>

<PageHero eyebrow="Services" title="Four practices" shape="triangle" color="yellow">
	<p>
		Every engagement runs through the same studio and the same rules. Pick the surface, we bring the
		system.
	</p>
</PageHero>

<section>
	{#each services as service, i (service.slug)}
		<article
			id={service.slug}
			class="scroll-mt-24 border-b-8 border-ink {i % 2 === 1 ? 'bg-fog' : ''}"
		>
			<div class="site-container grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-10 section-pad">
				<div class="col-span-12 flex flex-col gap-6 md:col-span-5">
					<p class="font-display text-sm font-medium">{service.n}</p>
					<h2 class="display text-[clamp(3rem,8vw,7rem)]">{service.title}</h2>
					<Shape kind={service.shape} color={service.color} class="size-20 md:size-28" />
				</div>
				<div class="col-span-12 flex flex-col gap-8 md:col-span-6 md:col-start-7">
					<p class="max-w-[48ch] text-xl leading-relaxed">{service.summary}</p>
					<p class="max-w-[56ch] text-base leading-relaxed">{service.body}</p>
					<div class="flex flex-col gap-3">
						<p class="eyebrow">Deliverables</p>
						<ul class="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
							{#each service.deliverables as item (item)}
								<li class="flex items-center gap-3 border-b-2 border-ink py-3">
									<span aria-hidden="true" class="size-2.5 shrink-0 bg-ink"></span>
									{item}
								</li>
							{/each}
						</ul>
					</div>
					<div>
						<Button variant="outline" href="/contact">Ask about {service.title.toLowerCase()}</Button>
					</div>
				</div>
			</div>
		</article>
	{/each}
</section>

<section class="border-b-8 border-ink">
	<div class="site-container section-pad">
		<div class="mb-12 flex flex-col gap-4">
			<p class="eyebrow">How we work</p>
			<h2 class="display text-[clamp(2.25rem,5vw,4.5rem)]">Four steps, every time</h2>
		</div>
		<ol class="grid grid-cols-1 gap-px bg-ink md:grid-cols-4">
			{#each process as step (step.n)}
				<li class="flex flex-col gap-6 bg-background p-6 md:p-8">
					<span class="display text-[clamp(3rem,5vw,4.5rem)] text-bauhaus-blue">{step.n}</span>
					<h3 class="display text-2xl">{step.title}</h3>
					<p class="text-base leading-relaxed">{step.text}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<Cta title="Not sure which practice you need?" text="Most projects start as one and end as two. Describe the problem and we will scope it." action="Describe the problem" />
