const fetcher = async () => {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (data.ok) {
            const result = await data.json()
            console.log(result)
        }else{
            console.log('Sorry we experinced an error while fetching')
        }
    } catch (error) {
        console.log(error)
    }
}


/*fetcher()
for(let i = 0; i < 10000; i++){
   console.log('dandadan')
 }*/