import { useSession } from "next-auth/react"

export default function()  {
    const session = useSession()
    // const {error} = session.sign
    return (
        <div>

        </div>
    )
}