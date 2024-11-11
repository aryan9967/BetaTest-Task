

const GoogleCalendar = () => {

    const handleGoogleSignIn = () => {
        window.location.href = 'https://beta-test-task.vercel.app/auth/google';
    };

    
    

   

    return (
        <div className="flex justify-center items-center h-[100vh]">
            
            <button onClick={handleGoogleSignIn} className="border-2 p-2 border-blue-500">Sign in with Google</button>
            
        </div>
    );
};

export default GoogleCalendar;
