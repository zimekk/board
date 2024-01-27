console.log(["devtools"]);

chrome.devtools.panels.create(
  "Board Panel",
  null,
  "panel.html",
  function (panel) {
    // code invoked on panel creation
    console.log(["panel"], { panel });
  },
);

chrome.devtools.panels.elements.createSidebarPane(
  "Board Sidebar",
  function (sidebar) {
    // sidebar initialization code here
    console.log(["sidebar"], { sidebar });
    sidebar.setObject({ some_data: "Some data to show" });
  },
);
