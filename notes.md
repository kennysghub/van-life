
## Route Params 
<hr>

1. What is a route/url parameter?

    A portion of our route path that is a placeholder for what will eventually
be the actual segment in the URL of the page.


1. Add a route parameter called `productId` to the Route path below:

```jsx
<Route path="/products/:productId" element={<ProductDetail />} />
```

1. Add whatever you need to add for the component below to display
   the route parameter in the <h1>
```jsx
import { useParams } from "react-router-dom"

function ProductDetail() {
    const { productId } = useParams()
    return <h1>Product id is {productId}</h1>
}
```

Nesting <Route>
- Can use either <Route/> OR <Route>...</Route>
- When you want ot keep displaying some UI on the page, but also want to display more.
- Maybe if you want to avoid repition in your route definitions. 
  
## Nested Routes 
<hr>

1. What is the primary reason to use a nested route?

- Whenever we have some shared UI between routes in our app.


2. What is a "Layout Route"?

- It's the parent route of some nested routes that contains just the portion of the UI that will be shared. It will use an Outlet component.


3. What does the <Outlet /> component do? When do you use it?

- We use it anytime we have a parent Route that's wrapping 
children routes. It renders the matching child route's
`element` it's given in its route definition


4. What is an "Index Route"?

- It's the "default route" we want to render when the path
of the parent route matches. It gives us a chance to render
an element inside the parent's <Outlet /> at the same path
as the parent route.


# Query Parameters 
<hr>

- Represent a change in the UI
  - Sorting, filtering, pagination
- Used as a "single source of truth" for certain application state
- Ask yourself: "should a user be able to revist or share this page just like it is?" If "yes", then you might consider ***raising that state up*** to the URL in a query parameter.
- Key/value pairs in the URL
- Begins with `?`
  - /vans`?`type=rugged
    - key of type assigned a value rugged
- Separated by `&`
  - /vans?type=rugged`&`filterBy=price

## What about state? 
- What happens to state when you refresh the page? 
  - It's gone. Refreshing is akin to starting your app again.
- Can you share the current state of your app with a friend?
  - E.g. You have 4 filters and a text search on the list of vans and you want the share the list view with a friend. 
- Best practices about React state are always changing...

