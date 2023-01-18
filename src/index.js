import {
    html,
    component,
    useEffect,
    useCallback,
    useState
} from 'https://esm.sh/haunted'
import "./components/header/app-header.js";
import "./components/shopping-list/shopping-list.js";
  
function App() {
    const [toasterList, setToasterList] = useState([]);

    const closeToaster = useCallback((id) => {
        setToasterList((prev) => prev.filter(ele => ele.id !== id));
    })

    const onShowToaster = useCallback(({ detail }) => {
        const id = crypto.randomUUID();
        setToasterList(prev => prev.concat({ id, text: detail.text, type: detail.type }));
        setTimeout(() => closeToaster(id), 1000);
    }, [])

    useEffect(() => {
        this.addEventListener('show-toaster', onShowToaster);
        return () => this.removeEventListener('show-toaster', onShowToaster);
    }, []);

    return html`
        <div>
            <app-header></app-header>
            <shopping-list></shopping-list>
        </div>
        <app-toaster .toasterList=${toasterList} />
    `;
}

customElements.define("my-app", component(App));
