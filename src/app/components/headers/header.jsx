
export default function Header(props) {
    const { title, description = "", centered = false, color = "black", descriptionColor } = props

    return (
      <div className={`${centered ? 'text-center' : 'w-full'} pb-5`}>
        {title && (
          <div className={`text-3xl font-extrabold tracking-tight md:text-5xl`} style={{color:/*color*/"white"}}>
            {title}
          </div>
        )}
        {description && (
          <div 
            className={`${centered ? `flex justify-center` : ``} mt-4 font-serif text-xl text-gray-600 md:text-2xl`} 
            style={descriptionColor ? {color:descriptionColor} : {}}
          >
            {description}
          </div>
        )}
      </div>
    )
}