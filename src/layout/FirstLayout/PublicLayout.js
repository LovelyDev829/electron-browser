import {Box} from "@mui/material"
import FirstBar from "./FirstBar";


const PublicLayout = ({children})=>{
    return(
        <Box>
            <FirstBar/>
            <Box>
                {children}
            </Box>
        </Box>
    )
}

export default PublicLayout;