export const markdown2 =
  `# Article Title\n\nSome awesome content here fam\n\n---\n\nMIT © [Nicholas Berlette](https://github.com/nberlette). All rights reserved.`;

export const markdown1 = `---
title: "Article Title"
author:
  name: Nicholas Berlette
  email: nick@berlette.com
  url: https://github.com/nberlette
date: 2022-08-28T12:00:00-0700Z
---

${markdown2}`;

/**
 * Describes the shape of our expected front matter data.
 */
export interface Article {
  title: string;
  author: {
    name: string;
    email: string;
    url: string;
  };
  date: string;
}
