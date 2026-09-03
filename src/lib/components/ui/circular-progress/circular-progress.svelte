<script lang="ts">
	import { cn } from "#lib/utils.js";

	type Props = {
		class?: string;
		value?: number;
		max?: number;
		size?: "sm" | "default" | "lg";
		indeterminate?: boolean;
	};

	let {
		class: className,
		value,
		max = 100,
		size = "default",
		indeterminate = false,
	}: Props = $props();

	const isIndeterminate = $derived(indeterminate || value === undefined || value === null);

	const sizeMap = {
		sm: { px: 24, stroke: 3, r: 9 },
		default: { px: 40, stroke: 4, r: 16 },
		lg: { px: 56, stroke: 5, r: 23 },
	};

	const config = $derived(sizeMap[size] || sizeMap.default);
	const circumference = $derived(2 * Math.PI * config.r);
	const percent = $derived(Math.min(100, Math.max(0, (100 * (value ?? 0)) / (max ?? 1))));
	const offset = $derived(circumference - (percent / 100) * circumference);
</script>

<div
	role="progressbar"
	aria-valuemin={0}
	aria-valuemax={max}
	aria-valuenow={isIndeterminate ? undefined : (value ?? 0)}
	class={cn(
		"relative inline-flex shrink-0 items-center justify-center",
		isIndeterminate && "animate-spin",
		className
	)}
	style="width: {config.px}px; height: {config.px}px; animation-duration: 1.4s;"
>
	<svg
		class="size-full -rotate-90"
		viewBox="0 0 {config.px} {config.px}"
		fill="none"
	>
		<!-- Inactive Track -->
		<circle
			cx={config.px / 2}
			cy={config.px / 2}
			r={config.r}
			stroke="currentColor"
			stroke-width={config.stroke}
			class="text-md-surface-container-highest"
		/>

		<!-- Active Indicator -->
		<circle
			cx={config.px / 2}
			cy={config.px / 2}
			r={config.r}
			stroke="currentColor"
			stroke-width={config.stroke}
			stroke-linecap="round"
			stroke-dasharray={circumference}
			stroke-dashoffset={isIndeterminate ? circumference * 0.75 : offset}
			class={cn("text-primary transition-all duration-300 ease-out")}
		/>
	</svg>
</div>
