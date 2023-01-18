import {
    html,
    component,
    useMemo,
} from 'https://esm.sh/haunted';

function Toaster({ toasterList }) {
    const toastList = useMemo(() => toasterList.map(ele => html`
        <div class=${`toaster ${ele.type}`}>
            <span>${ele.text}</span>
        </div>
    `), [toasterList])

    return html`
        <div class="toast-container">${toastList}</div>

        <style>
            .toast-container {
                position: fixed;
                top: 20px;
                right: 20px;
            }

            .toaster {
                padding: 20px;
                width: 300px;
                border-radius: 4px;
                background-color: green;
                color: white;
                margin-bottom: 10px;
            }

            .toaster.info {
                background-color: deepskyblue;
            }

            .toaster.warning {
                background-color: red;
            }
        </style>
    `;
}

customElements.define("app-toaster", component(Toaster, { observedAttributes: ['toasterList'] }));

export const showToaster = (context, text, type) => {
    const event = new CustomEvent('show-toaster', {
        bubbles: true,
        composed: true,
        detail: { type, text }
      });
    context.dispatchEvent(event);
}