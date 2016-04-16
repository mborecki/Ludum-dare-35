import Game from './game/game.es6';

((w) => {
    w.onload = () => {
        console.info('APP INIT');

        new Game();
    }
})(window)
