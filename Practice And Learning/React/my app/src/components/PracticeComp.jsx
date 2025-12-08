

export const PracticeComp = () => {
    const items = [2,5,7]
  return <>
   <ol>
     {items.map((val,index)=>(
        <li key={index}>{val}</li>
    ))}
   </ol>
  </>
}
