





the commment sesction is not closing with the svg 





videos show in days like yester day this much video seen 

when watch previous video like 5 day ago video then it's watchedat
time will change and then it consider as today video which is ok ,but
if it was yesterday video than it should be there to and new should create for here for a day only 







when scrolll get more video / comments to optimize the load





comments





login / register   @
Home    @
Upload Video  @
Profile  // user watch history
Logout 

*********************************

Comments

User watch history
Notification
Search







 
subscribed 


closure for understanding



  const progressPercentage = (video.currentTime / video.duration) * 100;
            setProgress(progressPercentage)

            const displayCurTime = Math.floor(video.currentTime)
            console.log("This is video.current time ",video.currentTime)

            const hours = Math.floor(displayCurTime / 3600)
            const minutes = Math.floor((displayCurTime % 3600) / 60 )
            const seconds = Math.floor(displayCurTime % 60)
            
            const formatcurtime = String(minutes).padStart(2, '0')
            const paddedSeconds = String(seconds).padStart(2, '0')
            
            if (hours > 0) {
            
                settime(`${hours}:${formatcurtime}:${paddedSeconds}`)
                
            }else{

                settime(`${formatcurtime}:${paddedSeconds}`)
            }      



useQurey fetching data
useMutation for changing data
queryClient the brain of cache




axios template and working 

axios.get('https://api.example.com/non-existent-page')
  .then(response => {
    // This code will NOT run for a 404 error
    console.log(response.data);
  })
  .catch(error => {
    // This .catch() block handles EVERYTHING:
    // - Network failures (internet down)
    // - HTTP status errors (like 404 or 500)
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log('Server responded with an error:', error.response.status);
    } else if (error.request) {
      // The request was made but no response was received (e.g., internet down)
      console.log('No response from server:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error setting up request:', error.message);
    }
  });


  Axios is like that multi-tool:

In the browser (client-side): It uses the built-in XMLHttpRequest (XHR) object to send network requests. This has been the standard way to make requests in browsers for years.

On the server (Node.js): It uses the native Node.js http module. Browsers don't have this module, but it's the standard way to make HTTP requests on a server.