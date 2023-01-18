import {
    html,
    component,
    useCallback,
    useState,
} from 'https://esm.sh/haunted';
import "./components/searchbar.js";
import "./components/item-list.js";
import "./components/ingredient-list.js";
import { showToaster } from '../toaster/toaster.js';

function ShoppingList() {
    const [data, setData] = useState();
    const [selectedDrinks, setSelectedDrinks] = useState([]);

    const addItem = useCallback(({ detail: idDrink }) => {
        setSelectedDrinks(prev => prev.concat(idDrink));
        showToaster(this, 'Ingredients added to shopping list.');
    }, [])

    const removeItem = useCallback(({ detail: idDrink }) => {
        setSelectedDrinks(prev => prev.filter(ele => ele !== idDrink));
        showToaster(this, 'Ingredient removed from shopping list.');
    }, [])

    return html`
        <div class="container">
            <app-searchbar @data-change=${(e) => setData(e.detail.drinks)}></app-searchbar>
            <div class="main-view">
                <app-item-list .data=${data} .selectedList=${selectedDrinks} @add-item=${addItem} @remove-item=${removeItem}></app-item-list>
                <app-ingredient-list .data=${data} .selectedList=${selectedDrinks}></app-ingredient-list>
            </div>
        </div>

        <style>
            .container {
                padding: 40px;
            }

            .main-view {
                display: flex;
                gap: 10px;
                justify-content: end;
            }
        </style>
    `;
}

customElements.define("shopping-list", component(ShoppingList));