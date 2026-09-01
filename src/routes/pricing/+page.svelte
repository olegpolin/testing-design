<script lang="ts">
	import * as Accordion from '#lib/components/ui/accordion/index.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import { Cta, PageHero, Shape } from '#lib/components/site/index.js';
	import { faqs, plans, studio } from '#lib/site.js';
</script>

<svelte:head>
	<title>Pricing — {studio.name}</title>
	<meta name="description" content="Fixed-price sprints, monthly retainers, and long-term partnerships." />
</svelte:head>

<PageHero eyebrow="Pricing" title="Three ways to work" shape="square" color="red">
	<p>Fixed prices where the scope is fixed. Monthly where it is not. No hourly billing, ever.</p>
</PageHero>

<section class="border-b-8 border-ink">
	<div class="site-container section-pad">
		<ul class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-0 lg:border-2 lg:border-ink">
			{#each plans as plan (plan.name)}
				<li
					class="flex flex-col gap-8 border-2 border-ink p-8 lg:border-0 lg:not-last:border-r-2 lg:p-10 {plan.highlighted
						? 'bg-accent text-accent-foreground'
						: ''}"
				>
					<div class="flex items-start justify-between gap-4">
						<div class="flex flex-col gap-2">
							<h2 class="display text-3xl">{plan.name}</h2>
							{#if plan.highlighted}
								<p class="eyebrow">Most studios start here</p>
							{/if}
						</div>
						<Shape kind={plan.shape} color={plan.color} class="size-10" />
					</div>
					<div class="flex flex-col gap-1">
						<p class="display text-[clamp(3rem,5vw,4.5rem)] leading-none">{plan.price}</p>
						<p class="eyebrow">{plan.period}</p>
					</div>
					<p class="text-base leading-relaxed">{plan.blurb}</p>
					<ul class="flex flex-col">
						{#each plan.features as feature (feature)}
							<li class="flex items-center gap-3 border-b-2 border-ink py-3 text-sm">
								<span aria-hidden="true" class="size-2.5 shrink-0 bg-ink"></span>
								{feature}
							</li>
						{/each}
					</ul>
					<div class="mt-auto pt-4">
						<Button href={plan.href} variant={plan.highlighted ? 'default' : 'outline'} class="w-full">
							{plan.cta}
						</Button>
					</div>
				</li>
			{/each}
		</ul>
		<p class="mt-8 max-w-[60ch] text-sm leading-relaxed">
			All prices exclude VAT. Sprints are paid in full at booking. Retainers are invoiced monthly in advance.
		</p>
	</div>
</section>

<section class="border-b-8 border-ink bg-fog">
	<div class="site-container grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-10 section-pad">
		<div class="col-span-12 flex flex-col gap-4 md:col-span-4">
			<p class="eyebrow">Questions</p>
			<h2 class="display text-[clamp(2.25rem,5vw,4.5rem)]">Before you book</h2>
		</div>
		<Accordion.Root type="single" class="col-span-12 border-t-2 border-ink md:col-span-8">
			{#each faqs as faq, i (faq.q)}
				<Accordion.Item value="faq-{i}" class="border-b-2 border-ink">
					<Accordion.Trigger class="py-6 font-display text-lg font-medium tracking-wide uppercase hover:text-secondary hover:no-underline">
						{faq.q}
					</Accordion.Trigger>
					<Accordion.Content class="max-w-[60ch] pb-6 text-base leading-relaxed">
						{faq.a}
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>
</section>

<Cta title="Need a number for a budget line?" text="Send us the brief and we will reply with a fixed quote within three working days." action="Request a quote" />
