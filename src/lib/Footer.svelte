<script lang="ts">
	import {base} from '$app/paths';
	import {page} from '$app/stores';

	// import Breadcrumbs from '@feltcoop/felt/ui/Breadcrumbs.svelte';
</script>

<footer class="centered column-sm">
	<div class="padded-md markup">
		<p>
			<a href="https://github.com/ryanatkn/svelte-snake-sports">ssources & creditss on GitHub</a>
		</p>
		<p>
			music by Alexander Nakarada
			<br />
			<a href="https://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a> ∙
			<a href="https://www.serpentsoundstudios.com/">serpentsoundstudios.com</a>
		</p>
		<p>
			generated images by <a href="https://wikipedia.org/wiki/DALL-E">DALL-E</a>
		</p>
		{#if $page.url.pathname !== base + '/'}
			<p>
				<a href="{base}/" class="back-link"
					>go back <div class="snake-3">🐍</div>
					home</a
				>
			</p>
		{/if}
	</div>
	<!-- TODO why is this not working? latest sveltekit problem with Felt? -->
	<!-- <div class="padded-xl"> -->
	<!-- <Breadcrumbs basePath={base}>🐍</Breadcrumbs> -->
	<!-- </div> -->
</footer>

<style>
	footer {
		position: relative; /* hacky, needed so the game's InteractiveSurface doesn't overlap it */
		text-align: center;
	}
	.back-link {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
