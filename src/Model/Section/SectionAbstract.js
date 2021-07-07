export default class SectionAbstract {
    /**
     * @return {number}
     */
    get length() {
        return this._length;
    }

    constructor() {
        this._length = 16;
    }
}