<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { HTMLInputAttributes } from "svelte/elements";
	import type { Snippet } from "svelte";

	type Props = HTMLInputAttributes & {
		variant?: "filled" | "outlined";
		label?: string;
		supportingText?: string;
		error?: string | boolean;
		leadingIcon?: Snippet;
		trailingIcon?: Snippet;
		counter?: string;
	};

	let {
		class: className,
		variant = "outlined",
		label,
		supportingText,
		error = false,
		leadingIcon,
		trailingIcon,
		counter,
		value = $bindable(""),
		id = `m3-input-${Math.random().toString(36).substring(2, 7)}`,
		disabled = false,
		type = "text",
		...restProps
	}: Props = $props();

	let isFocused = $state(false);
	const hasValue = $derived(value !== undefined && value !== null && String(value).length > 0);
	const isFloating = $derived(isFocused || hasValue);
	const hasError = $derived(Boolean(error));
</script>

<div class={cn("flex flex-col gap-1 w-full", className)}>
	<div
		class={cn(
			"relative flex items-center transition-all duration-200",
			variant === "filled" && [
				"h-14 rounded-t-xl rounded-b-none bg-md-surface-container-highest px-4 border-b-2",
				hasError
					? "border-md-error"
					: isFocused
						? "border-primary"
						: "border-md-on-surface-variant/40 hover:border-md-on-surface"
			],
			variant === "outlined" && [
				"h-14 rounded-xl border bg-transparent px-4",
				hasError
					? "border-2 border-md-error"
					: isFocused
						? "border-2 border-primary"
						: "border-md-outline hover:border-md-on-surface"
			],
			disabled && "opacity-38 pointer-events-none"
		)}
	>
		{#if leadingIcon}
			<div class="mr-3 text-md-on-surface-variant flex items-center justify-center shrink-0 size-5">
				{@render leadingIcon()}
			</div>
		{/if}

		<div class="relative flex-1 h-full flex items-center">
			{#if label}
				<label
					for={id}
					class={cn(
						"absolute left-0 pointer-events-none transition-all duration-200 select-none",
						isFloating
							? "top-2 text-[11px] font-medium tracking-wide"
							: "top-1/2 -translate-y-1/2 text-sm",
						hasError
							? "text-md-error"
							: isFocused
								? "text-primary font-medium"
								: "text-md-on-surface-variant"
					)}
				>
					{label}
				</label>
			{/if}

			<input
				{id}
				{type}
				bind:value
				{disabled}
				onfocus={() => (isFocused = true)}
				onblur={() => (isFocused = false)}
				class={cn(
					"w-full bg-transparent text-sm text-md-on-surface outline-none placeholder:text-transparent",
					label && isFloating && "pt-4",
					!label && "py-2"
				)}
				{...restProps}
			/>
		</div>

		{#if trailingIcon}
			<div class="ml-3 text-md-on-surface-variant flex items-center justify-center shrink-0 size-5">
				{@render trailingIcon()}
			</div>
		{/if}
	</div>

	{#if supportingText || error || counter}
		<div class="flex items-center justify-between px-3 text-xs">
			<span class={cn(hasError ? "text-md-error" : "text-md-on-surface-variant")}>
				{typeof error === "string" ? error : supportingText}
			</span>
			{#if counter}
				<span class="text-md-on-surface-variant shrink-0 ml-auto">{counter}</span>
			{/if}
		</div>
	{/if}
</div>
