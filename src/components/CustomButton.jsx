
export const CustomButton = ({title, icon, num})=><button className='text-md text-gray font-semibold px-4 py-2 border-b-2 flex items-center gap-1'>
                {icon}
                {title} <span className='px-2 py-1 text-sm bg-gray-300 rounded-full'>{num}</span>
              </button>