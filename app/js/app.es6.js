import Game from './game/game.es6';

((w) => {

    let game = new Game({
        container: w.document.body,
        window: w
    });

    w.onload = () => {
        console.info('APP INIT');

        game.init();
    }
})(window)
