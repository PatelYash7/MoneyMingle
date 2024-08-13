export default function Page ({params}:{params:{PublicKey:string}}){
    return <div>
        Hello From the Payment Page {params.PublicKey}.
    </div>
}