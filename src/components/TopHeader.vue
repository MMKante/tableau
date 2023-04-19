<template>
	<div class="flex items-center justify-between bg-sky-600 text-white shadow-md h-14 px-8">
		<div class="text-2xl font-semibold">
			Suivi des managers
		</div>
		<a href="#" class="font-semibold rounded-sm py-1.5 px-4 cursor-pointer hover:bg-sky-700 focus:ring-1 ring-offset-1 ring-sky-700 ring-offset-transparent" @click="show()">
			Imprimer
		</a>
	</div>
</template>

<script>
	export default {
		name: 'TopHeader',
		methods: {
			show() {
				alert('Printed!')
			}
		}
	}
</script>