

const GoogleCalendar = () => {

    const handleGoogleSignIn = () => {
        window.location.href = 'http://localhost:3000/auth/google';
    };

    
    

   

    return (
        <div className="flex justify-center items-center h-[100vh]">
            
            <button onClick={handleGoogleSignIn} className="border">Sign in with Google</button>
            
        </div>
    );
};

export default GoogleCalendar;
