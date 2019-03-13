import { loggedUser } from './boolean';

describe('Pruebas de booleanos', ()=>{

    it('Debe de retornar true',()=>{
        const result = loggedUser();
        expect(result).toBeTruthy();
    })
});