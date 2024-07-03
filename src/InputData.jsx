/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

export function Input({title ,type={text} ,onchange = () => console.log('oop') }){
   
    return(
        <div className="input-box">
            <label htmlFor={title + "input"}>{title}:{""}</label>
            <input
            type={type} 
            id={title + "input"}
            onChange={(e) =>{
              onchange(title,e.target.value);
            }}
            />
        </div>
    );
}

export function FileTaker({title,accept ="",onchange}){
    return(
        <div className="input-box">
            <label htmlFor={title +"input"}>
                {title}:
            </label>

            <input
                type="file" 
                accept={accept}
                id={title + "-input"}
                onChange = {(e) =>{
                    let image_file = new FileReader();
                    image_file.readAsDataURL(e.target.files[0]);

                    image_file.onload =(e) =>{
                        onchange(title,e.target.result)
                    }
                }}
            />
        </div>
    )
}