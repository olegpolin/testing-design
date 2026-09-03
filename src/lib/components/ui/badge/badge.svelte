<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";

	export const badgeVariants = tv({
		base: "inline-flex w-fit shrink-0 items-center justify-center font-medium transition-all select-none",
		variants: {
			variant: {
				default: "bg-primary text-on-primary rounded-full",
				primary: "bg-primary text-on-primary rounded-full",
				secondary: "bg-secondary text-secondary-foreground rounded-full",
				tertiary: "bg-md-tertiary-container text-md-on-tertiary-container rounded-full",
				error: "bg-md-error text-md-on-error rounded-full",
				destructive: "bg-md-error text-md-on-error rounded-full",
				surface: "bg-md-surface-container-highest text-md-on-surface rounded-full",
				outline: "border border-md-outline-variant bg-transparent text-foreground rounded-full",
				ghost: "hover:bg-muted hover:text-muted-foreground",
				link: "text-primary underline-offset-4 hover:underline",
				expressive: "bg-md-tertiary text-md-on-tertiary m3-shape-expressive-1 shadow-elevation-1",
			},
			size: {
				default: "h-5 min-w-5 px-1.5 text-[11px] font-semibold leading-none",
				dot: "size-2 rounded-full p-0",
				sm: "h-4 min-w-4 px-1 text-[10px] font-semibold leading-none",
				lg: "h-6 min-w-6 px-2 text-xs font-bold leading-none",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "default",
		},
	});

	export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
	export type BadgeSize = VariantProps<typeof badgeVariants>["size"];
</script>

<script lang="ts">
	import { cn, type WithElementRef } from "#lib/utils.js";
	import type { HTMLAnchorAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		href,
		class: className,
		variant = "default",
		size = "default",
		children,
		...restProps
	}: WithElementRef<HTMLAnchorAttributes> & {
		variant?: BadgeVariant;
		size?: BadgeSize;
	} = $props();
</script>

<svelte:element
	this={href ? "a" : "span"}
	bind:this={ref}
	data-slot="badge"
	{href}
	class={cn(badgeVariants({ variant, size }), className)}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
