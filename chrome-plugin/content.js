console.log('hello from content.js');


// Create the iframe element
let iframe = document.createElement('iframe');

// Set the iframe attributes
iframe.id = 'my-iframe';
iframe.src = 'http://localhost:8000'
iframe.style.position = 'fixed';
iframe.style.bottom = '10px';
iframe.style.right = '10px';
iframe.style.width = '300px';
iframe.style.height = '200px';
iframe.style.border = 'none';
iframe.style.zIndex = '10000'; // Ensures the iframe is on top
iframe.style.background = 'white';


// Append the iframe to the body
document.body.appendChild(iframe);

setTimeout(() => {
    // sending message from iFrame 
    iframe.contentWindow.postMessage({ type: 'RESPONSE_FROM_BACKGROUND', message: 'Call from parent to iFrame' }, '*')
}, 10000)


window.addEventListener('message', function(event) {
    // Make sure the message is from a trusted source
    if (event.origin !== 'http://localhost:8000') {
        return;
    }

    if (event.data.type === 'BUTTON_CLICKED') {
        chrome.runtime.sendMessage({ type: 'BUTTON_CLICKED', message: event.data.message }, function(response) {
            console.log('Response from background script:', response);
    
            // Send a message back to the iFrame if needed
            event.source.postMessage({ type: 'RESPONSE_FROM_BACKGROUND', message: response }, '*');
        });
    }
}, false);
