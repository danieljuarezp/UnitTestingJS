import { getRobots } from './arrays';


describe('Pruebas de arreglos', ()=>{

    it('Debe de retornar al menos 3 robots',()=>{

        const result = getRobots();
        expect(result.length).toBeGreaterThanOrEqual(3);
    });

    it('Debe de contener a MegaMan y a Ultron',()=>{

        const result = getRobots();
        expect(result).toContain('MegaMan');
        expect(result).toContain('Ultron');
    });
});