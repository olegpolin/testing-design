<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";
	import { cn, type WithElementRef } from "#lib/utils.js";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

	export const buttonVariants = tv({
		base: "m3-state-layer relative inline-flex shrink-0 items-center justify-center whitespace-nowrap font-medium text-sm transition-all duration-200 outline-none select-none disabled:pointer-events-none disabled:opacity-38 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
		variants: {
			variant: {
				default: "rounded-full bg-primary text-primary-foreground shadow-elevation-0 hover:shadow-elevation-1",
				filled: "rounded-full bg-primary text-primary-foreground shadow-elevation-0 hover:shadow-elevation-1",
				elevated: "rounded-full bg-md-surface-container-low text-primary shadow-elevation-1 hover:shadow-elevation-2 hover:bg-md-surface-container",
				tonal: "rounded-full bg-secondary text-secondary-foreground shadow-elevation-0 hover:shadow-elevation-1",
				secondary: "rounded-full bg-secondary text-secondary-foreground shadow-elevation-0 hover:shadow-elevation-1",
				outline: "rounded-full border border-md-outline bg-transparent text-primary hover:bg-primary/8 active:bg-primary/12",
				outlined: "rounded-full border border-md-outline bg-transparent text-primary hover:bg-primary/8 active:bg-primary/12",
				ghost: "rounded-full bg-transparent text-primary hover:bg-primary/8 active:bg-primary/12",
				text: "rounded-full bg-transparent text-primary hover:bg-primary/8 active:bg-primary/12",
				destructive: "rounded-full bg-destructive text-destructive-foreground shadow-elevation-0 hover:shadow-elevation-1",
				link: "text-primary underline-offset-4 hover:underline",
				fab: "rounded-2xl bg-primary-container text-on-primary-container shadow-elevation-3 hover:shadow-elevation-4 active:shadow-elevation-3 transition-shadow",
				"fab-primary": "rounded-2xl bg-primary text-primary-foreground shadow-elevation-3 hover:shadow-elevation-4 active:shadow-elevation-3",
				"fab-surface": "rounded-2xl bg-md-surface-container-high text-primary shadow-elevation-3 hover:shadow-elevation-4 active:shadow-elevation-3",
				"fab-tertiary": "rounded-2xl bg-md-tertiary-container text-md-on-tertiary-container shadow-elevation-3 hover:shadow-elevation-4 active:shadow-elevation-3",
			},
			size: {
				default: "h-10 gap-2 px-6 text-sm font-medium",
				xs: "h-7 gap-1.5 rounded-full px-3 text-xs [&_svg:not([class*='size-'])]:size-3.5",
				sm: "h-8 gap-1.5 rounded-full px-4 text-xs [&_svg:not([class*='size-'])]:size-4",
				lg: "h-12 gap-2.5 rounded-full px-7 text-base [&_svg:not([class*='size-'])]:size-6",
				icon: "size-10 rounded-full p-0",
				"icon-xs": "size-7 rounded-full p-0 [&_svg:not([class*='size-'])]:size-3.5",
				"icon-sm": "size-8 rounded-full p-0 [&_svg:not([class*='size-'])]:size-4",
				"icon-lg": "size-12 rounded-full p-0 [&_svg:not([class*='size-'])]:size-6",
				"fab-sm": "size-10 rounded-xl p-0 [&_svg:not([class*='size-'])]:size-5",
				"fab-default": "size-14 rounded-2xl p-0 [&_svg:not([class*='size-'])]:size-6",
				"fab-lg": "size-24 rounded-3xl p-0 [&_svg:not([class*='size-'])]:size-9",
				"fab-extended": "h-14 gap-3 rounded-2xl px-5 text-sm font-medium tracking-wide [&_svg:not([class*='size-'])]:size-6",
			},
		},
		defaultVariants: {
			variant: "filled",
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
