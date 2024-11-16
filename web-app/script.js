document.getElementById('myButton').addEventListener('click', function() {
    const textArea = document.getElementById('myTextarea');

    SIVI.open(textArea.value)

    // window.parent.postMessage({ type: 'BUTTON_CLICKED', message: 'Button clicked!' }, '*');
});

document.getElementById('close').addEventListener('click', function() {
    SIVI.close()

    // window.parent.postMessage({ type: 'BUTTON_CLICKED', message: 'Button clicked!' }, '*');
});


window.addEventListener('message', function(event) {
    if (event.data.type === 'RESPONSE_FROM_BACKGROUND') {
        console.log('Message from parent =>', event.data.message); // Handle the response

        // Send a message back to the parent window
        event.source.postMessage('Hello from iframe', event.origin);
    }
}, false)