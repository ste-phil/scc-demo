const repository = {
    debug: true,
    state: Vue.reactive({
        recipes: [
            {
                id: 1,
                name: "Iron Ore", 
                time: 1,
                amount: 1,
                input: []
            },{
                id: 2,
                name: "Iron Plate", 
                time: 3.2,
                amount: 1,
                input: [{recipeId: 1, amount: 1}]
            },{
                id: 3,
                name: "Copper ore", 
                time: 1,
                amount: 1,
                input: []
            },{
                id: 4,
                name: "Copper Plate", 
                time: 3.2,
                amount: 1,
                input: [{recipeId: 3, amount: 1}]
            },{
                id: 5,
                name: "Gears", 
                time: 0.5,
                amount: 1,
                input: [{recipeId: 2, amount: 2}]
            },{
                id: 6,
                name: "Red Science", 
                time: 5,
                amount: 1,
                input: [{recipeId: 4, amount: 1}, {recipeId: 5, amount: 1}]
            }
        ]
    }),


    getRecipes() {
        return this.state.recipes;
    },

    findRecipe(id) {
        return this.state.recipes.filter(x => x.id == id)[0];
    },

    findRecipeByName(name) {
        return this.state.recipes.filter(x => x.name == name)[0];
    },

    addRecipeMock() {
        this.state.recipes.push({
            name: "Test", 
                id: this.state.recipes[this.state.recipes.length - 1].id + 1,
                time: 23.0,
                amount: 14,
                input: []
        })
    },
}

const repositoryMixin = {
    data() {
        return {
            repository: repository
        }
    }
}