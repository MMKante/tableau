import { createStore } from 'vuex'

const state = {
	axes: [],
}
const getters = {
	axes: (state) => {
		return state.axes
	},
	goals: (state) => {
		return state.goals
	},
	perfs: (state) => {
		return state.perfs
	}
}
const mutations = {
	SET_AXES: (state, data) => {
		state.axes = []
		for(let i = 0; i < data.nbAxes; i++){
			state.axes.push({id: i, name: `${data.axes.name} ${(i+1)}`, goals: []})
		}
	},
	SET_GOALS: (state, data) => {
		let goals = []
		let index = 0
		let axe = 0
		for(let el of data.axes.nbGoals){
			for (let i = 0; i < el; i++) {
				goals.push({id: index, name: `${data.goals.name} ${(index+1)}`, axe: axe})
				index++
			}
			axe++
		}
		state.axes.map(axe => {
			axe.goals = goals.filter(goal => goal.axe === axe.id)
		})
	},
	SET_PERFS: (state, data) => {
		let perfs = []
		let id = 0
		let goal = 0 
		for (let line of data.goals.nbPerfs) {
			for (let el of line) {
				for (let i = 0; i < el; i++) {
					perfs.push({id: id, name: `${data.perfs.name} ${(id+1)}`, goal: goal})
					id++
				}
				goal++
			}
		}
		state.axes.map(axe => {
			axe.goals.map(goal => {
				goal.perfs = perfs.filter(perf => perf.goal === goal.id)
			})
		})
	}
}
const actions = {
	loadAll(store) {
		fetch('/data.json')
			.then(response => response.json())
			.then(data => {
				store.commit('SET_AXES', data)
				store.commit('SET_GOALS', data)
				store.commit('SET_PERFS', data)
			})
			.catch(error => console.log(error))
	},
}

export default createStore({
	state: state,
	getters: getters,
	mutations: mutations,
	actions: actions,
	modules: {}
})
