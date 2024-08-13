'use client'
export default function Home() {
  return (
   <div className="">
    Hello
    <button onClick={
      ()=>{
        window.open(`/gateway/${'jwttoken'}`, '_blank');
      }
    }>
      Click Here
    </button>
   </div>
  );
}
