import {
    html,
    component,
    useState,
    useCallback,
} from 'https://esm.sh/haunted';

function Searchbar() {
    const [searchTerm, setSearchTerm] = useState('');

    const changeData = (data) => {
        const event = new CustomEvent('data-change', {
          bubbles: true,
          composed: true,
          detail: data
        });
        this.dispatchEvent(event);
      }

    const getData = useCallback(() => {
        const searchUrl = new URL('https://www.thecocktaildb.com/api/json/v1/1/search.php');
        const param = { s: searchTerm };
        searchUrl.search = new URLSearchParams(param).toString();

        fetch(searchUrl)
            .then((response) => response.json())
            .then((data) => {
                changeData(data);
            });
    }, [searchTerm])

    return html`
        <div class="searchbar">
            <input value=${searchTerm} @keyup=${ev => setSearchTerm(ev.target.value)} type="text" />
            <button @click=${getData}>Search</button>
        </div>

        <style>
            .searchbar {
                display: flex;
                justify-content: center;
            }

            input {
                width: 70%;
            }
        </style>
    `;
}

customElements.define("app-searchbar", component(Searchbar));