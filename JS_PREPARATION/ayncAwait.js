function userdata() {
   return new Promise((resolve)=>{
    setTimeout(() => {
        resolve(
            
        {
            name : "anuj"
        }
        )
    }, 3000);
   })
}
async function Fetching() {
    try {
        console.log("Fetching the Data");
        const blog = await userdata(); // Now it correctly awaits the Promise
        console.log(blog);
        console.log("Fetched!");
    } catch (error) {
        console.error(error);
    }
}

Fetching();
