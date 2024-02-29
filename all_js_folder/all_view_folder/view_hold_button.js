"use strict" ;


import {button_hold , dice_img, player_1 , player_1__score , player_1_current_score , 
       player_2 , player_2__score , player_2_current_score , winning_score  } from "../config.js" ;

import * as helpers from "../helper.js"



export function add_event_listener_function_button_hold(recieved_control_hold_button_working_function)
{
    button_hold.addEventListener("click" ,
    function(event_info_object)
    {
        if( +player_1__score.textContent >= winning_score || +player_2__score.textContent >= winning_score )
        {
            console.log(`hello`)            
            return ;
        }


        recieved_control_hold_button_working_function();
    })


}



export function update_players_score()
{
    // console.log(`updating_players_score`)
    if(player_1.classList.contains("active")) // player_1 is active
    {
        player_1__score.textContent = +player_1__score.textContent + +player_1_current_score.textContent ; 
        
    }
    else if(player_2.classList.contains("active")) // player_2 is active
    {
        player_2__score.textContent = +player_2__score.textContent + +player_2_current_score.textContent ;  
             
    }
}
export function change_active_player_status_function()
{    
    player_1_current_score.textContent = 0 ;
    player_2_current_score.textContent = 0 ;

    document.querySelector(".active").style.backgroundColor = "rgba(255, 255, 255, 0)"


    player_1.classList.toggle(`active`) ; 
    player_2.classList.toggle(`active`) ; 

    document.querySelector(".active").style.backgroundColor = "rgba(255, 255, 255, 0.4)"
    
    
}
function change_winner_background_function(winner_player)
{
    
    // console.log(winner_player) ;

    // 1 : change background 
    winner_player.style.backgroundColor = `#2f2f2f` ;

    // 2 : chnage player text color
    document.querySelector(`.active .text_player`).style.color = `#c7365f` ;

    // 3 : make dice img opacity 0
    helpers.make_dice_img_opacity_zero_function() ;

       

}
export function check_if_any_player_succeded_function()
{
    // if player_1 score is grater than winning sccore change its back ground
    if( +player_1__score.textContent >= winning_score)
    {
        change_winner_background_function(player_1) ;
    }
    // if player_1 score is grater than winning sccore change its back ground
    else if (+player_2__score.textContent >= winning_score )
    {

        change_winner_background_function(player_2) ;
    }
    else if( +player_1__score.textContent < winning_score && +player_1__score.textContent < winning_score )
    {
        change_active_player_status_function() ;   
    }

         
}



