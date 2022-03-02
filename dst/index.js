"use strict";
/*
Example of what contacts object looks like:
    let contacts = {
        'Joe': 234723481,
        'Mike': 723896498,
        'Hanna': 876124322,
    }
*/
function contactsToNames(contacts) {
    return Object.keys(contacts);
}
