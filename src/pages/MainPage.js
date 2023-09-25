import { useEffect, useState } from "react"
import styles from "../styles/MainPage.module.css"

export const MainPage = () => {

    let [shortUrl, setShortUrl] = useState("")
    let [mainUrl, setMainUrl] = useState("")

    const generateShortUrl = (e) => {
        e.preventDefault()        
        setShortUrl("dgfd")
    }

    useEffect(()=>{
        console.log(mainUrl)
        console.log(shortUrl)
    },[mainUrl])

    

  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <form onSubmit={generateShortUrl}>
                <input type="text" className={styles.urlInput } placeholder="https://example.com"  onChange={(e)=>setMainUrl(e.target.value)}/>
                <button type="submit" className={styles.submitBtn}>Get Short Url</button>
            </form>
            {shortUrl&&<input type="text" className={styles.ShortUrlInput } value={shortUrl} disabled/>}
        </div>
    </div>
  )
}
