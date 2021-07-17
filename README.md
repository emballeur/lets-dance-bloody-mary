# Let´s dance bloody Mary

## Description
Let´s-dance-bloody-Mary is a game where the player has to fill his glass with the right ingredients for THE perfect Bloody Mary - the so-called Bloody Cesar.The player moves horizontally to collect the falling right ingredients, which fall randomly from the top of the screen. The ingredients get faster and faster as time goes on. If the wrong ingredients are collected, the player has to throw up. Vomiting twice is dead, three correct ingredients on the floor is also dead. Collecting the right ingredients makes the player drunk. The drunker the more the player dances. We see the status on a life bar. The goal is to dance wildly.


## MVP
- game has one player with a glas that moves horizontically
- glas collects ingredients for the drink
- ingredients appear randomly from the top of the screen
- there are right and wrong ingredients
- wrong ingredients collected - player will throw up, 2 times throw up is dead
- good ingredients uncollected - three ingredients on the floor is dead
- complete drinks make the player drunk, the more drunk the wilder the dance 
- increasing difficulty (pace)

## Backlog
Backlog elements
- lifebar
- scoreboard?
- jumping?

## Data structure
Classes and methods definitions. Or functions.

Main.js - create a new instance of Game and start loop

gameloop(){
    clear
    move
    draw
}


Game
    gameloop()
    
PlayerGlass
    .posX
    .posY
    draw()
    move()

Ingredient
    .good = boolean true
    .posX
    .posY
    draw()
    move()

## States & State Transitions
- buildSplashScreen () {}
- buildGameScreen () {}
- buildGameoverScreen () {}
- buildWinScreen () {}
- buildStatusDanceScreen () {}

## Task
in order of priority

## Links
https://dribbble.com/shots/8790697-Bloody-Mary-Framework-Logo-Design/attachments/1010443?mode=media by Firas Safa
https://www.google.com/search?q=logo+bloody+mary&rlz=1C5CHFA_enDE567DE614&sxsrf=ALeKk03-JXoLwzqbJzVV9s2jbss4svc3_Q:1625924539709&tbm=isch&source=iu&ictx=1&fir=iqvrfXW7OmMvDM%252CKdjEhCWPbYSkVM%252C_&vet=1&usg=AI4_-kQ3pkQKc8jEucqzwUNwSqwFjnYJtw&sa=X&ved=2ahUKEwiajvv00NjxAhXvhf0HHdhbDjAQ9QF6BAgJEAE&biw=1420&bih=766#imgrc=PcJCVSwpNnJkzM
https://www.google.com/search?q=bar+background+game&rlz=1C5CHFA_enDE567DE614&sxsrf=ALeKk03mZKD5zFmKSMsWk-JGIyvuEFiaoA:1626200056375&tbm=isch&source=iu&ictx=1&fir=ouE0CCtkz0JzzM%252Cd0KUGzdmt0BifM%252C_&vet=1&usg=AI4_-kRW7PqDay4yD0hHoOPZw6Vd_XJr9Q&sa=X&ved=2ahUKEwjFksal0-DxAhVBzqQKHSgmD6MQ9QF6BAgNEAE#imgrc=ouE0CCtkz0JzzM
