<template>
	<div class="min-h-screen bg-gray-50">
		<TopHeader class="mb-4" />
		<div class="w-10/12 gap-2 mx-auto">
			<MainContainer>
				<router-view />
			</MainContainer>
			<br><br><br><br><br>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	import TopHeader from '@/components/TopHeader'
	import MainContainer from '@/components/MainContainer'

	export default {
		name: 'App',
		components: {
			TopHeader,
			MainContainer,
		},
		mounted() {
			this.loadAll()
		},
		methods: {
			...mapActions(['loadAll']),
		}
	}
</script>