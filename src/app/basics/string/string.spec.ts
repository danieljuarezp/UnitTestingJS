import { message } from "./string";


describe('Pruebas de strings', ()=>{
    it('Debe de regresar un string', ()=>{
        const result = message('daniel');
        expect( typeof result ).toBe('string');
    });

    it('Debe de retornar el nombre enviado', ()=>{
        const name = 'Daniel';
        const result = message(name);
        expect( result ).toContain( name );
    });
});