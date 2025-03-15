# Simple CV

1. Install dependencies (`bun install`)
2. Add your photo as `public/photo.jpeg`
3. Create a CV JSON in `public/cv.json` following the typing at the end of this README
4. Use `nuxi generate` or `nuxi build` to distribute your CV or use your browser’s print dialog to export it as a PDF

## CV type

```ts
type CV = {
  name: string;
  addresses: string[];
  personalData: {
    name: string;
    value: string;
  }[];
  abilities: string[];
  skills: string[];
  education: {
    name: string;
    date: string;
    description: string;
  }[];
  experience: {
    date: string;
    company: string;
    description: string;
    details: string[];
  }[];
};
```
