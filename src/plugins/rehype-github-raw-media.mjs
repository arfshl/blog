export default function rehypeGithubRawMedia() {
  return function (tree) {
    function visit(node) {
      if (!node || typeof node !== "object") return;

      if (
        node.type === "element" &&
        node.tagName === "img" &&
        typeof node.properties?.src === "string"
      ) {
        const src = node.properties.src;

        if (src.startsWith("/media/")) {
          node.properties.src =
          /* change this to your own github/gitlab pages repo, or even your own mechanism */
            "https://raw.githubusercontent.com/arfshl/blog/main" + src;
        }
      }

      if (Array.isArray(node.children)) {
        for (const child of node.children) {
          visit(child);
        }
      }
    }

    visit(tree);
  };
}
