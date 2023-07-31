declare module '*.md' {
  // "unknown" would be more detailed depends on how you structure frontmatter
  const attributes: Record<string, unknown>;

  // When "Mode.TOC" is requested
  const toc: Array<{ level: string; content: string }>;

  // When "Mode.HTML" is requested
  const html: string;

  // When "Mode.RAW" is requested
  const raw: string;

  // Modify below per your usage
  export { attributes, html, raw, toc };
}