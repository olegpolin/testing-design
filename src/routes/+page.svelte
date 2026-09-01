<script lang="ts">
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import { Button } from '#lib/components/ui/button/index.js';
	import { Cta, Shape } from '#lib/components/site/index.js';
	import { clients, services, stats, studio, testimonial, work } from '#lib/site.js';
</script>

<svelte:head>
	<title>{studio.name} — {studio.tagline}</title>
	<meta
		name="description"
		content="Vorkurs is a design studio in Dessau, Berlin, and Zürich working on identity, product, spatial, and type."
	/>
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden border-b-8 border-ink">
	<Shape
		kind="circle"
		color="yellow"
		class="absolute -top-[10vw] -right-[14vw] size-[60vw] md:-top-[12vw] md:-right-[6vw] md:size-[46vw]"
	/>
	<div class="site-container relative grid min-h-[calc(100svh-5rem)] grid-cols-12 gap-x-4 md:gap-x-8 py-14 md:py-24">
		<div aria-hidden="true" class="absolute inset-y-0 left-[clamp(1.5rem,5vw,6rem)] hidden w-3 bg-ink md:block"></div>
		<div class="col-span-12 flex flex-col justify-between gap-16 md:col-span-10 md:col-start-2">
			<p class="eyebrow">Design studio · {studio.city} · Est. {studio.founded}</p>
			<h1 class="display text-[clamp(3.25rem,10vw,9.5rem)]">
				Design,<br />reduced to<br />what works.
			</h1>
			<div class="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
				<p class="max-w-[38ch] text-lg leading-relaxed">
					We build identities, products, spaces, and typefaces for organisations that would rather be
					clear than loud.
				</p>
				<div class="flex flex-wrap gap-3">
					<Button size="lg" href="/contact">Start a project</Button>
					<Button size="lg" variant="outline" href="/services">Services</Button>
				</div>
			</div>
		</div>
	</div>
	<div aria-hidden="true" class="h-5 w-[68%] bg-bauhaus-blue md:h-8"></div>
</section>

<!-- Clients -->
<section class="border-b-8 border-ink" aria-label="Clients">
	<div class="site-container flex flex-wrap items-center gap-x-10 gap-y-3 py-6">
		<span class="eyebrow">Clients</span>
		{#each clients as client (client)}
			<span class="font-display text-lg font-medium uppercase tracking-wide">{client}</span>
		{/each}
	</div>
</section>

<!-- Statement -->
<section class="border-b-8 border-ink bg-fog">
	<div class="site-container grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-12 section-pad">
		<h2 class="display col-span-12 text-[clamp(2.25rem,5.5vw,5rem)] md:col-span-9">
			A brand is a system, not a mood board. We ship the system.
		</h2>
		<div class="col-span-12 flex items-end gap-4 md:col-span-3 md:justify-end">
			<Shape kind="triangle" color="yellow" class="size-14 md:size-16" />
			<Shape kind="circle" color="blue" class="size-14 md:size-16" />
			<Shape kind="square" color="red" class="size-14 md:size-16" />
		</div>
	</div>
</section>

<!-- Services -->
<section class="border-b-8 border-ink">
	<div class="site-container section-pad">
		<div class="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
			<div class="flex flex-col gap-4">
				<p class="eyebrow">What we do</p>
				<h2 class="display text-[clamp(2.25rem,5vw,4.5rem)]">Four practices</h2>
			</div>
			<Button variant="link" href="/services">
				All services
				<ArrowRightIcon data-icon="inline-end" />
			</Button>
		</div>
		<ul class="border-t-2 border-ink">
			{#each services as service (service.slug)}
				<li class="border-b-2 border-ink">
					<a
						href="/services#{service.slug}"
						class="group flex flex-col gap-4 py-8 transition-colors duration-150 ease-mechanical hover:bg-fog md:grid md:grid-cols-12 md:items-center md:gap-x-8 md:gap-y-3 md:py-10"
					>
						<div class="flex items-center justify-between md:contents">
							<span class="font-display text-sm font-medium md:col-span-1">{service.n}</span>
							<div class="flex md:col-span-1 md:col-start-12 md:justify-end">
								<Shape
									kind={service.shape}
									color={service.color}
									class="size-8 transition-transform duration-200 ease-mechanical group-hover:rotate-90 md:size-10"
								/>
							</div>
						</div>
						<h3 class="display text-[clamp(1.75rem,3.5vw,3rem)] md:col-span-4 md:col-start-2 md:row-start-1">
							{service.title}
						</h3>
						<p class="max-w-[44ch] text-base leading-relaxed md:col-span-5 md:col-start-6 md:row-start-1">
							{service.summary}
						</p>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- Stats -->
<section class="border-b-8 border-ink" aria-label="Studio in numbers">
	<div class="site-container grid grid-cols-1 divide-y-2 divide-ink md:grid-cols-3 md:divide-x-2 md:divide-y-0">
		{#each stats as stat (stat.label)}
			<div class="flex flex-col gap-6 py-10 md:px-10 md:first:pl-0 md:last:pr-0 md:py-16">
				<span aria-hidden="true" class="size-5 bg-bauhaus-red"></span>
				<p class="display text-[clamp(4rem,9vw,8rem)] leading-none">
					{stat.value}<span class="text-bauhaus-blue">{stat.suffix}</span>
				</p>
				<p class="eyebrow">{stat.label}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Work -->
<section class="border-b-8 border-ink">
	<div class="site-container section-pad">
		<div class="mb-12 flex flex-col gap-4">
			<p class="eyebrow">Selected work</p>
			<h2 class="display text-[clamp(2.25rem,5vw,4.5rem)]">Three recent programmes</h2>
		</div>
		<ul class="grid grid-cols-1 gap-8 md:grid-cols-3">
			{#each work as item (item.title)}
				{@const ground = { red: 'bg-bauhaus-red text-paper', blue: 'bg-bauhaus-blue text-paper', yellow: 'bg-bauhaus-yellow text-ink', ink: 'bg-ink text-paper', paper: 'bg-paper text-ink' }[item.ground]}
				<li class="relative aspect-[4/5] overflow-hidden {ground}">
					<Shape
						kind={item.shape}
						color={item.shapeColor}
						class="absolute -top-[18%] -right-[18%] size-[85%]"
					/>
					<div class="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 md:p-8">
						<p class="eyebrow opacity-80">{item.client}</p>
						<h3 class="display text-[clamp(1.75rem,3vw,2.5rem)]">{item.title}</h3>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- Testimonial -->
<section class="relative overflow-hidden border-b-8 border-ink bg-fog">
	<Shape kind="circle" color="blue" class="absolute -bottom-[14vw] -left-[10vw] size-[40vw] md:size-[28vw]" />
	<div class="site-container relative grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-8 section-pad">
		<figure class="col-span-12 flex flex-col gap-8 md:col-span-9 md:col-start-4">
			<blockquote class="font-display text-[clamp(1.75rem,3.6vw,3.25rem)] leading-tight font-medium">
				“{testimonial.quote}”
			</blockquote>
			<figcaption class="flex items-center gap-4">
				<span aria-hidden="true" class="h-1 w-12 bg-ink"></span>
				<span class="eyebrow">{testimonial.name}, {testimonial.role}</span>
			</figcaption>
		</figure>
	</div>
</section>

<Cta />
