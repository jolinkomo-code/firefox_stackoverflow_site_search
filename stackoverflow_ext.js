browser.omnibox.setDefaultSuggestion({
  description: "Uses duckduckgo to search in stackoverflow"
});

browser.omnibox.onInputEntered.addListener(
  (textinput, disposition) => {
    var url;
    // replace whitespaces with '+'
    textinput = textinput.replace(/\s+/g, "+");
    url = `https://duckduckgo.com/?q=${textinput}`;

    // open the search page
    switch (disposition) {
      case "currentTab":
        browser.tabs.update({ url });
        break;
      case "newForegroundTab":
        browser.tabs.create({ url });
        break;
      case "newBackgroundTab":
        browser.tabs.create({ url, active: false });
        break;
    }
  }
);
