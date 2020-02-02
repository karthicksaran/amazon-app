import { AbstractControl } from "@angular/forms";

export class CustomValidator{
    static noSpace(control:AbstractControl){
        if(control.value.indexOf(' ') >= 0){
            return {'Spacefound': true}
        } else{
            return null;
        }
    }

}


//AbstractControl-we can use for both Formgroup and formcontrol validation 