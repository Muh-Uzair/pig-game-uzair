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
    console.log(`./${recieved_dice_img_name}.png`)

    // console.log(require(`./${recieved_dice_img_name}.png`)

    // 1 : load the appropraite reievede dice img onto DOM
    dice_img.src = `./${recieved_dice_img_name}.png` ; //./all_dice_pictures/dice-3.png
    console.log(dice_img.src)

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