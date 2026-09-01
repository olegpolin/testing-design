<script lang="ts">
	import { enhance } from '$app/forms';
	import { toast } from 'svelte-sonner';
	import * as Field from '#lib/components/ui/field/index.js';
	import * as ToggleGroup from '#lib/components/ui/toggle-group/index.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import { Input } from '#lib/components/ui/input/index.js';
	import { Textarea } from '#lib/components/ui/textarea/index.js';
	import { Cta, Shape } from '#lib/components/site/index.js';
	import { contact, studio } from '#lib/site.js';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();

	let submitting = $state(false);
	let budget = $state('');

	const budgetOptions = [
		{ value: 'sprint', label: 'Sprint · €12k' },
		{ value: 'studio', label: 'Studio · €9k/mo' },
		{ value: 'partner', label: 'Partner · custom' },
		{ value: 'unsure', label: 'Not sure yet' }
	];

	const details = [
		{ label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
		{ label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
		{ label: 'Studio', value: contact.address.join(', ') },
		{ label: 'Hours', value: contact.hours }
	];
</script>

<svelte:head>
	<title>Contact — {studio.name}</title>
	<meta name="description" content="Start a project with Vorkurs. We reply within two working days." />
</svelte:head>

<section class="relative overflow-hidden border-b-8 border-ink">
	<Shape kind="half" color="blue" class="absolute right-[6vw] -bottom-[1px] h-[12vw] w-[24vw] md:right-[10vw]" />
	<div class="site-container relative flex flex-col gap-8 py-16 md:py-24">
		<p class="eyebrow">Contact</p>
		<h1 class="display -ml-[0.04em] text-[clamp(4.5rem,17vw,16rem)] leading-none">Contact</h1>
	</div>
</section>

<section class="border-b-8 border-ink">
	<div class="site-container grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-14 section-pad">
		<div class="col-span-12 flex flex-col gap-10 lg:col-span-4">
			<p class="max-w-[36ch] text-lg leading-relaxed">
				Tell us what the work has to do. We reply within two working days, usually with questions.
			</p>
			<dl class="flex flex-col border-t-2 border-ink">
				{#each details as item (item.label)}
					<div class="grid grid-cols-3 gap-4 border-b-2 border-ink py-4">
						<dt class="eyebrow pt-1">{item.label}</dt>
						<dd class="col-span-2">
							{#if item.href}
								<a href={item.href} class="rule-link hover:text-secondary">{item.value}</a>
							{:else}
								{item.value}
							{/if}
						</dd>
					</div>
				{/each}
				{#each contact.socials as social (social.label)}
					<div class="grid grid-cols-3 gap-4 border-b-2 border-ink py-4">
						<dt class="eyebrow pt-1">{social.label}</dt>
						<dd class="col-span-2">
							<a href={social.href} rel="noreferrer" class="rule-link hover:text-secondary">{social.handle}</a>
						</dd>
					</div>
				{/each}
			</dl>
		</div>

		<div class="col-span-12 lg:col-span-7 lg:col-start-6">
			{#if form?.success}
				<div class="flex flex-col gap-6 border-2 border-ink bg-accent p-8 text-accent-foreground md:p-12">
					<Shape kind="circle" color="blue" class="size-12" />
					<h2 class="display text-[clamp(2rem,4vw,3.5rem)]">Thanks, {form.name}.</h2>
					<p class="max-w-[44ch] text-lg leading-relaxed">
						Your message is in the queue. Expect a reply from a person, not a form, within two working days.
					</p>
					<div>
						<Button href="/" variant="outline">Back to the start</Button>
					</div>
				</div>
			{:else}
				<form
					method="POST"
					novalidate
					use:enhance={() => {
						submitting = true;
						return async ({ result, update }) => {
							await update();
							submitting = false;
							if (result.type === 'success') toast.success('Message sent');
							if (result.type === 'failure') toast.error('Check the highlighted fields');
						};
					}}
				>
					<Field.Set>
						<Field.Legend class="eyebrow">Start a project</Field.Legend>
						<Field.Group class="gap-8">
							<div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
								<Field.Field data-invalid={form?.errors?.name ? true : undefined}>
									<Field.Label for="name">Name</Field.Label>
									<Input
										id="name"
										name="name"
										autocomplete="name"
										required
										value={form?.values?.name ?? ''}
										aria-invalid={form?.errors?.name ? true : undefined}
									/>
									{#if form?.errors?.name}
										<Field.Error>{form.errors.name}</Field.Error>
									{/if}
								</Field.Field>
								<Field.Field data-invalid={form?.errors?.email ? true : undefined}>
									<Field.Label for="email">Email</Field.Label>
									<Input
										id="email"
										name="email"
										type="email"
										autocomplete="email"
										required
										value={form?.values?.email ?? ''}
										aria-invalid={form?.errors?.email ? true : undefined}
									/>
									{#if form?.errors?.email}
										<Field.Error>{form.errors.email}</Field.Error>
									{/if}
								</Field.Field>
							</div>

							<Field.Field>
								<Field.Label for="company">Company</Field.Label>
								<Input id="company" name="company" autocomplete="organization" value={form?.values?.company ?? ''} />
								<Field.Description>Optional.</Field.Description>
							</Field.Field>

							<Field.Field data-invalid={form?.errors?.budget ? true : undefined}>
								<Field.Label id="budget-label">Engagement</Field.Label>
								<ToggleGroup.Root
									type="single"
									bind:value={budget}
									aria-labelledby="budget-label"
									spacing={2}
									class="flex-wrap justify-start"
								>
									{#each budgetOptions as option (option.value)}
										<ToggleGroup.Item
											value={option.value}
											class="h-10 border-2 border-ink px-4 font-display text-xs font-medium tracking-[0.12em] uppercase data-[state=on]:bg-ink data-[state=on]:text-paper"
										>
											{option.label}
										</ToggleGroup.Item>
									{/each}
								</ToggleGroup.Root>
								<input type="hidden" name="budget" value={budget} />
								{#if form?.errors?.budget}
									<Field.Error>{form.errors.budget}</Field.Error>
								{/if}
							</Field.Field>

							<Field.Field data-invalid={form?.errors?.message ? true : undefined}>
								<Field.Label for="message">The problem</Field.Label>
								<Textarea
									id="message"
									name="message"
									required
									placeholder="What it has to do, who it is for, and when it needs to exist."
									value={form?.values?.message ?? ''}
									aria-invalid={form?.errors?.message ? true : undefined}
								/>
								{#if form?.errors?.message}
									<Field.Error>{form.errors.message}</Field.Error>
								{/if}
							</Field.Field>

							<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
								<Button type="submit" size="lg" disabled={submitting}>
									{submitting ? 'Sending' : 'Send message'}
								</Button>
								<p class="text-sm">No newsletter, no CRM. Just a reply.</p>
							</div>
						</Field.Group>
					</Field.Set>
				</form>
			{/if}
		</div>
	</div>
</section>

<Cta title="Prefer to talk first?" text="Book twenty minutes with a design director. No deck, no pitch." action="Book a call" href="mailto:{contact.email}?subject=Twenty minutes" />
