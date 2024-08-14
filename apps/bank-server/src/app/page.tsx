'use client'
export default function Home() {
  return (
   <div className="">
    Hello
    <button onClick={
      ()=>{
        window.open(`/gateway/${'jwttoken'}`, '_blank','noopener,noreferrer,width=800,height=600'); 
      }
    }>
      Click Here
    </button>
   </div>
  );
}
