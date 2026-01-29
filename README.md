# AutoSupense
AutoSuspense is a small React utility that automatically builds and composes
Suspense fallback UI based on your component tree without manually wiring
nested fallback components.

## How to use?:
1. Install this library
```npm i autosuspense```

2. Use it by calling and passing your components normally like ```<Supense>```:
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

3. Inside each AutoSuspense component provide a fallback componet for that particular component via ```useSuspenseFallback``` hook.
```
import { useSuspenseFallback } from "autosuspense";

function UserCard() {
  useSuspenseFallback(<div>Loading user…</div>);

  // Component may suspend somewhere below
  return <Profile />;
}
```

### Important Caveats:
1. This library works on top of existing Suspense blocks and prebuilds your Fallback UI via render tree traversal.
2. This means that it uses Depth First searching to prebuild so react is only able to show prebuilt Ui when it first encounters a place to suspend. This could mean that rest of your fallback UI in next adjacent components never render.

### TBD:
1. Adding Default Skeletons.
2. Supporting existing Library skeleton implementations.
3. Adding a central config & template extension components & file to easily extend and manage your Fallback UI.