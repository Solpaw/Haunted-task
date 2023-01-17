import {
    html,
    component,
    useMemo,
} from 'https://esm.sh/haunted';

function ItemList({ data, selectedList }) {
    const addItem = (data) => {
        const event = new CustomEvent('add-item', {
          bubbles: true,
          composed: true,
          detail: data
        });
        this.dispatchEvent(event);
    }

    const removeItem = (data) => {
        const event = new CustomEvent('remove-item', {
          bubbles: true,
          composed: true,
          detail: data
        });
        this.dispatchEvent(event);
    }

    const list = useMemo(() => data?.map((ele) => html`
        <div class="container">
            <img src=${ele.strDrinkThumb} alt="Drink picture" />
            <div>
                <h4>${ele.strDrink}</h4>
                <span>${ele.strInstructions}</span>
            </div>
            ${!selectedList.includes(ele.idDrink) ? 
                html`<button @click=${() => addItem(ele.idDrink)}>+</button>` 
                : 
                html`<button @click=${() => removeItem(ele.idDrink)}>-</button>`
            }
        </div>
    `), [data, selectedList]);

    return html`
        <div>
            ${list}
        </div>

        <style>
            .container {
                padding: 20px;
                border: 1px solid gray;
                border-radius: 4px;
                margin: 10px 0;
                display: flex;
                gap: 10px;
            }

            button {
                margin-left: auto;
                min-width: 25px;
                cursor: pointer;
            }

            h4 {
                margin-top: 0;
                margin-bottom: 10px;
                color: deepskyblue;
            }

            img {
                width: 100px;
                height: 100px;
                object-fit: contain;
            }
        </style>
    `;
}

customElements.define("app-item-list", component(ItemList, { observedAttributes: ['data', 'selectedList'] }));