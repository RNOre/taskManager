import classes from "./DragModal.module.css"

const DragModal = (props:any)=>{

    return(
        <div draggable={true} onDragLeave={(event)=>{console.log(event)}} className={` ${classes.modal} ${props.gold?classes.gold:""} Dragmodal`}>

        </div>
    )
}

export default DragModal;