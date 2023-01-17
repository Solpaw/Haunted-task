import {
    html,
    component,
    useMemo,
} from 'https://esm.sh/haunted';

function IngredientList({ data, selectedList }) {
    const ingredients = useMemo(() => {
        const ingredientSet = new Set();
        selectedList.forEach(ele => {
            const drink = data.find(drink => drink.idDrink === ele);
            Object.entries(drink).filter(entry => entry[0].startsWith('strIngredient')).forEach(entry => {
                if(entry[1] === null) {
                    return;
                }
                ingredientSet.add(entry[1].toLowerCase())
            })
        })
        return ingredientSet;
    }, [data, selectedList])

    const list = useMemo(() => {
        return html`
            <ul>
                ${[...ingredients].map(ele => html`
                    <li>${ele}</li>
                `)}
            </ul>
        `;
    }, [ingredients])

    return html`
        <div class="container">
            <h3>Shopping list</h3>
            ${list}
            <button>Print list</button>
        </div>

        <style>
            .container {
                padding: 20px;
                min-width: 120px;
                border: 1px solid gray;
                border-radius: 4px;
                margin: 10px 0;
            }

            h3 {
                color: deepskyblue;
            }

            ul {
                padding-left: 20px;
            }

            button {
                cursor: pointer;
            }
        </style>
    `;
}

customElements.define("app-ingredient-list", component(IngredientList, { observedAttributes: ['data', 'selectedList'] }));