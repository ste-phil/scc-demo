
const clipboard = new ClipboardJS('.to-clipboard', {
    text: function(trigger) {
        return JSON.stringify(repository.getRecipes())
    }
});
const app = Vue.createApp({})
app.mixin(repositoryMixin)

app.component('button-mock', {
    template: `
      <button @click="repository.addRecipeMock()">
        Add mock recipe
      </button>`
})

app.component('button-img', {
    props: ["icon", "popover-text", "text"],
    template: `
      <button :popover-bottom="popoverText">
        <i :class="icon" style="float:left;margin-right:10px;"></i>
        <label>{{text}}</label>
      </button>`
})


app.component('button-bar', {
    methods: {
        addRecipe() {
            alert("Not implemented! :/")
        },
        importRecipes() {
            
        }
    },
    template: `
    <div style="height:50px;">
        <button-img @click="addRecipe()" style="float:left;margin:3px;height:100%;" icon="gg-add" text="Add" popover-text="Add new Recipe" popover-position="popover-bottom"></button-img>

        <button-img class="to-clipboard" style="float:left;margin:3px;height:100%;" icon="gg-export" popover-text="Export Recipe" popover-position="popover-bottom"></button-img>
        <button-img @click="importRecipes()" style="float:left;margin:3px;height:100%;" icon="gg-import" popover-text="Import Recipe" popover-position="popover-bottom"></button-img>
    </div>`
})

app.component('notification-bar', {
    props: [],
    template: `
      <div style="position: fixed; bottom: 0px;">

      </div>`
})

app.component('recipe-list', {
    methods: {
        findRecipeName(recipeId) {
            return repository.findRecipe(recipeId).name;
        }
    },
    template: `
        <div class="card" style="width: 100%; margin:10px 0 10px 0;" v-for="recipe in repository.getRecipes()">
            <div class="card-body">
                <h4 class="card-title">{{recipe.name}}</h4>
                <h5 class="card-subtitle"><b>{{recipe.amount}}x</b> in <b>{{recipe.time}}</b> seconds</h5>
                

                <div v-if="recipe.input.length > 0" class="collapsible">
                    <input :id="'collapsible' + recipe.id" type="checkbox" name="collapsible">
                    <label :for="'collapsible' + recipe.id" style="padding: 0.15rem">Ingredients</label>
                    <div class="collapsible-body">
                        <h6 v-for="input in recipe.input" style="margin: 0.15rem"><b>{{input.amount}}x</b> {{findRecipeName(input.recipeId)}}</h6>
                    </div>
                </div>

                <button class="btn-small btn-secondary" style="position: absolute; top: 0; right: 0;">Edit</button>
            </div>
        </div>
      `
})


var chainInput = {
    data() { 
        return {
            recipeName: '',
            request: {
                recipeId: '',
                amount: 1
            }
        } 
    },
    emits: {
        "resolve-requested": data => {
            if (data.recipeId && data.amount) return true;
            return false;
        }
    },
    methods: {
        tryRequest() {
            let recipe = repository.findRecipeByName(this.recipeName);

            if (recipe  && this.request.amount > 0)
                this.$emit('resolve-requested', {recipeId: recipe.id, amount: this.request.amount});
        }
    },
    template: `
        <div class="form-group">
            <label for="recipeName">Recipe to make</label>
            <input v-model="recipeName" placeholder="Select Recipe" list="recipes">
            <datalist id="recipes" >
                <option v-for="recipe in this.repository.getRecipes()" :value="recipe.name" :data-id="recipe.id"></option>
            </datalist>
        </div>
        <div class="form-group">
            <label for="request.amount">Amount (per second)</label>
            <input v-model="request.amount">
        </div>
        <button @click="tryRequest">Calculate</button>
    `
}


var chainOutput = {
    data() { 
        return {
            itemsPerSecondsMode: true,
            results: []
        } 
    },
    props: ["request"],
    watch: {
        request(newVal) {
            console.log("rec")
            let requiredResourcesDict = {};

            let recipe = repository.findRecipe(newVal.recipeId);
            let makeAmount = newVal.amount;

            this.resolveRequirements(requiredResourcesDict, recipe, makeAmount);
            this.prepareResults(requiredResourcesDict);
        }
    },
    methods: {
        resolveRequirements(requiredResourcesDict, recipe, makeAmount) {

            for (let i = 0; i < recipe.input.length; i++) {

                let subRecipe = repository.findRecipe(recipe.input[i].recipeId);
                let requiredSubAmount = makeAmount * subRecipe.amount / recipe.time //required items per second

                if (!requiredResourcesDict[subRecipe.id]) requiredResourcesDict[subRecipe.id] = 0;
                requiredResourcesDict[subRecipe.id] += requiredSubAmount;

                if (subRecipe.input.length > 0) this.resolveRequirements(requiredResourcesDict, subRecipe, requiredSubAmount);
            }
        },
        prepareResults(requiredRecourcesDict) {
            this.results = [];

            for (let recipeId in requiredRecourcesDict) {
                let recipe = repository.findRecipe(recipeId);

                this.results.push({
                    id: recipeId,
                    name: recipe.name,
                    amountFactories: requiredRecourcesDict[recipeId] * recipe.time,
                    perSecond: requiredRecourcesDict[recipeId]
                })
            }

            this.results.reverse();
        },
    },
    template: `
        <fieldset class="form-group" style="float: right;top: 0; right: 0;cursor: pointer;">
            <label class="paper-switch-label">Required Factories</label>
            <label class="paper-switch">
                <input type="checkbox" v-model="itemsPerSecondsMode">
                <span class="paper-switch-slider round"></span>
            </label>
            <label  class="paper-switch-label">Items per seconds</label>
        </fieldset>

        <p>Results:</p>
        <br/>
        <div>
            <p v-if="itemsPerSecondsMode" v-for="result in results">{{result.name}}: <b>{{Math.round(result.perSecond * 100) / 100}}</b>/s</p>
            <p v-if="!itemsPerSecondsMode" v-for="result in results">{{result.name}}: <b>{{Math.round(result.amountFactories * 100) / 100}}</b> Factories</p>
        </div>
    `
}


app.component('chain-resolver', {
    data() { 
        return {
            request: null
        } 
    },
    components: {
        "chain-input": chainInput,
        "chain-output": chainOutput
    },
    methods: {
        resolveRequested(request) {
            this.request = request;
        }
    },
    template: `
        <div class="paper">
            <chain-input @resolve-requested='resolveRequested'></chain-input>
        </div>
        <hr>

        <div class="paper">
            <chain-output :request='request'></chain-output>
        </div>
      `
})


app.mount('#app')


/*
1 red science:
	1x cp / 5s => 1/5 cp / s required
	1x gears / 5s => 1/5 gears / s required

15 red science:
	15x cp / 5s => 3 cp / s required
	15x gears / 5s => 3 gears / s required

*/

/*
Recipe: name: string
        time: double
        count: int
        input: Input[]

Input: count: int
        recipe: Recipe


Production: recipe: Recipe
            amount: int

*/