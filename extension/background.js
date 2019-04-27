chrome.webRequest.onBeforeSendHeaders.addListener(function (details) {
	for (let i = 0; i < details.requestHeaders.length; ++i) {
		if (details.requestHeaders[i].name === 'User-Agent') {
			details.requestHeaders[i].value = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36'
			break ;
		}
	}
	return { requestHeaders: details.requestHeaders }
},
{ urls: ["<all_urls>"] },
["blocking", "requestHeaders"],
);
