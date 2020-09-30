function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(-1 * rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    if(enemy1.life != 0) {
        for (var i = 0; i < 20; i++)
        {
            enemy1.accelerate(moveDistance / 10);
            var result = i%3;
            if ( result == 0) {
                enemy1.turnLeft(rotateAngle / 133);
            } else {
                enemy1.turnRight(rotateAngle / 200);
            }
        }
    }

    enemy1.move();
    player1.move();
    controls.update();
}