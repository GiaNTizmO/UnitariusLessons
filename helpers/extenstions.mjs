
/**
* Tiny pretty logger from me just for fun
* @author   GiaNTizmO
* @param    {String} msg     Message to log
* @param    {String} section [nullable] Name of code section
*/
export function tinyLogger(msg, section = null){
    let prettyDate = (new Date()).toString().split(' ').splice(1,4).join(' ');
    if (section != null){
        console.log(`[ ${prettyDate} ] [ ${section} ] >> ${msg}`);
    }
    else {
        console.log(`[ ${prettyDate} ] >>  ${msg}`);
    }
}