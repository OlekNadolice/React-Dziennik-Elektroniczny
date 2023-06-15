import Routing from './Routing/Routing';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from 'Providers/AuthProvider';
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routing />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
