import { Player2 } from './player2';

describe('Prueba event emitter', ()=>{

    let player: Player2;
    beforeEach( ()=> player = new Player2() );

    it('Debe de emitir un evento cuando recibe un golpe', () =>{
        
        let newPoints = 0;

        player.changePoints.subscribe(points => {
            newPoints = points;
        });

        player.takeHit(1000);

        expect(newPoints).toBe(0);
    });

    it('Debe de emitir un evento cuando recibe un golpe menor a 100', () =>{
        
        let newPoints = 0;

        player.changePoints.subscribe(points => newPoints = points);

        player.takeHit(50);

        expect(newPoints).toBe(50);
    });
});