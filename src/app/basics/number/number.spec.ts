import { augment } from './number';


describe('Pruebas de numeros', () =>{

    it('Debe de retornar 100 si el numero ingresado es mayor a 100',()=>{
        const result = augment(300);    
        expect( result ).toBe(100);
    });

    it('Debe de retornar el numero ingresado mas 1, si no es mayor a 100',()=>{
        const number = 50;
        const result = augment(number);    
        expect( result ).toBe(number + 1);
    });
});