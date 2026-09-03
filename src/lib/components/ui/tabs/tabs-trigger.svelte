<script lang="ts">
	import { Tabs as TabsPrimitive } from "bits-ui";
	import { cn } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: TabsPrimitive.TriggerProps = $props();
</script>

<TabsPrimitive.Trigger
	bind:ref
	data-slot="tabs-trigger"
	class={cn(
		"m3-state-layer relative inline-flex h-full items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 outline-none select-none disabled:pointer-events-none disabled:opacity-38",
		// Inactive
		"text-md-on-surface-variant hover:text-foreground",
		// Primary / line variant: bottom 3px indicator line
		"group-data-[variant=primary]/tabs-list:data-active:text-primary group-data-[variant=primary]/tabs-list:data-active:font-semibold",
		"group-data-[variant=primary]/tabs-list:after:absolute group-data-[variant=primary]/tabs-list:after:bottom-0 group-data-[variant=primary]/tabs-list:after:left-1/2 group-data-[variant=primary]/tabs-list:after:-translate-x-1/2 group-data-[variant=primary]/tabs-list:after:h-[3px] group-data-[variant=primary]/tabs-list:after:w-12 group-data-[variant=primary]/tabs-list:after:rounded-t-full group-data-[variant=primary]/tabs-list:after:bg-primary group-data-[variant=primary]/tabs-list:after:opacity-0 group-data-[variant=primary]/tabs-list:data-active:after:opacity-100 group-data-[variant=primary]/tabs-list:after:transition-all",
		"group-data-[variant=line]/tabs-list:data-active:text-primary group-data-[variant=line]/tabs-list:data-active:after:opacity-100 group-data-[variant=line]/tabs-list:after:absolute group-data-[variant=line]/tabs-list:after:bottom-0 group-data-[variant=line]/tabs-list:after:h-[3px] group-data-[variant=line]/tabs-list:after:w-12 group-data-[variant=line]/tabs-list:after:rounded-t-full group-data-[variant=line]/tabs-list:after:bg-primary group-data-[variant=line]/tabs-list:after:opacity-0",
		// Secondary / pill variant: full pill fill
		"group-data-[variant=secondary]/tabs-list:rounded-full group-data-[variant=secondary]/tabs-list:data-active:bg-primary group-data-[variant=secondary]/tabs-list:data-active:text-on-primary group-data-[variant=secondary]/tabs-list:data-active:shadow-elevation-1",
		"group-data-[variant=default]/tabs-list:rounded-full group-data-[variant=default]/tabs-list:data-active:bg-primary group-data-[variant=default]/tabs-list:data-active:text-on-primary group-data-[variant=default]/tabs-list:data-active:shadow-elevation-1",
		className
	)}
	{...restProps}
/>
