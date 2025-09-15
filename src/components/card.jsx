
const Card = ({name, label, pic}) => {
  return (
    <div className="p-3 flex items-center gap-4 border-b-1 border-gray-300 mx-4 ">
        <div>
            <img className="h-[40px] w-[40px] rounded-xl" src={pic}/>
        </div>
      <div className="text-left">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm font-md    text-gray-400" >{label}</p>
      </div>
      {/* hiover elements */}
    </div>
  )
}

export default Card
