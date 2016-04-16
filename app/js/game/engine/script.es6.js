import Component from './component';

export const TYPE = "SCRIPT"

class Script extends Component {
    constructor() {
        super();
        this.type = TYPE;
    }

    static get TYPE() {
        return TYPE
    }
}





export default Script;
