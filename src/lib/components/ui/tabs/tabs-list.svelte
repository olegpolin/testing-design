<script lang="ts" module>
	import { tv, type VariantProps } from "tailwind-variants";

	export const tabsListVariants = tv({
		base: "group/tabs-list inline-flex items-center text-md-on-surface-variant transition-colors",
		variants: {
			variant: {
				default: "gap-2 rounded-full bg-md-surface-container-high p-1.5",
				primary: "h-12 w-full justify-around border-b border-md-outline-variant bg-md-surface p-0",
				secondary: "gap-2 rounded-full bg-md-surface-container-high p-1.5",
				line: "h-12 w-full justify-around border-b border-md-outline-variant bg-md-surface p-0",
			},
		},
		defaultVariants: {
			variant: "primary",
		},
	});

	export type TabsListVariant = VariantProps<typeof tabsListVariants>["variant"];
</script>

<script lang="ts">
	import { Tabs as TabsPrimitive } from "bits-ui";
	import { cn } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		variant = "default",
		class: className,
		...restProps
	}: TabsPrimitive.ListProps & {
		variant?: TabsListVariant;
	} = $props();
</script>

<TabsPrimitive.List
	bind:ref
	data-slot="tabs-list"
	data-variant={variant}
	class={cn(tabsListVariants({ variant }), className)}
	{...restProps}
/>
