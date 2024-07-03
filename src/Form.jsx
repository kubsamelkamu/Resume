import { FileTaker } from "./InputData";
import { Input } from "./InputData";

export function CvForm(onchange){
    function changeValue(title,value){
        onchange(title,value);
    }

   
    return(
    
            <form className="cv-form block" >
                <div className="container">
                    <legend>YOUR INFORMATION HERE</legend>
                    <div className="input-group">
                        <FileTaker title={"photo"} accept="image/*"
                            onchange={changeValue}
                        />
                        <Input title={"Name"} onchange={changeValue} />
                        <Input title={"Email"} type={"email"} onchange={changeValue} />
                        <Input title={"phone Number"} type={'tel'} onchange={changeValue} />
                    </div>
                </div>
                <br />

                <div className="container">
                    <legend>YOUR EDUCATION BACKGROUND</legend>
                    <div className="input-group">
                        <Input title={"school"} onchange={changeValue}/>
                        <Input title={"study"} onchange={changeValue} />
                        <Input title={"date of Study "} type={"date"} onchange={changeValue} />
                    </div>
                </div>
                <br />

                <div className="container">
                    <legend>YOUR EXPREINCE HERE</legend>
                    <div className="input-group">
                        <Input title={"Main Responsibilty"} onchange={changeValue} />
                        <Input title={"Worked from"} type={"date"} onchange={changeValue} />
                        <Input title={"Worked until"} type={"date"} onchange={changeValue} />
                        
                    </div>
                </div>
                <br />
            </form>
        
    );

}

