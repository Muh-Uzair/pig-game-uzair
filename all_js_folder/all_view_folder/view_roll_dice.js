"use strict"

import {button_roll_dice , dice_img , player_1 , player_1__score , player_1_current_score , 
        player_2 , player_2__score , player_2_current_score , winning_score  } from "../config.js" ;


import * as helpers from "../helper.js"



export function add_event_listener_function_button_roll_dice(recieved_control_dice_button_working_function)
{

    button_roll_dice.addEventListener(`click` ,
    function(event_info_object)
    {
        if( +player_1__score.textContent >= winning_score || +player_2__score.textContent >= winning_score )
        return ;

        recieved_control_dice_button_working_function();
    })

}




export function display_dice_img_function(recieved_random_dice_number , recieved_dice_img_name)
{
    console.log(recieved_random_dice_number , recieved_dice_img_name)

    if(recieved_random_dice_number === 1)
    {
        dice_img.src = `https://clipartmag.com/images/picture-of-dice-1.gif` ;
    }
    else if (recieved_random_dice_number === 2)
    {
        dice_img.src = `https://clipground.com/images/dice-clipart-1-6.gif` ;
    }
    else if (recieved_random_dice_number === 3)
    {
        dice_img.src = `https://clipartmag.com/images/picture-of-dice-17.gif` ;        
    }
    else if (recieved_random_dice_number === 4)
    {
        dice_img.src = `https://clipground.com/images/dice-clipart-1-6-9.gif` ;        
    }
    else if (recieved_random_dice_number === 5)
    {
        dice_img.src = `https://www.clipartbest.com/cliparts/pi5/xox/pi5xoxgkT.gif` ;        
    }
    else if (recieved_random_dice_number === 6)
    {
        dice_img.src = `https://www.clipartbest.com/cliparts/dcr/o4z/dcro4z4Bi.gif` ;        
    }


    // 1 : load the appropraite reievede dice img onto DOM

    // 2 : make that img visible
    helpers.make_dice_img_opacity_one_function() ;

}
export function update_current_score_of_active_player_function(recieved_random_dice_number)
{

    // player_1 is active and update its current score
    if(player_1.classList.contains("active")) 
    {
        player_1_current_score.textContent = +player_1_current_score.textContent + recieved_random_dice_number ;
    }
    // player_2 is active and update its current score
    else if(player_2.classList.contains("active")) // player_2 is active
    {
        player_2_current_score.textContent = +player_2_current_score.textContent + recieved_random_dice_number ;
    }
     
}