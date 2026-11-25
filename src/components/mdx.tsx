import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import {
  HelpsToKnow,
  UnderTheHood,
  WhatThisReplaced,
} from "@/components/blocks";
import { Diagram } from "@/components/diagram";

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Diagram,
    HelpsToKnow,
    UnderTheHood,
    WhatThisReplaced,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
