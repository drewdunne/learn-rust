
const Rows = (props) => {
  const {content, className} = props;

  const defaultClass = "rows ";
  const fullClass = className ? `${defaultClass} ${className}` : defaultClass

  return (
    <div className={fullClass}>
      {props.children}
    </div>
  )
}

export default Rows;