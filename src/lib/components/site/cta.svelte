<script lang="ts">
	import { Button } from '#lib/components/ui/button/index.js';

	interface Props {
		title?: string;
		text?: string;
		action?: string;
		href?: string;
	}

	let {
		title = 'Have a problem worth reducing?',
		text = 'Tell us what it has to do. We will tell you what it could look like within a week.',
		action = 'Start a project',
		href = '/contact'
	}: Props = $props();
</script>

<section class="relative overflow-hidden bg-ink text-paper">
	<div
		aria-hidden="true"
		class="absolute top-6 left-0 h-4 w-[62%] bg-bauhaus-yellow md:top-1/2 md:h-10 md:-translate-y-1/2"
	></div>
	<div class="site-container relative grid grid-cols-12 items-end gap-x-8 gap-y-10 section-pad">
		<h2 class="display col-span-12 text-[clamp(2.75rem,8vw,7.5rem)] md:col-span-8">{title}</h2>
		<div class="col-span-12 flex flex-col gap-8 md:col-span-4">
			<p class="max-w-[36ch] text-lg leading-relaxed">{text}</p>
			<div>
				<Button size="lg" {href}>{action}</Button>
			</div>
		</div>
	</div>
</section>
