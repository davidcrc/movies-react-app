## Init
```sh
npx create-react-app movies-react --template typescript 
```

```sh
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

## Env
REACT_APP_SOMETHING
```tsx
process.env.REACT_APP_SOMETHING
```

## Routing - https://reactrouter.com/web/guides/quick-start
```sh
npm i react-router-dom
```

```sh
npm i --save-dev @types/react-router-dom
```
> Example

```tsx
<Route exact path="/movie/:moviedId">
  <MovieDetail />
</Route>
```
- use this hook
```tsx
const { moviedId } = useParams();
```
## Rating - https://www.geeksforgeeks.org/how-to-use-rating-component-in-reactjs/

```sh
npm install @material-ui/core
```
```sh
npm install @material-ui/lab
```
```sh
npm install @material-ui/icons
```

## Modal


```sh
npm i react-responsive-modal
```
```sh
npm i react-player
```
