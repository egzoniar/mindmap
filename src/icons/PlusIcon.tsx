const PlusIcon = (props: {size?: number}) => {
  const size = props.size || 15;
  
  return (
    <svg className="text-white" style={{width: size}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v8m4-4H8" />
    </svg>

  )
}

export default PlusIcon;