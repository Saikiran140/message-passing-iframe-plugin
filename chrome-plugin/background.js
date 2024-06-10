chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'BUTTON_CLICKED') {
        console.log('Message from content script:', request.message);
        // Process the message and send a response
        sendResponse('Button click received by background script');
    }
    return true;  // Keep the message channel open for sendResponse
});
