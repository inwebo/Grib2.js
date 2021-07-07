import SectionAbstract from "./SectionAbstract";

/**
 * This section serves to identify the start of the record in a human readable form, indicate the total length of the
 * message, and indicate the Edition number of GRIB used to construct or encode the message. For GRIB2, this section is
 * always 16 octets long.
 */
export default class Section0 extends SectionAbstract {
    constructor() {
        super();
    }
}