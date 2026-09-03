<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";

	type Props = {
		class?: string;
		children?: Snippet;
	};

	let { class: className, children }: Props = $props();
</script>

<div
	role="list"
	class={cn(
		"flex flex-col divide-y divide-md-outline-variant/30 rounded-2xl bg-md-surface-container-low overflow-hidden",
		className
	)}
>
	{@render children?.()}
</div>
