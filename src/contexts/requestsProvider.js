import useRequestsProvider from "../hooks/useRequestsProvider";
import requestsContext from "./requests";

function RequestsProvider({ children }) {
  const value = useRequestsProvider();
  return (
    <requestsContext.Provider value={value}>
      {children}
    </requestsContext.Provider>
  );
}

export default RequestsProvider;
