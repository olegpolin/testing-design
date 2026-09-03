<script lang="ts">
	import { cn, type WithElementRef } from "#lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		children,
		size = "default",
		variant = "elevated",
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		size?: "default" | "sm";
		variant?: "elevated" | "filled" | "outlined";
	} = $props();

	const variantStyles = {
		elevated: "bg-md-surface-container-low text-card-foreground shadow-elevation-1 hover:shadow-elevation-2 transition-shadow",
		filled: "bg-md-surface-container-highest text-card-foreground shadow-none",
		outlined: "bg-md-surface text-card-foreground border border-md-outline-variant shadow-none",
	};
</script>

<div
	bind:this={ref}
	data-slot="card"
	data-size={size}
	data-variant={variant}
	class={cn("gap-(--card-spacing) overflow-hidden rounded-2xl p-(--card-spacing) text-sm [--card-spacing:--spacing(6)] data-[size=sm]:[--card-spacing:--spacing(4)] group/card flex flex-col transition-all", variantStyles[variant], className)}
	{...restProps}
>
	{@render children?.()}
</div>
