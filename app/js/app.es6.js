import Game from './game/game.es6';

((w) => {

    w.onload = () => {
        console.info('APP INIT');

        let game = new Game({
            container: w.document.body,
            window: w
        });

        game.init();
    }
})(window)
