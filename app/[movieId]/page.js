import ContextProvider from "../_components/_Hooks/ContextProvider";
import EachMovDetails from "./EachMovDetails";

function page() {
  return (
    <ContextProvider>
      <EachMovDetails />
    </ContextProvider>
  );
}

export default page;
