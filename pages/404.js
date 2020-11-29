export default function ErrorPage() {
    return (
        <div className="container">
            <h1 className="rainbow sans">404.</h1>
            <p className="sans" style={{ marginTop: 0, fontSize: '20px' }}><span style={{ fontWeight: 600, fontSize: '30px' }}>Looks like we couldn't find that link.</span><br/>Ask the person who gave it to you to double check. :)</p>
            <p className="sans" style={{ marginTop: '4ch', fontSize: '20px' }}>This is <code>srtk.me</code>, a link shortener made with Next.js.<br /><span style={{ fontWeight: 600 }}>Bootstrap your own <a href="https://srtk.me/gh/srtk.me-v2">here</a>!</span></p>
        </div>
    )
}