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
6.1. Whenever you want to create one block over another, you can use h1 and div like following
- h1
-div
--item1
--item2 etc

6.2. object:cover, object-fit

6.3. HOW TO OVERRIDE STYLE'S PROPERTY WITH EVEN OR ODD NUMBERS: 

.item {
    display:flex;
    flex-direction:row;
}

//IF item is an even item, like 2nd or 4rd or 6th, override the style.
.item:nth-child(2n){
    flex-direction:row-reverse;
}

## 7. DATA FETCHING IN NEXT.JS
- In Next.js, you can fetch data from client side or server side, if you fetch it from client side, client side will render first.

1.CLIENT SIDE: 
--UseState
--ReactQuery etc.

2.SERVER SIDE
-change component to async component.
--If your data never changes, you can use {cache:"force-cache"}, its called static fetching
--If it changes sometimes, you can use revalidating,
--If it always changes, then you can use {cache:"no-store"} and its called DYNAMIC FETCHING

## 8. API
- Just like we do in the pages, you create your api/route folder in the app folder.
- for /posts endpoint, create app/api/posts/route.js path, then you have the path.


## 9. NEXT-SEO
- You can change title and description of METADATA in server side in NEXT.JS, this is why NEXT.JS is so strong.
- USE dynamic metadata.

## 10.NEXT AUTH
- USE NEXT AUTH
- USE AN AUTHPROVIDER as Component
- Use hooks to reach session values.