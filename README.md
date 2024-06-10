1. Chrome plugin injects code to render iFrame
2. iFrame content is served on localhost:8000
3. iFrame sends message to content script and listens to event from content script
4. Content script sends message to backaground script and iFrame, also listens to event from iFrame

Run web-app using node server.js, before running chrome plugin code
