## 1. Routing

- src/app is the entry point of our application.
- layout wraps every page, its the default layout.
- (auth) group is not included in the route, its just a grouping.
- you can create specific layout.jsx for every page.

## 2.Lazy Loading
- in react we use LazyLoading func, in Next.js it does everything for us.

## 3. SSR vs CSR 
- In CSR, our server receive a request, it sends an empty html file and a bunch of js bundles, browser resolve bundles and render page in html file, therefore initial rendering of the page may be slow, and also browsers do not perform a great indexing with CSR.
- In SSR, when our server recieve a request, it renders the page, and sends the already rendered page to browser, therefore its fast. But in SSR, its hard to maintain event driven structure. Its hard to maintain user interaction.
- If there is an user interaction, our component should be CSR, if not it should be SSR. 
- We use "use client" or "use server" for distinction.

## 4.STYLING

### 4.1. Global CSS
- in the global.css file, we put styles for common css elements such as a, div, etc and classes that we'll be used in the layout.js

### 4.2. Module CSS
- in the module.css files, we will put our css files specific for that page.

## 5. IMAGES
- Nextjs brings a solution to the slow band-with and rendering problem of images with a native Image tag. Use it.


## 6. CSS - STYLING NOTES
- Whenever you want to create one block over another, you can use h1 and div like following
- h1
-div
--item1
--item2 etc

-object:cover, object-fit