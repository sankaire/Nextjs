import Link from "next/link"
export default function FirstPost(){
    return(
        <div>
            <h1>first post</h1>
            <h2>
                <Link href = "/">
                    <a>back to home</a>
                </Link>
            </h2>
        </div>
    )
}