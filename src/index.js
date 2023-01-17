import {
    html,
    component
} from 'https://esm.sh/haunted'
import "./components/header/app-header.js";
import "./components/shopping-list/shopping-list.js";
  
function App() {
  return html`
      <div>
          <app-header></app-header>
          <shopping-list></shopping-list>
      </div>

  `;
}

customElements.define("my-app", component(App));
  