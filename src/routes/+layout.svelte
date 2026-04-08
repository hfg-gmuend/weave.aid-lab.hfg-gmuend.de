<script lang="ts">
	import '@fontsource-variable/dm-sans/wght.css';
	import '../styles/global.css';
	import favicon from '$lib/assets/favicon.ico';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Weavy Flow Gallery</title>
</svelte:head>

{@render children()}
