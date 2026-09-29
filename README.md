# Blockchain Mid-Semester Study Notes

A beginner-friendly static HTML study site for the mid-semester scope of the Blockchain Technology Elective. It has no package manager, build process, server-side code, or external JavaScript dependency.

## Files

- `index.html` — overview and exam format
- `modules/01-cryptography-hash.html` — cryptography and hash structures
- `modules/02-blockchain-bitcoin.html` — blockchain and Bitcoin
- `modules/03-attacks-byzantine.html` — network attacks and Byzantine agreement
- `assets/styles.css` and `assets/main.js` — shared site presentation and small interactions

Each module is a standalone HTML file. Edit the relevant module page to revise its notes; shared layout and colors live in `assets/styles.css`.

## Preview locally

Open `index.html` in a browser. For the most reliable navigation behavior, run any simple static file server from this directory, for example:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy on GitHub Pages

1. Extract this folder and push its contents to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Choose deployment from the `main` branch and the repository root (`/`).
4. Save. `index.html` is the site entry page.

## Deploy on Vercel

Import the repository into Vercel. Choose **Other** as the framework preset; leave build command and install command empty. Set the output directory to the repository root if Vercel requests one. The project is static and `index.html` is the entry page.

All internal links are relative, so they work under a GitHub Pages project path as well as at a Vercel domain root.

## Notes scope

These notes cover the three topic groups in the mid-semester examination syllabus. The notes use a first-exposure level of detail and keep later modules such as Ethereum, enterprise DLT, DHT/Kademlia, and Layer 2 out of scope.
