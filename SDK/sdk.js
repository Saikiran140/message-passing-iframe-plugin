(function (global) {
    // Function to create the iFrame
    function createIframe(prompt) {
        const iframe = document.createElement('iframe');
        iframe.src = `http://localhost:4848/#/?customPrompt=${prompt}`;
        iframe.style.width = '71%';
        iframe.style.height = '50%';
        iframe.style.position = 'fixed';
        iframe.style.bottom = '20px';
        iframe.style.left = '20px';
        iframe.style.zIndex = '1000';
        iframe.style.border = '1px solid black';
        return iframe;
    }

    // Namespace for exposing open and close functions
    function SiviNamespace() {
        let iframe = null;

        this.open = function (customPrompt) {
            if (iframe) {
                console.warn('Iframe is already open.');
                return;
            }
            iframe = createIframe(customPrompt);
            document.body.appendChild(iframe);
        };

        this.close = function () {
            if (!iframe) {
                console.warn('No iframe to close.');
                return;
            }
            document.body.removeChild(iframe);
            iframe = null;
        };
    }

    // Extract namespace from the script's src
    function getNamespaceFromScriptSrc() {
        const scripts = document.getElementsByTagName('script');
        for (let i = 0; i < scripts.length; i++) {
            const src = scripts[i].src;
            const match = src.match(/[?&]namespace=([^&]+)/);
            if (match) {
                return match[1];
            }
        }
        return null;
    }

    // Initialize the SDK
    const namespace = getNamespaceFromScriptSrc();
    if (namespace) {
        global[namespace] = new SiviNamespace();
    } else {
        console.error('Namespace not specified in script src.');
    }
})(window);
