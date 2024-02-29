"use strict"

import * as model from "./model.js"
import * as view_roll_dice from "./all_view_folder/view_roll_dice.js"
import * as view_hold_button from "./all_view_folder/view_hold_button.js"
import * as view_new_game_button from "./all_view_folder/view_new_game_button.js"
import * as helpers from "./helper.js"





function control_dice_button_working_function()
{
    // console.log(`roll_dice_clicked`) ;

    // 1 : generate randaom dice number 
    let random_dice_number = model.generate_random_dice_number_function()

    // 2 : if rolled dice is 1 change active player
    if( random_dice_number === 1 )
    {
        view_hold_button.change_active_player_status_function() ;        
    }

    // 2 : pull the appropriate dice img from model 
    let dice_img_name = model.state_object.pictue_arrays[random_dice_number-1] ; // dice-1.png // -1 beacuse of zero based indexing

    // 3 : modify that img on the DOM
    view_roll_dice.display_dice_img_function(random_dice_number , dice_img_name) ;

    // 4 : updating the state of active player 
    view_roll_dice.update_current_score_of_active_player_function(random_dice_number) ;


}
function control_hold_button_working_function()
{
    // 2 : update the scores of player 
    view_hold_button.update_players_score() ;

    // 1 : check if any player succeded
    view_hold_button.check_if_any_player_succeded_function()
   
}
function control_new_game_button_working_function()
{
    view_new_game_button.restore_everything() ;
}








function init()
{   
    // when app starts the dice img will not be visible
    helpers.make_dice_img_opacity_zero_function() ;

    // listening for events on the roll dice button using pusblisher subscriber pattern
    view_roll_dice.add_event_listener_function_button_roll_dice(control_dice_button_working_function) ;

    // listen for events on hold button 
    view_hold_button.add_event_listener_function_button_hold(control_hold_button_working_function)

    // listenin for events on new_game_button
    view_new_game_button.add_event_listener_function_button_new_game(control_new_game_button_working_function)

    console.log(`img-working-branch`)   
    

}
init();


