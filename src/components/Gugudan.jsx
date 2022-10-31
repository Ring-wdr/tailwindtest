const GUGUDAN_ARR = [1,2,3,4,5,6,7,8,9]

export const Gugudan = () => 
  <div className='grid grid-rows-3 grid-flow-col-dense rounded-xl gap-10 bg-blue-300 justify-between'>
    {GUGUDAN_ARR.reduce((result, left)=>{
      if (left === 1) return result;
      return (<>
        {result}<div className='p-5 m-5 bg-white/25 rounded-2xl'>
        {GUGUDAN_ARR.reduce((row, right)=>
        <> {row} 
          <div>
          {left} X {right} = {left * right}
          </div>
        </>
        , '')}
      </div></>)
    },'')}
  </div>