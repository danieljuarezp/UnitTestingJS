import { FormRegister } from "./form";
import { FormBuilder } from '@angular/forms';


describe('Pruebas de formularios', ()=>{

    let component: FormRegister;

    beforeEach( () => component = new FormRegister( new FormBuilder() ) );

    it('Debe de crear un formulario con dos campos', () =>{

        expect(component.form.contains('email')).toBeTruthy();
        expect(component.form.contains('password')).toBeTruthy();
    });

    it('El email debe de ser obligatorio', () =>{

        const control = component.form.get('email');
        control.setValue('');

        expect(control.valid).toBeFalsy();
    });

    it('El email debe de ser un correo valido', () =>{

        const control = component.form.get('email');
        control.setValue('daniel@daniel.com');

        expect(control.valid).toBeTruthy();
    });
});