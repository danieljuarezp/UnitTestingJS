import { Player } from './class';



describe('Pruebas de clases',()=>{

    let player = new Player();

    beforeAll( () => {
        console.log('beforeAll')
    });
    beforeEach( () => {
        player.points = 100; //Regresar el jugador al puntaje de inicio
    });

    afterAll( () => {
        console.log('afterAll')
    });
    afterEach( () => {
        player = new Player(); //Crear una nueva instancia del jugador
    });

    it('Debe de retornar 80 de puntos si recibe 20',()=>{
       
        const result = player.takeHit(20);
        expect(result).toBe(80);
    });

    it('Debe de retornar 50 de puntos si recibe 50',()=>{

        const result = player.takeHit(50);
        expect(result).toBe(50);
    });
})