<script lang='ts'>
	import '../theme.postcss'
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Nav from '$lib/components/Nav.svelte';
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
	<Nav/>
	<div class="h-full w-full max-w-3xl mx-auto px-2 my-20 items-center">
		<slot />
	</div>
</AppShell>
