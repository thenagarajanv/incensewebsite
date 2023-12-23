import NavBar from "./NavBar";
import Stack from 'react-bootstrap/Stack';

function Orders(){
    return(
        <div>
            <NavBar/>
            <div className='Top-Container'>
                <Stack direction="horizontal" gap={3}>
                        <div className="p-2">
                            
                        </div>
                </Stack>
            </div>
        </div>
    );
}
export default Orders;