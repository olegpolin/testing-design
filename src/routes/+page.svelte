<script lang="ts">
	import { toggleMode, mode } from 'mode-watcher';
	import { toast } from 'svelte-sonner';

	// Primitives and Baseline UI Components
	import { Button } from '#lib/components/ui/button';
	import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '#lib/components/ui/card';
	import { Badge } from '#lib/components/ui/badge';
	import { Checkbox } from '#lib/components/ui/checkbox';
	import { RadioGroup, RadioGroupItem } from '#lib/components/ui/radio-group';
	import { Switch } from '#lib/components/ui/switch';
	import { Slider } from '#lib/components/ui/slider';
	import { Tabs, TabsList, TabsTrigger, TabsContent } from '#lib/components/ui/tabs';
	import { Progress } from '#lib/components/ui/progress';
	import { Textarea } from '#lib/components/ui/textarea';
	import { Separator } from '#lib/components/ui/separator';
	import { Avatar, AvatarFallback, AvatarImage } from '#lib/components/ui/avatar';
	import * as Dialog from '#lib/components/ui/dialog';
	import * as Sheet from '#lib/components/ui/sheet';
	import * as Tooltip from '#lib/components/ui/tooltip';

	// Material 3 Expressive Custom Components
	import { TextField } from '#lib/components/ui/textfield';
	import { SearchBar } from '#lib/components/ui/search-bar';
	import { Chip } from '#lib/components/ui/chip';
	import { SegmentedButton } from '#lib/components/ui/segmented-button';
	import { SplitButton } from '#lib/components/ui/split-button';
	import { NavigationBar, type NavItem } from '#lib/components/ui/navigation-bar';
	import { NavigationRail, type RailItem } from '#lib/components/ui/navigation-rail';
	import { NavigationDrawer, type DrawerItem } from '#lib/components/ui/navigation-drawer';
	import { TopAppBar } from '#lib/components/ui/top-app-bar';
	import { CircularProgress } from '#lib/components/ui/circular-progress';
	import { List, ListItem } from '#lib/components/ui/list';

	// Icons
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import PaletteIcon from '@lucide/svelte/icons/palette';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import EditIcon from '@lucide/svelte/icons/edit';
	import HeartIcon from '@lucide/svelte/icons/heart';
	import Share2Icon from '@lucide/svelte/icons/share-2';
	import BellIcon from '@lucide/svelte/icons/bell';
	import SettingsIcon from '@lucide/svelte/icons/settings';
	import HomeIcon from '@lucide/svelte/icons/home';
	import InboxIcon from '@lucide/svelte/icons/inbox';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import CheckCircleIcon from '@lucide/svelte/icons/check-circle';
	import ClockIcon from '@lucide/svelte/icons/clock';
	import StarIcon from '@lucide/svelte/icons/star';
	import FolderIcon from '@lucide/svelte/icons/folder';
	import MailIcon from '@lucide/svelte/icons/mail';
	import LockIcon from '@lucide/svelte/icons/lock';
	import CheckIcon from '@lucide/svelte/icons/check';
	import SparklesIcon from '@lucide/svelte/icons/sparkles';
	import MenuIcon from '@lucide/svelte/icons/menu';
	import ExternalLinkIcon from '@lucide/svelte/icons/external-link';
	import SlidersIcon from '@lucide/svelte/icons/sliders';
	import SendIcon from '@lucide/svelte/icons/send';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import UserIcon from '@lucide/svelte/icons/user';
	import EyeIcon from '@lucide/svelte/icons/eye';
	import EyeOffIcon from '@lucide/svelte/icons/eye-off';
	import DownloadIcon from '@lucide/svelte/icons/download';
	import LayersIcon from '@lucide/svelte/icons/layers';

	// Dynamic Seed Themes
	const themes = [
		{ id: "default", name: "Deep Indigo", hue: "Indigo", color: "#6750A4" },
		{ id: "teal", name: "Ocean Teal", hue: "Teal", color: "#006874" },
		{ id: "forest", name: "Botanical Forest", hue: "Forest", color: "#2E6A44" },
		{ id: "amber", name: "Radiant Amber", hue: "Amber", color: "#7B5800" },
		{ id: "rose", name: "Berry Crimson", hue: "Rose", color: "#8E4960" },
		{ id: "monochrome", name: "Tech Monochrome", hue: "Mono", color: "#303030" },
	];

	let currentTheme = $state("default");
	let searchQuery = $state("");

	function changeTheme(themeId: string) {
		currentTheme = themeId;
		if (themeId === "default") {
			document.documentElement.removeAttribute("data-theme");
		} else {
			document.documentElement.setAttribute("data-theme", themeId);
		}
		toast.success(`Theme updated to ${themes.find(t => t.id === themeId)?.name}`);
	}

	// Interactive component states
	let switchChecked1 = $state(true);
	let switchChecked2 = $state(true);
	let switchChecked3 = $state(false);
	let checkbox1 = $state(true);
	let checkbox2 = $state(false);
	let checkbox3 = $state(false);
	let radioValue = $state("medium");
	let sliderValue = $state([65]);
	let progressValue = $state(68);

	// Chips state
	let selectedFilterChip = $state<string[]>(["design", "ux"]);
	let activeSegment = $state("daily");
	let multiSegment = $state(["bold", "italic"]);

	// Navigation mock data
	let activeNavId = $state("home");
	const navItems: NavItem[] = [
		{ id: "home", label: "Home", icon: HomeIcon },
		{ id: "inbox", label: "Inbox", icon: InboxIcon, badge: 4 },
		{ id: "calendar", label: "Calendar", icon: CalendarIcon },
		{ id: "settings", label: "Settings", icon: SettingsIcon },
	];

	const railItems: RailItem[] = [
		{ id: "home", label: "Home", icon: HomeIcon },
		{ id: "inbox", label: "Inbox", icon: InboxIcon, badge: 4 },
		{ id: "tasks", label: "Tasks", icon: CheckCircleIcon },
		{ id: "calendar", label: "Calendar", icon: CalendarIcon },
	];

	const drawerItems: DrawerItem[] = [
		{ id: "inbox", label: "All Inbox", icon: InboxIcon, badge: 12, section: "Mail" },
		{ id: "starred", label: "Starred", icon: StarIcon, section: "Mail" },
		{ id: "sent", label: "Sent Mail", icon: SendIcon, section: "Mail" },
		{ id: "projects", label: "Design Systems", icon: FolderIcon, badge: 3, section: "Workspaces" },
		{ id: "personal", label: "Personal Tasks", icon: CheckCircleIcon, section: "Workspaces" },
	];

	// Dialog and Sheet states
	let isDialogOpen = $state(false);
	let isSheetOpen = $state(false);
	let isSideSheetOpen = $state(false);

	// Floating label password visibility
	let showPassword = $state(false);
	let textFieldValue = $state("alex.design@expressive.m3");
	let passwordValue = $state("MaterialYou2025!");

	// Real-world mini app state
	let appTasks = $state([
		{ id: 1, title: "Review MD3 Expressive typography specs", tag: "Design", due: "Today, 4:00 PM", done: false, priority: "High" },
		{ id: 2, title: "Audit layout.css OKLCH color token scales", tag: "CSS", due: "Tomorrow", done: true, priority: "Medium" },
		{ id: 3, title: "Test responsive bottom navigation on mobile", tag: "QA", due: "Sep 5", done: false, priority: "Low" },
		{ id: 4, title: "Deploy showcase demo to production", tag: "Release", due: "Sep 8", done: false, priority: "Critical" },
	]);
	let appActiveFilter = $state("all");
	let newTaskTitle = $state("");

	function toggleTask(id: number) {
		appTasks = appTasks.map(t => t.id === id ? { ...t, done: !t.done } : t);
	}

	function addTask() {
		if (!newTaskTitle.trim()) return;
		appTasks = [
			...appTasks,
			{
				id: Date.now(),
				title: newTaskTitle.trim(),
				tag: "Quick Task",
				due: "Today",
				done: false,
				priority: "Medium"
			}
		];
		newTaskTitle = "";
		toast.success("Task added to workspace");
	}

	// Active tab in main tabs section
	let currentMainTab = $state("components");
</script>

<svelte:head>
	<title>Material Design 3 Expressive UI Showcase</title>
	<meta name="description" content="A comprehensive Material Design 3 Expressive UI showcase built on shadcn-svelte baseline and bits-ui primitives with full OKLCH layout.css tokens." />
</svelte:head>

<div class="min-h-screen bg-md-surface text-md-on-surface transition-colors duration-200">
	<!-- Top Sticky App Bar -->
	<header class="sticky top-0 z-40 w-full border-b border-md-outline-variant/40 bg-md-surface/90 backdrop-blur-md">
		<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
			<div class="flex items-center gap-3">
				<div class="flex size-10 items-center justify-center rounded-2xl bg-primary text-on-primary shadow-elevation-1">
					<SparklesIcon class="size-5" />
				</div>
				<div>
					<div class="flex items-center gap-2">
						<span class="text-base font-bold tracking-tight sm:text-lg">Material 3 Expressive</span>
						<Badge variant="tertiary" size="sm">Svelte 5</Badge>
					</div>
					<p class="hidden text-xs text-md-on-surface-variant sm:block">Bits UI Primitives + shadcn-svelte Baseline</p>
				</div>
			</div>

			<!-- Dynamic Seed Selector & Controls -->
			<div class="flex items-center gap-2 sm:gap-3">
				<!-- Theme Seed Palette Picker -->
				<div class="flex items-center gap-1 rounded-full border border-md-outline-variant/60 bg-md-surface-container-low p-1 shadow-elevation-0">
					{#each themes as t}
						<button
							type="button"
							onclick={() => changeTheme(t.id)}
							title="{t.name} Theme Seed"
							aria-label="{t.name} Theme"
							class="size-6 rounded-full transition-transform hover:scale-110 flex items-center justify-center {currentTheme === t.id ? 'ring-2 ring-primary ring-offset-2 ring-offset-md-surface scale-110' : 'opacity-70 hover:opacity-100'}"
							style="background-color: {t.color};"
						>
							{#if currentTheme === t.id}
								<CheckIcon class="size-3 text-white stroke-[3]" />
							{/if}
						</button>
					{/each}
				</div>

				<!-- Dark/Light Mode Toggle -->
				<Button
					variant="ghost"
					size="icon"
					onclick={() => toggleMode()}
					aria-label="Toggle dark mode"
					class="text-md-on-surface hover:bg-md-on-surface/8"
				>
					<SunIcon class="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<MoonIcon class="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
				</Button>

				<Button
					variant="filled"
					size="sm"
					class="hidden sm:inline-flex"
					onclick={() => toast.info("Material 3 Expressive UI showcase initialized.")}
				>
					<LayersIcon class="size-4 mr-1.5" />
					Tokens Live
				</Button>
			</div>
		</div>
	</header>

	<main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
		<!-- Hero Architecture Banner -->
		<section class="mb-12 overflow-hidden rounded-3xl bg-md-surface-container-low p-6 sm:p-10 shadow-elevation-1 border border-md-outline-variant/30">
			<div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
				<div class="max-w-2xl space-y-4">
					<div class="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
						<SparklesIcon class="size-3.5" />
						Google Material Design 3 Expressive System
					</div>
					<h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-md-on-surface">
						Expressive UI Showcase
					</h1>
					<p class="text-base text-md-on-surface-variant leading-relaxed">
						An authentic showcase of Material Design 3 Expressive components. Grounded in 
						<strong class="text-foreground">bits-ui</strong> for accessible headless primitives and 
						<strong class="text-foreground">shadcn-svelte</strong> as the open code baseline where you own the code in <code class="rounded bg-md-surface-container-highest px-1.5 py-0.5 text-xs font-mono">src/lib/components/ui/</code>.
					</p>

					<!-- Architectural Distinction Badges -->
					<div class="flex flex-wrap gap-2 pt-2">
						<div class="flex items-center gap-1.5 rounded-xl bg-md-surface-container-high px-3 py-1.5 text-xs text-md-on-surface">
							<span class="size-2 rounded-full bg-primary"></span>
							<strong>bits-ui:</strong> Headless Accessible Primitive
						</div>
						<div class="flex items-center gap-1.5 rounded-xl bg-md-surface-container-high px-3 py-1.5 text-xs text-md-on-surface">
							<span class="size-2 rounded-full bg-md-tertiary"></span>
							<strong>shadcn-svelte:</strong> Code Ownership Baseline
						</div>
						<div class="flex items-center gap-1.5 rounded-xl bg-md-surface-container-high px-3 py-1.5 text-xs text-md-on-surface">
							<span class="size-2 rounded-full bg-secondary"></span>
							<strong>layout.css:</strong> OKLCH Expressive Design Tokens
						</div>
					</div>
				</div>

				<!-- Quick Stats Swatch Card -->
				<div class="flex flex-col gap-3 rounded-2xl bg-md-surface p-5 border border-md-outline-variant/40 shadow-elevation-1 min-w-[280px]">
					<div class="text-xs font-bold uppercase tracking-wider text-md-on-surface-variant">Showcase Highlights</div>
					<div class="grid grid-cols-2 gap-3 text-center">
						<div class="rounded-xl bg-md-surface-container-low p-3">
							<div class="text-2xl font-bold text-primary">11</div>
							<div class="text-[11px] text-md-on-surface-variant">Component Suites</div>
						</div>
						<div class="rounded-xl bg-md-surface-container-low p-3">
							<div class="text-2xl font-bold text-md-tertiary">5 Tiers</div>
							<div class="text-[11px] text-md-on-surface-variant">Tonal Containers</div>
						</div>
						<div class="rounded-xl bg-md-surface-container-low p-3">
							<div class="text-2xl font-bold text-secondary-foreground">6 Seeds</div>
							<div class="text-[11px] text-md-on-surface-variant">Dynamic Themes</div>
						</div>
						<div class="rounded-xl bg-md-surface-container-low p-3">
							<div class="text-2xl font-bold text-foreground">100%</div>
							<div class="text-[11px] text-md-on-surface-variant">Light & Dark Mode</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Main Showcase Tabs -->
		<Tabs bind:value={currentMainTab} class="space-y-8">
			<TabsList class="mb-8">
				<TabsTrigger value="components" class="text-sm">Components Gallery</TabsTrigger>
				<TabsTrigger value="tokens" class="text-sm">Design Tokens & Palette</TabsTrigger>
				<TabsTrigger value="app-demo" class="text-sm">Interactive App Mockup</TabsTrigger>
			</TabsList>

			<!-- TAB 1: ALL COMPONENTS GALLERY -->
			<TabsContent value="components" class="space-y-14">
				
				<!-- 1. BUTTONS & FABs -->
				<section class="space-y-6">
					<div class="border-b border-md-outline-variant/40 pb-3">
						<h2 class="text-2xl font-bold text-md-on-surface">Buttons & Floating Action Buttons</h2>
						<p class="text-sm text-md-on-surface-variant">Filled, Elevated, Tonal, Outlined, Text, FAB, Extended FAB, Segmented, and Split Buttons</p>
					</div>

					<!-- Standard Button Variants -->
					<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
						<Card variant="outlined" class="p-6">
							<CardHeader class="p-0 pb-4">
								<CardTitle class="text-base font-bold">Standard Action Buttons</CardTitle>
								<CardDescription class="text-xs">All 5 standard emphasis levels in Material Design 3</CardDescription>
							</CardHeader>
							<CardContent class="p-0 flex flex-wrap items-center gap-3">
								<Button variant="filled">Filled Button</Button>
								<Button variant="elevated">Elevated</Button>
								<Button variant="tonal">Filled Tonal</Button>
								<Button variant="outlined">Outlined</Button>
								<Button variant="text">Text Button</Button>
								<Button variant="destructive">Destructive</Button>
							</CardContent>
						</Card>

						<!-- Floating Action Buttons (FAB) -->
						<Card variant="outlined" class="p-6">
							<CardHeader class="p-0 pb-4">
								<CardTitle class="text-base font-bold">Floating Action Buttons (FAB)</CardTitle>
								<CardDescription class="text-xs">Small (40px), Standard (56px), Large (96px, 28px radius), and Extended FAB</CardDescription>
							</CardHeader>
							<CardContent class="p-0 flex flex-wrap items-center gap-4">
								<!-- Small FAB -->
								<Button variant="fab" size="fab-sm" title="Small FAB (40px)">
									<PlusIcon class="size-5" />
								</Button>

								<!-- Standard FAB Primary -->
								<Button variant="fab-primary" size="fab-default" title="Standard FAB (56px)">
									<EditIcon class="size-6" />
								</Button>

								<!-- Standard FAB Surface -->
								<Button variant="fab-surface" size="fab-default" title="Surface FAB">
									<HeartIcon class="size-6 text-primary" />
								</Button>

								<!-- Extended FAB -->
								<Button variant="fab" size="fab-extended">
									<PlusIcon class="size-6" />
									<span>Compose</span>
								</Button>

								<!-- Tertiary Extended FAB -->
								<Button variant="fab-tertiary" size="fab-extended">
									<SparklesIcon class="size-6" />
									<span>AI Assist</span>
								</Button>
							</CardContent>
						</Card>

						<!-- Segmented Buttons & Split Button -->
						<Card variant="outlined" class="p-6">
							<CardHeader class="p-0 pb-4">
								<CardTitle class="text-base font-bold">Segmented Buttons</CardTitle>
								<CardDescription class="text-xs">Single-select view switcher with animated checkmarks</CardDescription>
							</CardHeader>
							<CardContent class="p-0 space-y-4">
								<div>
									<div class="mb-2 text-xs font-semibold text-md-on-surface-variant">Single Select (Time Range)</div>
									<SegmentedButton
										options={[
											{ id: "daily", label: "Daily" },
											{ id: "weekly", label: "Weekly" },
											{ id: "monthly", label: "Monthly" },
											{ id: "annual", label: "Annual" },
										]}
										bind:selected={activeSegment}
									/>
								</div>

								<div>
									<div class="mb-2 text-xs font-semibold text-md-on-surface-variant">Multi Select (Formatting)</div>
									<SegmentedButton
										multi
										options={[
											{ id: "bold", label: "Bold" },
											{ id: "italic", label: "Italic" },
											{ id: "underline", label: "Underline" },
										]}
										bind:selected={multiSegment}
									/>
								</div>
							</CardContent>
						</Card>

						<!-- Split Button & Icon Buttons -->
						<Card variant="outlined" class="p-6">
							<CardHeader class="p-0 pb-4">
								<CardTitle class="text-base font-bold">Split Buttons & Icon Buttons</CardTitle>
								<CardDescription class="text-xs">Expressive connected split button and icon button sizes</CardDescription>
							</CardHeader>
							<CardContent class="p-0 space-y-4">
								<div class="flex flex-wrap items-center gap-3">
									<SplitButton
										label="Deploy Project"
										onclick={() => toast.success("Deploying to production...")}
										onMenuToggle={() => toast.info("Opened deployment options")}
									/>

									<SplitButton
										variant="tonal"
										label="Save Draft"
										onclick={() => toast.success("Draft saved")}
										onMenuToggle={() => toast.info("Draft options")}
									/>
								</div>

								<div class="pt-2">
									<div class="mb-2 text-xs font-semibold text-md-on-surface-variant">Icon Buttons (XS, SM, Default, LG)</div>
									<div class="flex items-center gap-3">
										<Button variant="tonal" size="icon-xs"><BellIcon class="size-3.5" /></Button>
										<Button variant="tonal" size="icon-sm"><BellIcon class="size-4" /></Button>
										<Button variant="tonal" size="icon"><BellIcon class="size-5" /></Button>
										<Button variant="filled" size="icon-lg"><BellIcon class="size-6" /></Button>
										<Button variant="outline" size="icon"><SettingsIcon class="size-5" /></Button>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>

				<!-- 2. CHIPS & BADGES -->
				<section class="space-y-6">
					<div class="border-b border-md-outline-variant/40 pb-3">
						<h2 class="text-2xl font-bold text-md-on-surface">Chips & Badges</h2>
						<p class="text-sm text-md-on-surface-variant">Assist, Filter, Input, and Suggestion chips, plus numeric, dot, and expressive badges</p>
					</div>

					<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
						<!-- Chips Gallery -->
						<Card variant="outlined" class="p-6">
							<CardHeader class="p-0 pb-4">
								<CardTitle class="text-base font-bold">Material 3 Chips</CardTitle>
								<CardDescription class="text-xs">Interactive filter chips with animated checkmarks, assist, and input chips</CardDescription>
							</CardHeader>
							<CardContent class="p-0 space-y-4">
								<div>
									<div class="mb-2 text-xs font-semibold text-md-on-surface-variant">Filter Chips (Click to toggle)</div>
									<div class="flex flex-wrap gap-2">
										<Chip
											variant="filter"
											label="Design Systems"
											selected={selectedFilterChip.includes("design")}
											onclick={() => {
												selectedFilterChip = selectedFilterChip.includes("design")
													? selectedFilterChip.filter(c => c !== "design")
													: [...selectedFilterChip, "design"];
											}}
										/>
										<Chip
											variant="filter"
											label="User Experience"
											selected={selectedFilterChip.includes("ux")}
											onclick={() => {
												selectedFilterChip = selectedFilterChip.includes("ux")
													? selectedFilterChip.filter(c => c !== "ux")
													: [...selectedFilterChip, "ux"];
											}}
										/>
										<Chip
											variant="filter"
											label="SvelteKit 3"
											selected={selectedFilterChip.includes("svelte")}
											onclick={() => {
												selectedFilterChip = selectedFilterChip.includes("svelte")
													? selectedFilterChip.filter(c => c !== "svelte")
													: [...selectedFilterChip, "svelte"];
											}}
										/>
										<Chip
											variant="filter"
											label="Tailwind CSS"
											selected={selectedFilterChip.includes("tailwind")}
											onclick={() => {
												selectedFilterChip = selectedFilterChip.includes("tailwind")
													? selectedFilterChip.filter(c => c !== "tailwind")
													: [...selectedFilterChip, "tailwind"];
											}}
										/>
									</div>
								</div>

								<div>
									<div class="mb-2 text-xs font-semibold text-md-on-surface-variant">Assist & Suggestion Chips</div>
									<div class="flex flex-wrap gap-2">
										{#snippet calendarIconSnippet()}<CalendarIcon class="size-4" />{/snippet}
										<Chip variant="assist" label="Add to Calendar" leadingIcon={calendarIconSnippet} onclick={() => toast.info("Added to calendar")} />
										
										{#snippet shareIconSnippet()}<Share2Icon class="size-4" />{/snippet}
										<Chip variant="assist" label="Share Link" leadingIcon={shareIconSnippet} onclick={() => toast.info("Link copied")} />
										
										<Chip variant="suggestion" label="Summarize article" onclick={() => toast.info("AI summary generated")} />
										<Chip variant="suggestion" elevated label="Generate report" onclick={() => toast.info("Report created")} />
									</div>
								</div>

								<div>
									<div class="mb-2 text-xs font-semibold text-md-on-surface-variant">Input Chips (With remove action)</div>
									<div class="flex flex-wrap gap-2">
										<Chip
											variant="input"
											label="Alex Rivera"
											avatarUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face"
											onRemove={() => toast.info("Removed Alex Rivera")}
										/>
										<Chip
											variant="input"
											label="Marcus Vance"
											avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
											onRemove={() => toast.info("Removed Marcus Vance")}
										/>
									</div>
								</div>
							</CardContent>
						</Card>

						<!-- Badges Gallery -->
						<Card variant="outlined" class="p-6">
							<CardHeader class="p-0 pb-4">
								<CardTitle class="text-base font-bold">Badges & Notification Dots</CardTitle>
								<CardDescription class="text-xs">Numeric, dot, tertiary, error, and expressive asymmetrical badges</CardDescription>
							</CardHeader>
							<CardContent class="p-0 space-y-5">
								<div>
									<div class="mb-2 text-xs font-semibold text-md-on-surface-variant">Badge Styles</div>
									<div class="flex flex-wrap items-center gap-3">
										<Badge variant="primary">Primary</Badge>
										<Badge variant="secondary">Secondary</Badge>
										<Badge variant="tertiary">Tertiary</Badge>
										<Badge variant="error">Critical</Badge>
										<Badge variant="surface">Surface</Badge>
										<Badge variant="outline">Outlined</Badge>
										<Badge variant="expressive">Expressive Shape</Badge>
									</div>
								</div>

								<div>
									<div class="mb-2 text-xs font-semibold text-md-on-surface-variant">Numeric & Dot Badges on Components</div>
									<div class="flex items-center gap-6">
										<div class="relative inline-flex">
											<Button variant="tonal" size="icon"><BellIcon class="size-5" /></Button>
											<span class="absolute -top-1 -right-1 flex size-3 rounded-full bg-md-error ring-2 ring-md-surface"></span>
										</div>

										<div class="relative inline-flex">
											<Button variant="tonal" size="icon"><MailIcon class="size-5" /></Button>
											<Badge variant="error" size="sm" class="absolute -top-1.5 -right-2">9+</Badge>
										</div>

										<div class="relative inline-flex">
											<Button variant="outlined" size="default">
												<span>Inbox</span>
												<Badge variant="tertiary" size="sm" class="ml-2">24</Badge>
											</Button>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>

				<!-- 3. SELECTION CONTROLS -->
				<section class="space-y-6">
					<div class="border-b border-md-outline-variant/40 pb-3">
						<h2 class="text-2xl font-bold text-md-on-surface">Selection Controls</h2>
						<p class="text-sm text-md-on-surface-variant">Checkboxes, Radio Buttons, M3 Expressive Switches with icon thumbs, and Sliders</p>
					</div>

					<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
						<!-- Switches & Checkboxes -->
						<Card variant="outlined" class="p-6">
							<CardHeader class="p-0 pb-4">
								<CardTitle class="text-base font-bold">Switches & Checkboxes</CardTitle>
								<CardDescription class="text-xs">Authentic M3 52x32px switch tracks with embedded thumb icon support</CardDescription>
							</CardHeader>
							<CardContent class="p-0 space-y-5">
								<!-- Switches -->
								<div class="space-y-3">
									<div class="flex items-center justify-between">
										<div>
											<div class="text-sm font-medium">Icon-Thumb Switch</div>
											<div class="text-xs text-md-on-surface-variant">Displays check/cross glyph inside the sliding thumb</div>
										</div>
										<Switch showIcons bind:checked={switchChecked1} />
									</div>

									<Separator class="bg-md-outline-variant/30" />

									<div class="flex items-center justify-between">
										<div>
											<div class="text-sm font-medium">Standard M3 Switch</div>
											<div class="text-xs text-md-on-surface-variant">52x32px track, 24px active thumb</div>
										</div>
										<Switch bind:checked={switchChecked2} />
									</div>
								</div>

								<Separator class="bg-md-outline-variant/30" />

								<!-- Checkboxes -->
								<div class="space-y-3">
									<div class="text-xs font-semibold text-md-on-surface-variant">Checkboxes</div>
									<div class="flex flex-col gap-2.5">
										<label class="flex items-center gap-3 cursor-pointer text-sm">
											<Checkbox bind:checked={checkbox1} />
											<span>Checked item with animated spring checkmark</span>
										</label>
										<label class="flex items-center gap-3 cursor-pointer text-sm">
											<Checkbox bind:checked={checkbox2} />
											<span>Unchecked state with hover state layer</span>
										</label>
										<label class="flex items-center gap-3 cursor-pointer text-sm">
											<Checkbox indeterminate bind:checked={checkbox3} />
											<span>Indeterminate state (dash indicator)</span>
										</label>
									</div>
								</div>
							</CardContent>
						</Card>

						<!-- Radios & Sliders -->
						<Card variant="outlined" class="p-6">
							<CardHeader class="p-0 pb-4">
								<CardTitle class="text-base font-bold">Radio Groups & Sliders</CardTitle>
								<CardDescription class="text-xs">Radio items with zoom-in dots, and M3 continuous/discrete sliders</CardDescription>
							</CardHeader>
							<CardContent class="p-0 space-y-6">
								<!-- Radio Group -->
								<div>
									<div class="mb-3 text-xs font-semibold text-md-on-surface-variant">Task Priority (Radio Group)</div>
									<RadioGroup bind:value={radioValue} class="flex flex-wrap gap-4">
										<label class="flex items-center gap-2.5 cursor-pointer text-sm font-medium">
											<RadioGroupItem value="low" />
											<span>Low</span>
										</label>
										<label class="flex items-center gap-2.5 cursor-pointer text-sm font-medium">
											<RadioGroupItem value="medium" />
											<span>Medium</span>
										</label>
										<label class="flex items-center gap-2.5 cursor-pointer text-sm font-medium">
											<RadioGroupItem value="high" />
											<span>High</span>
										</label>
										<label class="flex items-center gap-2.5 cursor-pointer text-sm font-medium">
											<RadioGroupItem value="critical" />
											<span class="text-md-error">Critical</span>
										</label>
									</RadioGroup>
								</div>

								<Separator class="bg-md-outline-variant/30" />

								<!-- Sliders -->
								<div class="space-y-4">
									<div class="flex items-center justify-between text-xs font-semibold text-md-on-surface-variant">
										<span>Continuous Slider</span>
										<span class="font-mono text-primary font-bold text-sm">{sliderValue[0]}%</span>
									</div>
									<Slider type="multiple" bind:value={sliderValue} max={100} step={1} />
								</div>
							</CardContent>
						</Card>
					</div>
				</section>

				<!-- 4. TEXT FIELDS & SEARCH -->
				<section class="space-y-6">
					<div class="border-b border-md-outline-variant/40 pb-3">
						<h2 class="text-2xl font-bold text-md-on-surface">Text Fields & Search</h2>
						<p class="text-sm text-md-on-surface-variant">Filled and Outlined textfields with animated floating labels, helper text, and 56px Pill Search Bar</p>
					</div>

					<div class="space-y-6">
						<!-- Search Bar Preview -->
						<div class="max-w-2xl">
							<SearchBar
								bind:value={searchQuery}
								placeholder="Search Material Design components..."
								onSearch={(q) => toast.info(`Searching: ${q}`)}
								onFilter={() => toast.info("Filter clicked")}
							/>
						</div>

						<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
							<!-- Outlined Text Field with Mail Icon -->
							{#snippet mailIconSnippet()}<MailIcon class="size-5" />{/snippet}
							<TextField
								variant="outlined"
								label="Email Address"
								supportingText="We will send project updates here"
								bind:value={textFieldValue}
								leadingIcon={mailIconSnippet}
							/>

							<!-- Outlined Password Field with Toggle -->
							{#snippet lockIconSnippet()}<LockIcon class="size-5" />{/snippet}
							{#snippet passwordTrailingSnippet()}
								<button
									type="button"
									onclick={() => showPassword = !showPassword}
									aria-label="Toggle password visibility"
									class="hover:text-primary transition-colors cursor-pointer"
								>
									{#if showPassword}
										<EyeOffIcon class="size-5" />
									{:else}
										<EyeIcon class="size-5" />
									{/if}
								</button>
							{/snippet}
							<TextField
								variant="outlined"
								label="Account Password"
								type={showPassword ? "text" : "password"}
								bind:value={passwordValue}
								supportingText="Must contain at least 8 characters"
								counter="{passwordValue.length}/32"
								leadingIcon={lockIconSnippet}
								trailingIcon={passwordTrailingSnippet}
							/>

							<!-- Filled Text Field with Error State -->
							<TextField
								variant="filled"
								label="Deployment Hostname"
								value="invalid-domain-#"
								error="Invalid domain format: illegal characters"
								supportingText="Enter a valid DNS hostname"
							/>
						</div>
					</div>
				</section>

				<!-- 5. CARDS & CONTAINMENT -->
				<section class="space-y-6">
					<div class="border-b border-md-outline-variant/40 pb-3">
						<h2 class="text-2xl font-bold text-md-on-surface">Cards & Containment</h2>
						<p class="text-sm text-md-on-surface-variant">Elevated, Filled, and Outlined cards with tonal container surfaces and interactive elevations</p>
					</div>

					<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
						<!-- Elevated Card -->
						<Card variant="elevated">
							<img
								src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=300&fit=crop"
								alt="Material Expressive"
								class="h-40 w-full object-cover rounded-xl mb-3"
							/>
							<CardHeader class="p-0 pb-2">
								<div class="flex items-center justify-between">
									<Badge variant="primary" size="sm">Elevated</Badge>
									<span class="text-xs text-md-on-surface-variant">Tonal Level 1</span>
								</div>
								<CardTitle class="text-lg font-bold mt-2">Surface Container Low</CardTitle>
								<CardDescription class="text-xs">Elevated card with soft ambient shadow and hover lift.</CardDescription>
							</CardHeader>
							<CardFooter class="p-0 pt-4 flex items-center justify-between">
								<Button variant="text" size="sm">Learn More</Button>
								<Button variant="filled" size="sm">Explore</Button>
							</CardFooter>
						</Card>

						<!-- Filled Card -->
						<Card variant="filled">
							<img
								src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&h=300&fit=crop"
								alt="Material Tonal"
								class="h-40 w-full object-cover rounded-xl mb-3"
							/>
							<CardHeader class="p-0 pb-2">
								<div class="flex items-center justify-between">
									<Badge variant="secondary" size="sm">Filled</Badge>
									<span class="text-xs text-md-on-surface-variant">Highest Container</span>
								</div>
								<CardTitle class="text-lg font-bold mt-2">Surface Highest</CardTitle>
								<CardDescription class="text-xs">Filled card utilizing high tonal container contrast without shadows.</CardDescription>
							</CardHeader>
							<CardFooter class="p-0 pt-4 flex items-center justify-between">
								<Button variant="text" size="sm">Dismiss</Button>
								<Button variant="tonal" size="sm">Select</Button>
							</CardFooter>
						</Card>

						<!-- Outlined Card -->
						<Card variant="outlined">
							<img
								src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&h=300&fit=crop"
								alt="Material Outline"
								class="h-40 w-full object-cover rounded-xl mb-3"
							/>
							<CardHeader class="p-0 pb-2">
								<div class="flex items-center justify-between">
									<Badge variant="outline" size="sm">Outlined</Badge>
									<span class="text-xs text-md-on-surface-variant">1px Outline Variant</span>
								</div>
								<CardTitle class="text-lg font-bold mt-2">Outline Variant</CardTitle>
								<CardDescription class="text-xs">Crisp outlined card for structured grid feeds and dashboards.</CardDescription>
							</CardHeader>
							<CardFooter class="p-0 pt-4 flex items-center justify-between">
								<Button variant="text" size="sm">Details</Button>
								<Button variant="outlined" size="sm">Action</Button>
							</CardFooter>
						</Card>
					</div>
				</section>

				<!-- 6. NAVIGATION COMPONENTS -->
				<section class="space-y-6">
					<div class="border-b border-md-outline-variant/40 pb-3">
						<h2 class="text-2xl font-bold text-md-on-surface">Navigation Components</h2>
						<p class="text-sm text-md-on-surface-variant">Top App Bar, Bottom Navigation Bar, Navigation Rail, and Modal Navigation Drawer</p>
					</div>

					<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
						<!-- Navigation Rail Preview -->
						<Card variant="outlined" class="p-0 overflow-hidden flex flex-col items-center">
							<div class="w-full border-b border-md-outline-variant/40 p-3 text-xs font-semibold text-md-on-surface-variant text-center">
								Navigation Rail (Desktop / Tablet)
							</div>
							<div class="h-96 w-full flex items-center justify-center bg-md-surface-container-lowest">
								{#snippet railHeaderSnippet()}
									<Button variant="fab" size="fab-sm">
										<PlusIcon class="size-5" />
									</Button>
								{/snippet}
								{#snippet railFooterSnippet()}
									<div class="size-8 rounded-full bg-md-surface-container-high flex items-center justify-center text-xs font-bold text-primary">
										AP
									</div>
								{/snippet}
								<NavigationRail
									items={railItems}
									bind:activeId={activeNavId}
									header={railHeaderSnippet}
									footer={railFooterSnippet}
								/>
							</div>
						</Card>

						<!-- Navigation Drawer Preview -->
						<Card variant="outlined" class="p-0 overflow-hidden col-span-1 lg:col-span-2">
							<div class="w-full border-b border-md-outline-variant/40 p-3 text-xs font-semibold text-md-on-surface-variant text-center">
								Navigation Drawer & Bottom Navigation Bar
							</div>
							<div class="flex flex-col md:flex-row h-96 w-full bg-md-surface-container-lowest overflow-hidden">
								<NavigationDrawer
									items={drawerItems}
									bind:activeId={activeNavId}
									headline="Material Mail"
								/>
								<div class="flex-1 flex flex-col justify-between p-6 bg-md-surface">
									<div class="space-y-2">
										<h4 class="text-base font-bold">Active Destination: <span class="text-primary capitalize">{activeNavId}</span></h4>
										<p class="text-xs text-md-on-surface-variant">
											Clicking destinations animates the 64x32px active pill indicator with state layers and transitions.
										</p>
									</div>

									<!-- Bottom Nav integrated below -->
									<div class="rounded-2xl overflow-hidden shadow-elevation-2">
										<NavigationBar items={navItems} bind:activeId={activeNavId} />
									</div>
								</div>
							</div>
						</Card>
					</div>
				</section>

				<!-- 7. PROGRESS & ACTIVITY -->
				<section class="space-y-6">
					<div class="border-b border-md-outline-variant/40 pb-3">
						<h2 class="text-2xl font-bold text-md-on-surface">Progress & Activity Indicators</h2>
						<p class="text-sm text-md-on-surface-variant">Linear and Circular Progress indicators in determinate and animated indeterminate modes</p>
					</div>

					<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
						<!-- Linear Progress -->
						<Card variant="outlined" class="p-6">
							<CardHeader class="p-0 pb-4">
								<CardTitle class="text-base font-bold">Linear Progress Indicator</CardTitle>
								<CardDescription class="text-xs">Determinate percentage bar and animated indeterminate sliding wave</CardDescription>
							</CardHeader>
							<CardContent class="p-0 space-y-6">
								<div>
									<div class="flex items-center justify-between text-xs font-semibold mb-2">
										<span>Determinate ({progressValue}%)</span>
										<button
											type="button"
											onclick={() => progressValue = (progressValue + 20) % 120}
											class="text-xs text-primary font-medium hover:underline"
										>
											+20%
										</button>
									</div>
									<Progress value={progressValue} />
								</div>

								<div>
									<div class="text-xs font-semibold mb-2">Indeterminate Loading Wave</div>
									<Progress indeterminate />
								</div>
							</CardContent>
						</Card>

						<!-- Circular Progress -->
						<Card variant="outlined" class="p-6">
							<CardHeader class="p-0 pb-4">
								<CardTitle class="text-base font-bold">Circular Progress Indicator</CardTitle>
								<CardDescription class="text-xs">Determinate SVG rings and spinning indeterminate circles (SM, Default, LG)</CardDescription>
							</CardHeader>
							<CardContent class="p-0 flex flex-wrap items-center justify-around gap-4 py-2">
								<div class="flex flex-col items-center gap-2">
									<CircularProgress value={progressValue} size="sm" />
									<span class="text-[11px] text-md-on-surface-variant">Small (24px)</span>
								</div>

								<div class="flex flex-col items-center gap-2">
									<CircularProgress value={progressValue} size="default" />
									<span class="text-[11px] text-md-on-surface-variant">Determinate ({progressValue}%)</span>
								</div>

								<div class="flex flex-col items-center gap-2">
									<CircularProgress indeterminate size="default" />
									<span class="text-[11px] text-md-on-surface-variant">Indeterminate</span>
								</div>

								<div class="flex flex-col items-center gap-2">
									<CircularProgress indeterminate size="lg" />
									<span class="text-[11px] text-md-on-surface-variant">Large (56px)</span>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>

				<!-- 8. DIALOGS, SHEETS & SNACKBARS -->
				<section class="space-y-6">
					<div class="border-b border-md-outline-variant/40 pb-3">
						<h2 class="text-2xl font-bold text-md-on-surface">Dialogs, Sheets & Snackbars</h2>
						<p class="text-sm text-md-on-surface-variant">28px rounded Alert Dialogs, Bottom Sheet with drag handle, and Sonner Snackbars</p>
					</div>

					<Card variant="outlined" class="p-6">
						<div class="flex flex-wrap items-center gap-4">
							<!-- Dialog Trigger -->
							<Dialog.Root bind:open={isDialogOpen}>
								<Dialog.Trigger>
									<Button variant="filled">Open Alert Dialog</Button>
								</Dialog.Trigger>
								<Dialog.Content>
									<Dialog.Header>
										<Dialog.Title class="text-xl font-bold">Discard draft changes?</Dialog.Title>
										<Dialog.Description class="text-sm text-md-on-surface-variant">
											This will permanently discard all unsaved edits made to the Material 3 Expressive layout.
										</Dialog.Description>
									</Dialog.Header>
									<Dialog.Footer class="flex justify-end gap-2 pt-4">
										<Button variant="text" onclick={() => isDialogOpen = false}>Cancel</Button>
										<Button variant="filled" onclick={() => {
											isDialogOpen = false;
											toast.error("Draft discarded");
										}}>
											Discard
										</Button>
									</Dialog.Footer>
								</Dialog.Content>
							</Dialog.Root>

							<!-- Bottom Sheet Trigger -->
							<Sheet.Root bind:open={isSheetOpen}>
								<Sheet.Trigger>
									<Button variant="tonal">Open Bottom Sheet</Button>
								</Sheet.Trigger>
								<Sheet.Content side="bottom">
									<Sheet.Header class="text-left">
										<Sheet.Title class="text-lg font-bold">Share Workspace Document</Sheet.Title>
										<Sheet.Description class="text-xs text-md-on-surface-variant">
											Select a contact or copy the secure link to collaborate.
										</Sheet.Description>
									</Sheet.Header>
									<div class="grid grid-cols-4 gap-4 py-4 text-center">
										{#each ["Slack", "Figma", "GitHub", "Email"] as tool}
											<button
												type="button"
												onclick={() => {
													isSheetOpen = false;
													toast.success(`Shared to ${tool}`);
												}}
												class="flex flex-col items-center gap-2 rounded-2xl bg-md-surface-container-high p-3 hover:bg-md-surface-container-highest transition-colors"
											>
												<Share2Icon class="size-5 text-primary" />
												<span class="text-xs font-medium">{tool}</span>
											</button>
										{/each}
									</div>
								</Sheet.Content>
							</Sheet.Root>

							<!-- Side Sheet Trigger -->
							<Sheet.Root bind:open={isSideSheetOpen}>
								<Sheet.Trigger>
									<Button variant="outlined">Open Side Sheet</Button>
								</Sheet.Trigger>
								<Sheet.Content side="right">
									<Sheet.Header>
										<Sheet.Title class="text-xl font-bold">Design Tokens Inspector</Sheet.Title>
										<Sheet.Description class="text-xs text-md-on-surface-variant">
											Inspect live computed token values from layout.css
										</Sheet.Description>
									</Sheet.Header>
									<div class="space-y-4 py-6 text-xs">
										<div class="rounded-xl bg-md-surface-container-lowest p-3 border border-md-outline-variant/40">
											<div class="font-mono text-primary font-bold">--md-sys-color-primary</div>
											<div class="text-md-on-surface-variant">Active Theme Primary Seed</div>
										</div>
										<div class="rounded-xl bg-md-surface-container-lowest p-3 border border-md-outline-variant/40">
											<div class="font-mono text-secondary-foreground font-bold">--md-sys-color-secondary</div>
											<div class="text-md-on-surface-variant">Tonal Container Color</div>
										</div>
										<div class="rounded-xl bg-md-surface-container-lowest p-3 border border-md-outline-variant/40">
											<div class="font-mono text-foreground font-bold">--md-sys-shape-xl: 28px</div>
											<div class="text-md-on-surface-variant">FAB & Large Dialog Radius</div>
										</div>
									</div>
								</Sheet.Content>
							</Sheet.Root>

							<!-- Snackbars (Sonner) -->
							<Button
								variant="elevated"
								onclick={() => toast("Photo moved to Trash", {
									action: {
										label: "Undo",
										onClick: () => toast.success("Restored photo"),
									},
								})}
							>
								Trigger Snackbar with Action
							</Button>
						</div>
					</Card>
				</section>

				<!-- 9. LISTS & ITEMS -->
				<section class="space-y-6">
					<div class="border-b border-md-outline-variant/40 pb-3">
						<h2 class="text-2xl font-bold text-md-on-surface">Lists & Interactive Items</h2>
						<p class="text-sm text-md-on-surface-variant">1-line, 2-line, and 3-line list items with leading media and trailing controls</p>
					</div>

					<Card variant="outlined" class="p-0 overflow-hidden">
						<List>
							<!-- 1-line item with avatar and trailing switch -->
							<ListItem
								lines={1}
								headline="Elena Morris — Lead Product Designer"
								onclick={() => toast.info("Clicked Elena Morris")}
							>
								{#snippet leading()}
									<Avatar class="size-10">
										<AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop" />
										<AvatarFallback>EM</AvatarFallback>
									</Avatar>
								{/snippet}
								{#snippet trailing()}
									<Switch bind:checked={switchChecked3} />
								{/snippet}
							</ListItem>

							<!-- 2-line item with icon and metadata -->
							<ListItem
								lines={2}
								overline="DESIGN SPRINT"
								headline="Material 3 Expressive component spec update"
								supportingText="Please review the new rounded-3xl dialog and split button guidelines."
								trailingSupportingText="10:42 AM"
								onclick={() => toast.info("Opened email")}
							>
								{#snippet leading()}
									<div class="size-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
										<MailIcon class="size-5" />
									</div>
								{/snippet}
								{#snippet trailing()}
									<StarIcon class="size-4 text-md-on-surface-variant hover:text-amber-500 transition-colors cursor-pointer" />
								{/snippet}
							</ListItem>

							<!-- 3-line item -->
							<ListItem
								lines={3}
								overline="CALENDAR EVENT"
								headline="Quarterly Design Review & Showcase Presentation"
								supportingText="Join the Google Meet to walkthrough the live SvelteKit 3 / Svelte 5 implementation of Material Design 3 Expressive UI components."
								trailingSupportingText="In 30m"
								onclick={() => toast.info("Opened event")}
							>
								{#snippet leading()}
									<div class="size-10 rounded-full bg-md-surface-container-high text-primary flex items-center justify-center">
										<CalendarIcon class="size-5" />
									</div>
								{/snippet}
							</ListItem>
						</List>
					</Card>
				</section>
			</TabsContent>

			<!-- TAB 2: DESIGN TOKENS & PALETTE -->
			<TabsContent value="tokens" class="space-y-12">
				<!-- Tonal Surface Levels -->
				<section class="space-y-6">
					<div class="border-b border-md-outline-variant/40 pb-3">
						<h2 class="text-2xl font-bold text-md-on-surface">Tonal Surface Elevation System</h2>
						<p class="text-sm text-md-on-surface-variant">In MD3, surface containers express elevation through tonal tinting rather than dark shadows.</p>
					</div>

					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
						<div class="flex flex-col gap-2 rounded-2xl bg-md-surface-container-lowest p-5 border border-md-outline-variant/30 text-sm">
							<span class="font-bold">Lowest Container</span>
							<code class="text-[11px] text-md-on-surface-variant font-mono">--surface-container-lowest</code>
							<p class="text-xs text-md-on-surface-variant mt-2">Lowest contrast, ideal for card on card or deep background.</p>
						</div>

						<div class="flex flex-col gap-2 rounded-2xl bg-md-surface-container-low p-5 border border-md-outline-variant/30 text-sm">
							<span class="font-bold">Low Container</span>
							<code class="text-[11px] text-md-on-surface-variant font-mono">--surface-container-low</code>
							<p class="text-xs text-md-on-surface-variant mt-2">Default base for elevated cards and side sheets.</p>
						</div>

						<div class="flex flex-col gap-2 rounded-2xl bg-md-surface-container p-5 border border-md-outline-variant/30 text-sm">
							<span class="font-bold">Container</span>
							<code class="text-[11px] text-md-on-surface-variant font-mono">--surface-container</code>
							<p class="text-xs text-md-on-surface-variant mt-2">Standard background for bottom navigation bars.</p>
						</div>

						<div class="flex flex-col gap-2 rounded-2xl bg-md-surface-container-high p-5 border border-md-outline-variant/30 text-sm">
							<span class="font-bold">High Container</span>
							<code class="text-[11px] text-md-on-surface-variant font-mono">--surface-container-high</code>
							<p class="text-xs text-md-on-surface-variant mt-2">Prominent surfaces such as Dialogs and Search Bars.</p>
						</div>

						<div class="flex flex-col gap-2 rounded-2xl bg-md-surface-container-highest p-5 border border-md-outline-variant/30 text-sm">
							<span class="font-bold">Highest Container</span>
							<code class="text-[11px] text-md-on-surface-variant font-mono">--surface-container-highest</code>
							<p class="text-xs text-md-on-surface-variant mt-2">Highest tonal contrast, used for switches and filled cards.</p>
						</div>
					</div>
				</section>

				<!-- Expressive Shapes -->
				<section class="space-y-6">
					<div class="border-b border-md-outline-variant/40 pb-3">
						<h2 class="text-2xl font-bold text-md-on-surface">Expressive Corner Shape Scale</h2>
						<p class="text-sm text-md-on-surface-variant">Full spectrum from sharp 0px to 28px FAB radius and full 9999px pills, plus asymmetrical shapes.</p>
					</div>

					<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 text-center text-xs font-semibold">
						<div class="flex h-24 flex-col items-center justify-center gap-1 rounded-none bg-primary text-on-primary">
							<span>None</span>
							<span class="text-[10px] opacity-75">0px</span>
						</div>
						<div class="flex h-24 flex-col items-center justify-center gap-1 rounded-xs bg-primary text-on-primary">
							<span>XS</span>
							<span class="text-[10px] opacity-75">4px</span>
						</div>
						<div class="flex h-24 flex-col items-center justify-center gap-1 rounded-sm bg-primary text-on-primary">
							<span>Small</span>
							<span class="text-[10px] opacity-75">8px</span>
						</div>
						<div class="flex h-24 flex-col items-center justify-center gap-1 rounded-md bg-primary text-on-primary">
							<span>Medium</span>
							<span class="text-[10px] opacity-75">12px</span>
						</div>
						<div class="flex h-24 flex-col items-center justify-center gap-1 rounded-lg bg-primary text-on-primary">
							<span>Large</span>
							<span class="text-[10px] opacity-75">16px</span>
						</div>
						<div class="flex h-24 flex-col items-center justify-center gap-1 rounded-xl bg-primary text-on-primary shadow-elevation-2">
							<span>Extra Large</span>
							<span class="text-[10px] opacity-75">28px FAB</span>
						</div>
						<div class="flex h-24 flex-col items-center justify-center gap-1 rounded-full bg-primary text-on-primary">
							<span>Full Pill</span>
							<span class="text-[10px] opacity-75">9999px</span>
						</div>
						<div class="flex h-24 flex-col items-center justify-center gap-1 m3-shape-expressive-1 bg-md-tertiary text-md-on-tertiary shadow-elevation-1">
							<span>Expressive</span>
							<span class="text-[10px] opacity-75">Asymmetric</span>
						</div>
					</div>
				</section>
			</TabsContent>

			<!-- TAB 3: REAL-WORLD INTERACTIVE APP MOCKUP -->
			<TabsContent value="app-demo" class="space-y-6">
				<div class="border-b border-md-outline-variant/40 pb-3">
					<h2 class="text-2xl font-bold text-md-on-surface">Material Expressive Workspace Mockup</h2>
					<p class="text-sm text-md-on-surface-variant">An interactive real-world task manager demonstrating all Material 3 Expressive components in action.</p>
				</div>

				<div class="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-md-outline-variant/40 bg-md-surface-container-low shadow-elevation-2">
					<!-- Top Mockup App Bar -->
					<div class="flex items-center justify-between border-b border-md-outline-variant/30 bg-md-surface px-6 py-4">
						<div class="flex items-center gap-3">
							<div class="flex size-9 items-center justify-center rounded-xl bg-primary text-on-primary">
								<CheckCircleIcon class="size-5" />
							</div>
							<div>
								<h3 class="text-base font-bold">Tasks & Sprints</h3>
								<p class="text-xs text-md-on-surface-variant">4 active items · 1 completed</p>
							</div>
						</div>

						<div class="flex items-center gap-2">
							<Button variant="tonal" size="sm" onclick={() => toast.info("Refreshed tasks")}>
								Sync
							</Button>
							<Button variant="filled" size="sm" onclick={() => isDialogOpen = true}>
								<PlusIcon class="size-4 mr-1" />
								New Task
							</Button>
						</div>
					</div>

					<!-- Filter Chips Row -->
					<div class="flex items-center gap-2 border-b border-md-outline-variant/20 bg-md-surface px-6 py-3 overflow-x-auto">
						{#each ["all", "High", "Medium", "Low"] as priority}
							<Chip
								variant="filter"
								label={priority === "all" ? "All Tasks" : `${priority} Priority`}
								selected={appActiveFilter === priority}
								onclick={() => appActiveFilter = priority}
							/>
						{/each}
					</div>

					<!-- Task Input Bar -->
					<div class="p-6 pb-2">
						<div class="flex items-center gap-3">
							<TextField
								variant="outlined"
								placeholder="Add a new task to your sprint (press Enter or Add)..."
								bind:value={newTaskTitle}
								onkeydown={(e: KeyboardEvent) => {
									if (e.key === "Enter") addTask();
								}}
								class="flex-1"
							/>
							<Button variant="filled" class="h-14 px-6" onclick={addTask}>
								Add
							</Button>
						</div>
					</div>

					<!-- Tasks List -->
					<div class="p-6 pt-2 space-y-3">
						{#each appTasks.filter(t => appActiveFilter === "all" || t.priority === appActiveFilter) as task (task.id)}
							<div class="flex items-center justify-between rounded-2xl bg-md-surface p-4 border border-md-outline-variant/30 shadow-elevation-0 hover:shadow-elevation-1 transition-all">
								<label class="flex items-center gap-3 cursor-pointer flex-1 select-none">
									<Checkbox checked={task.done} onCheckedChange={() => toggleTask(task.id)} />
									<div class="flex flex-col">
										<span class="text-sm font-medium {task.done ? 'line-through opacity-50 text-md-on-surface-variant' : 'text-md-on-surface'}">
											{task.title}
										</span>
										<span class="text-xs text-md-on-surface-variant flex items-center gap-2 mt-0.5">
											<ClockIcon class="size-3" />
											{task.due} · {task.tag}
										</span>
									</div>
								</label>

								<div class="flex items-center gap-2">
									<Badge
										variant={task.priority === "Critical" ? "error" : task.priority === "High" ? "tertiary" : "secondary"}
										size="sm"
									>
										{task.priority}
									</Badge>
								</div>
							</div>
						{/each}
					</div>

					<!-- Bottom App Navigation Mockup Bar -->
					<div class="border-t border-md-outline-variant/30">
						<NavigationBar items={navItems} bind:activeId={activeNavId} />
					</div>
				</div>
			</TabsContent>
		</Tabs>
	</main>

	<!-- Footer -->
	<footer class="mt-20 border-t border-md-outline-variant/30 bg-md-surface-container-lowest py-8 text-center text-xs text-md-on-surface-variant">
		<div class="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
			<div class="flex items-center gap-2">
				<SparklesIcon class="size-4 text-primary" />
				<span class="font-semibold text-md-on-surface">Material Design 3 Expressive UI Showcase</span>
			</div>
			<div>
				Built with SvelteKit 3, Svelte 5 runes, bits-ui primitives, and shadcn-svelte baseline.
			</div>
			<div class="font-mono text-[11px] text-md-on-surface-variant">
				Branch: <span class="text-primary">md3_expressive_ui_showcase</span>
			</div>
		</div>
	</footer>
</div>
