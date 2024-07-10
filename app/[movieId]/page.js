import ContextProvider from "../_components/ContextProvider";
import EachMovDetails from "./EachMovDetails";

function page() {
  return (
    <ContextProvider>
      <EachMovDetails />
    </ContextProvider>
  );
}

export default page;
