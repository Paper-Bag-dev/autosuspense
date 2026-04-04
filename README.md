# AutoSupense
AutoSuspense is a lightweight React utility that automatically composes Suspense fallback UI based on your component tree without manually wiring nested ```<Suspense>``` boundaries.

It lets you define fallback UI at the component level, while a parent ```<AutoSuspense>``` boundary handles rendering everything correctly.

---
## Why AutoSuspense?:

React Suspense solves async rendering, but fallback composition quickly becomes messy:
```
<Suspense fallback={<PageSkeleton />}>
  <Header />
  <Suspense fallback={<FeedSkeleton />}>
    <Feed />
  </Suspense>
</Suspense>
```
AutoSuspense removes that boilerplate:
```
<AutoSuspense>
  <Page />
</AutoSuspense>
```
Each component defines it's own fallback and autosuspense builds the fallback tree for you.

```
import { Suspend } from "autosuspense";
import Feed from "./Feed";
import Sidebar from "./Sidebar";

function Page() {
  return (
    <div>
      <Feed />
      <Sidebar />
    </div>
  );
}

export default Suspend(Page, <div>Loading page...</div>);
```
---

## Installation:
```npm install autosuspense```

Usage
1. Add AutoSuspense boundary
```
import { AutoSuspense } from "autosuspense";

function App() {
  return (
    <AutoSuspense>
      <Page />
    </AutoSuspense>
  );
}
```
2. Wrap components with Suspend
```
import { Suspend } from "autosuspense";

const UserCard = () => {
  const data = resource.read(); // may suspend
  return <div>{data.name}</div>;
};

export default Suspend(UserCard, <div>Loading user...</div>);
```

- Nested components automatically compose
```
const Parent = () => <Child />;

export default Suspend(Parent, <div>Outer Loader...</div>);
const Child = () => {
  const data = resource.read();
  return <div>{data}</div>;
};

--- 


export default Suspend(Child, <div>Inner Loader...</div>);
```
👉 Resulting fallback:
```
Outer Loader...
  Inner Loader...
```

## Using Prefabs (Reusable Fallbacks)
Instead of passing JSX everywhere, define reusable fallbacks once.

- Define prefabs at the root
```
import { AutoSuspense } from "autosuspense";
import PageSkeleton from "./skeletons/PageSkeleton";
import CardSkeleton from "./skeletons/CardSkeleton";

function App() {
  return (
    <AutoSuspense
      prefab={{
        page: PageSkeleton,
        card: CardSkeleton,
      }}
    >
      <Page />
    </AutoSuspense>
  );
}

## Use prefab keys in components
```
import { Suspend } from "autosuspense";

function Page() {
  return <Feed />;
}

export default Suspend(Page, "page");
function Feed() {
  const data = resource.read();
  return <div>{data}</div>;
}

export default Suspend(Feed, "card");
```
- Resulting fallback UI
```
PageSkeleton
  CardSkeleton
```

## Core Idea:
- Wrap a subtree with ```<AutoSuspense>```.
- Wrap components with Suspend().
- Each component declares its fallback.
- AutoSuspense automatically composes the fallback UI tree without explicit maintaince and wiring.

---
## Fallback Options:

You can provide fallbacks in multiple ways:

1. JSX element:
```
Suspend(Component, <Skeleton />);
```

2. Component: 
```
Suspend(Component, SkeletonComponent);
```

3. String:
```
Suspend(Component, SkeletonComponent);
```

---

AutoSuspense aims to make and enhance fallback creation and make it's maintainence easier. 
