async function Fetcher (url:string){
    const res = await fetch(url)
    if(!res.ok){
      throw new Error('Network response failed')
    }
    return res.json()
}
export default Fetcher