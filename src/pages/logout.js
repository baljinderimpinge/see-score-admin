import React from "react";

// const LogoutButton = () => {
//     const handleLogout = () => {
//         localStorage.clear("token");
//         // Optionally, you can redirect the user to the login page or perform other actions
//         // window.location.href = "/login";
//     };

//     if (isAuthenticated) {
//         return (
//             <div>
//                 <button 
//                     className="btn btn-primary mx-5 my-5 px-4 logoutBtn"
//                     onClick={() => {
//                         logout({ returnTo: window.location.origin });
//                         localStorage.clear("token");
//                     }}
//                 >
//                     Log Out
//                 </button>
//                 <br />
//             </div>
//         );
//     }

//     // If not authenticated, you might want to return null or some other UI.
//     return null;
// };

// export default LogoutButton;



const LogoutButton = () => {
    const handleLogout = () => {
        localStorage.clear("token");
        // Optionally, you can redirect the user to the login page or perform other actions
        // window.location.href = "/login";
    };

    return (
        <div>
            {/* <button
                className="btn btn-primary mx-5 my-5 px-4 logoutBtn"
                onClick={handleLogout}
            >
                Log Out
            </button>
            <br /> */}
        </div>
    );
};

export default LogoutButton;
