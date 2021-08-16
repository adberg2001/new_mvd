import CollapsedRow from "./CollapsedRow/CollapsedRow";
import cls from "./Structure.module.scss";

export default function StructureComponent({structure}){

  return (
    <div className={`container ${cls.Structure}`}>
      <h1 className={`section__heading`}>Структура</h1>
      <ul>
        {
          !!structure.length &&
          structure
            .sort((a, b) => a.order - b.order)
            .map(({id, ...rest}) => {
              return <CollapsedRow key={`structure-row-${id}`} {...rest}/>
            })
        }
      </ul>
    </div>
  )
}
