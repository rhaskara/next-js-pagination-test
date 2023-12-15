This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This is a project to test out pagination and search using search parameters, mainly to keep the application stateless (in terms of query parameter data).

## Thing to improve

The styling can definitely be improved with theming etc.

Separate components for filters.

Actual endpoints used to check the network timing etc and can be used to get the actual total pages instead of hard coding.

Loaders and loading state can be added with suspense tags.

Sorting data with search params can also be added.

Keyword filters instead of just name search can also be added.

Unit testing
