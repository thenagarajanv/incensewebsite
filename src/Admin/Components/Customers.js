import NavBar from "./NavBar";
import { useUser } from "@clerk/clerk-react";

function Customers(){
 
    const { isSignedIn, user, isLoaded } = useUser();
   
    if (!isLoaded) {
        return null;
      }
     
      if (isSignedIn) {
        return <div>Hello {user.lastName} {user.primaryEmailAddress.emailAddress}!</div>;
      }
    return(
        <div>
            <NavBar/>
            <div>Not signed in</div>
        </div>
    );
}
export default Customers;