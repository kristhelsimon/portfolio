# Adding portfolio projects

Each project gets its own folder so it can contain as many screenshots as needed.

## Folder structure

```text
projects/
  work/
    project-name/
      images/
        homepage.png
        product-page.png
        mobile-view.png
```

1. Copy the `_project-template` folder inside `projects/work`.
2. Rename the copied folder using a short name without spaces.
3. Drop all project screenshots into its `images` folder.
4. Open `projects.js` and add the project entry.

Add each new entry at the bottom of the list. The website automatically displays the newest entries first.

This is a static website, so image filenames must be listed in `projects.js`; the browser cannot scan a folder automatically.

## Website project example

```js
{
  category: "websites",
  title: "Project Name",
  type: "Website Development",
  client: "Client Name",
  folder: "projects/work/project-name/images",
  images: [
    "homepage.png",
    "product-page.png",
    "mobile-view.png"
  ],
  imageAlt: "Preview of Project Name",
  description: "Explain what you designed or developed and the result for the client.",
  tags: ["HTML", "CSS", "JavaScript"],
  liveUrl: "https://example.com"
}
```

## Automation project example

```js
{
  category: "automations",
  title: "Automation Name",
  type: "Workflow Automation",
  client: "Client Name",
  folder: "projects/work/automation-name/images",
  images: [
    "scenario.png",
    "result.png"
  ],
  imageAlt: "Preview of Automation Name",
  description: "Explain what the automation connects, what it does, and the time it saves.",
  tags: ["Make.com", "Shopify", "Google Sheets"]
}
```

The first filename in `images` is used as the card cover. Clicking it opens the full gallery, where visitors can move through every screenshot.

Separate multiple project entries with commas. The category must be exactly `websites` or `automations` so the project appears under the correct tab.
