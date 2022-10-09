
/**
* Function that return current date + 10 days
* @return   {String}         Current date + 10 days
*/
export function dateWork(){
    const currentDate = new Date();
    var newDate = currentDate;
    newDate.setDate(newDate.getDate() + 10);
    return newDate.toISOString();
}