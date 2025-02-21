

import { AuthProvider } from './AuthContext';


export const AllContexts = ({children}) => {
  return (
    <AuthProvider>
      {children}
   </AuthProvider>
  )
}
