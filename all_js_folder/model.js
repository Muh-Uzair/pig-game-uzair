"use strict" ;

export const state_object = 
{
    "pictue_arrays" : ["dice-1" ,"dice-2" ,"dice-3" ,"dice-4" ,"dice-5" ,"dice-6"] ,

}



// generates random dice number between 1 and 6
export function generate_random_dice_number_function()
{
    let random_dice_number = Math.trunc((Math.random() * 6) + 1) ;
    return random_dice_number ;
}