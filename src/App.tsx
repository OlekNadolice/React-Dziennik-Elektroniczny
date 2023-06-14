import Routing from "./Routing/Routing";
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routing/>
    </QueryClientProvider>
  );
}

export default App;
