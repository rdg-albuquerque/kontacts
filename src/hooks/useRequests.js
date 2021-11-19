import { useContext } from "react";
import requestsContext from "../contexts/requests";

function useRequests() {
  return useContext(requestsContext);
}

export default useRequests;
