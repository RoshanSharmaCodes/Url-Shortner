import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import styles from "../styles/MainPage.module.css"

export const MainPage = () => {

    let [shortUrl, setShortUrl] = useState("")
    let [mainUrl, setMainUrl] = useState("")
    let [copyText, setCopyText] = useState("Copy")
    const router = useRouter()

    const changeCopyText = ()=> {
        setCopyText("Copied")
        navigator.clipboard.writeText(shortUrl)
    }

    const generateShortUrl = async (e) => {
        console.log("API Called")
        setCopyText("Copy")
        e.preventDefault()
        console.log("Original Url",mainUrl)
        const response = await fetch("/api/supabase",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(mainUrl)
        })
        const data = await response.json()
        setShortUrl(data.url)
    }

  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <form onSubmit={generateShortUrl}>
                <input type="text" className={styles.urlInput } placeholder="https://example.com"  onChange={(e)=>setMainUrl(e.target.value)}/>
                <button type="submit" className={styles.submitBtn}>Get Short Url</button>
            </form>
            {shortUrl&& <div className={styles.shortUrlDiv}><input className={styles.shortUrlText} value={shortUrl} disabled/><button className={styles.copyBtn} onClick={(e)=>changeCopyText()}>{copyText}</button></div>}
        </div>
    </div>
  )
}


export default MainPage