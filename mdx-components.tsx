import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    table: ({ children, ...props }) => (
      <div className="table-scroll">
        <table {...props}>{children}</table>
      </div>
    ),
    ...components,
  };
}
