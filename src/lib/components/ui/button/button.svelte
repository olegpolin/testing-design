<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";
	import { cn, type WithElementRef } from "#lib/utils.js";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

	export const buttonVariants = tv({
		base: "group/button inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap border-2 border-transparent font-display text-sm font-semibold uppercase tracking-[0.15em] outline-none transition-colors duration-150 ease-mechanical select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-ink hover:text-paper",
				outline: "border-ink bg-transparent text-ink hover:bg-accent hover:text-accent-foreground",
				secondary: "bg-secondary text-secondary-foreground hover:bg-ink hover:text-paper",
				ghost: "text-ink hover:bg-fog",
				destructive: "bg-destructive text-primary-foreground hover:bg-ink hover:text-paper",
				link: "rule-link text-ink hover:text-secondary",
			},
			size: {
				default: "h-12 px-6",
				xs: "h-8 px-3 text-xs [&_svg:not([class*='size-'])]:size-3",
				sm: "h-10 px-4 text-xs [&_svg:not([class*='size-'])]:size-3.5",
				lg: "h-14 px-8 text-base",
				icon: "size-12",
				"icon-xs": "size-8 [&_svg:not([class*='size-'])]:size-3",
				"icon-sm": "size-10",
				"icon-lg": "size-14",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	});

	export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
	export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

	export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: ButtonVariant;
			size?: ButtonSize;
		};
</script>

<script lang="ts">
	let {
		class: className,
		variant = "default",
		size = "default",
		ref = $bindable(null),
		href = undefined,
		type = "button",
		disabled,
		children,
		...restProps
	}: ButtonProps = $props();
</script>

{#if href}
	<a
		bind:this={ref}
		data-slot="button"
		class={cn(buttonVariants({ variant, size }), className)}
		href={disabled ? undefined : href}
		aria-disabled={disabled}
		role={disabled ? "link" : undefined}
		tabindex={disabled ? -1 : undefined}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		bind:this={ref}
		data-slot="button"
		class={cn(buttonVariants({ variant, size }), className)}
		{type}
		{disabled}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
