import React from 'react'

function logout() {
    function logoutbtn(){
        window.confirm(`Are you sure want to Logout?`) && localStorage.clear();
        window.location.reload(); 
        
        // if (a === true) {
            
        //     localStorage.clear();
        //     window.location.reload(); 
        // }

    }
    return (
        <div>
            <button className = "logoutbtn" onClick = {logoutbtn}>Logout</button>
        </div>
    )
}

export default logout
