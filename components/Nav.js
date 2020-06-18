export default links => `<div class="topnav" id="myTopnav">
${links.reduce(
    (html, link) =>
      html +
      `<a href="/${link.title !== "Home" ? link.title : ""}" title="${
        link.title
      }" data-navigo>${link.text}</a>`,
    ``
  )}
</div>
`