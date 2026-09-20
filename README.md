# Enchanted Forest Birthday 🎂

A frontend-only React/Vite birthday surprise website.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL.

## Personalize it

Edit only:

`src/data/birthdayData.js`

Change:
- `name`
- `senderName`
- `people` photos/captions
- `memories` photos/captions
- `letter`

Put your real images into:
- `public/images/people/`
- `public/images/memories/`

The example photo filenames are:
`photo1.jpg` through `photo6.jpg`
and
`memory1.jpg` through `memory5.jpg`

No backend, database, authentication, Firebase, Supabase, Tailwind, Bootstrap, or Material UI is used.

If a photo is missing during development, the UI falls back to a placeholder image so the layout remains visible.
