import {
    html,
    component,
} from 'https://esm.sh/haunted'

const AppHeader = () => {
    return html`
        <header>
            <h1>Haunted Task</h1>
        </header>

        <style>
            header {
                box-shadow: 0 5px 5px deepskyblue;
            }

            h1 {
                text-align: center;
                color: deepskyblue;
                margin: 0;
                padding: 20px 0;
            }
        </style>
    `;
}

customElements.define("app-header", component(AppHeader));