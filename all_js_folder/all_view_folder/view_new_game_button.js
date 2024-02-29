"use strict" ; 

import {button_new_game , player_1 , player_2 , main_box} from "../config.js" ;


export function add_event_listener_function_button_new_game(recieved_control_new_game_button_working_function)
{

    button_new_game.addEventListener(`click` , 
    function(event_info_object)
    {
        
        recieved_control_new_game_button_working_function()
    })

}
export function restore_everything()
{
    

    // 1 : restore background colors 
    main_box.style.backgroundColor = `rgba(255, 255, 255, 0.4)`
    player_1.style.backgroundColor = `rgba(255, 255, 255, 0)` ;
    player_2.style.backgroundColor = `rgba(255, 255, 255, 0)` ;

    // 2 : making player 1 as active player 
    player_1.classList.add("active") ;    
    player_2.classList.remove("active") ;

    // 3 : chaning the player text color
    document.querySelector(`.player_1 .text_player`).style.color = `black` ;
    document.querySelector(`.player_2 .text_player`).style.color = `black` ;

    // 4 : making all the numbers 0
    document.querySelector(`.player_1 .text_player_score`).textContent = 0 ;
    document.querySelector(`.player_2 .text_player_score`).textContent = 0 ;

    // 5 : making current score of both the player 0
    document.querySelector(`.player_1 .text_current_score`).textContent = 0 ;
    document.querySelector(`.player_2 .text_current_score`).textContent = 0 ;

    document.querySelector(".active").style.backgroundColor = `rgba(255, 255, 255, 0.4)` ;

}