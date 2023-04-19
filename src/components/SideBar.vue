<template>
	<div class="bg-white shadow rounded border h-fit">
		<div class="bg-sky-600 text-white rounded-t font-semibold p-2">
			Liste des types d'affichage
		</div>
		<div class="flex flex-col gap-1 p-2">
			<router-link to="/" class="w-full rounded shadow-sm border py-1 px-2 hover:bg-sky-50 hover:shadow focus:bg-sky-600 focus:ring-2 ring-offset-1 focus:text-white">
				Défaut
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SideBar',
	}
</script>