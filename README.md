# Project-One
Gobble Up Tic Tac Toe

Summary:
A Tic Tac Toe variant game was created using HTML, CSS and Javascript. The rules of the game are similar to Tic Tac Toe, i.e. to get 3 of the same pieces in a straight line (can be horizontal, vertical or diagonal). The difference in this variant is that there are 3 sizes (small, medium and large). The large pieces can gobble up the other 2 sizes and replace them. The medium size can only gobble up the small piece. 
Therefore, some level of strategic thinking is introduced to the classic game. Each player has 2 pieces of each size from the start. Each player will take turns to drag and drop their chosen pieces unto the 9 square board. 

How the game was built:
1. A dashboard was first built. Within the dashboard sits the 9 square board where the game is played on the left hand side. The available pieces for each player to use are located on the right hand side. 
2. The pieces for each player was then created using imported images sized differently. Each piece has a unique ID. 
3. A drag and drop code was created to allow the players to pick up and place their pieces onto the board. The first iteration allowed multiple pieces to be dropped onto the same square. The second iteration corrected that by providing restrictions and for the program to check if there was an existing piece in place before allowing the image to be dropped. If there was, no action will take place. 
4. In testing, I realised that the drag and drop function allowed images to be dropped into either the square itself or the image that was already in place. Therefore, subsequent codes were done to prevent that.
5. Next, conditions were added to allow comparison of the piece size and to allow the bigger pieces to gobble up and replace the smaller ones.
6. Finally, the win conditions were programmed by having the program check if any of the win conditions exist after every player's turn.

Newspaper Articles:
1. For further improvement, would recommend improving the graphics.
2. Also, introduce versus computer play.
3. Create turn based, so that only a certain player can go at a time (currently, the players can choose whichever piece even if it's not their own).

Link to game:
