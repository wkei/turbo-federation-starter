# turbo-federation-starter

## Tech Stack

- Turborepo
- React
- React Router
- React i18next
- Vite
- vite-plugin-federation
- tailwind.css

```
.
├── apps
│  ├── container
│  └── subapp
├── package-lock.json
├── package.json
├── packages
│  ├── components
│  ├── config
│  ├── eslint-config-custom
│  └── ui
├── README.md
└── turbo.json
```

- `apps/subapp`: sub app, handles it own sub routing
- `apps/container`: main app shell, lazy load other sub apps and handles the top routing
- `packages/ui`: basic ui components & storybook, like buttons, tabs, cards, ...
- `packages/components`: complex shareable components, like main layout, logout confirm dialog, ...
- `packages/eslint-config-sutom`: common eslint config
- `packages/config`: common configs

## Dev

### Install dependencies

```
npm install
```

### Run specific targets independently

```
npm run dev
npm run dev:sub
npm run dev:container
```

### Check the entrie app in watch mode

```
npm run live
```

## build

```
npm run build
```

Output will be in `./dist`, final build structure

```
dist
├── assets
│  ├── __federation_shared_[xxxx].js
│  ├── js...
│  ├── css...
│  └── vendor...
├── favicon.svg
├── index.html
└── subapp
   ├── __federation_shared_[xxxx].js
   ├── js...
   ├── css...
   ├── remoteEntry.js
   └── vendor...
```

### Check the final build

```
yarn run preview
```

## deploy

...
