interface Props {
    children : React.ReactNode
}

const layout = ({children}  :Props) => {
  return (
    <div className='flex flex-col items-center justify-center  bg-muted min-h-svh p-6 md:p-10'>
        <div className='w-full max-w-sm md:max-w-3xl'>
        {children}
        </div>
    </div>
  )
}

export default layout