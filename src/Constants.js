export const GAME_WIDTH = window.innerWidth;
export const GAME_HEIGHT = window.innerHeight;

export const SKIER_CRASH = 'skierCrash';
export const SKIER_LEFT = 'skierLeft';
export const SKIER_LEFTDOWN = 'skierLeftDown';
export const SKIER_DOWN = 'skierDown';
export const SKIER_RIGHTDOWN = 'skierRightDown';
export const SKIER_RIGHT = 'skierRight';
export const SKIER_JUMP = 'skierJump'
export const TREE = 'tree';
export const TREE_CLUSTER = 'treeCluster';
export const ROCK1 = 'rock1';
export const ROCK2 = 'rock2';
export const NOIAMGE = 'noimage';
/* Rhino Assets */
export const RHINO = 'rhinoDefault';
export const RHINO_LEFT = 'rhinoLeft';
export const RHINO_LEFT2 = 'rhinoLeft2';
export const RHINO_LIFT = 'rhinoLift';
export const RHINO_LIFT_MOUTH_OPEN = 'rhinoLiftMouthOpen';
export const RHINO_LIFT_EAT1 = 'rhinoLiftEat1';
export const RHINO_LIFT_EAT2 = 'rhinoLiftEat2';
export const RHINO_LIFT_EAT3 = 'rhinoLiftEat3';
export const RHINO_LIFT_EAT4 = 'rhinoLiftEat4';

//
export const SKIER_STARTING_SPEED = 10;
export const SKIER_DIAGONAL_SPEED_REDUCER = 1.4142;
export const RHINO_SKIER_DISTANCE = 250;
export const RHINO_START_POSITION = 3000;

export const ASSETS = { 

    [NOIAMGE]: 'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=',
    [SKIER_CRASH]: 'img/skier_crash.png', 
    [SKIER_LEFT]: 'img/skier_left.png',
    [SKIER_LEFTDOWN]: 'img/skier_left_down.png',
    [SKIER_DOWN]: 'img/skier_down.png',
    [SKIER_JUMP] : 'img/skier_jump_3.png',
    [SKIER_RIGHTDOWN]: 'img/skier_right_down.png',
    [SKIER_RIGHT]: 'img/skier_right.png',
    [TREE] : 'img/tree_1.png',
    [RHINO] : 'img/rhino_default.png',
    [RHINO_LEFT] : 'img/rhino_run_left.png',
    [RHINO_LEFT2] : 'img/rhino_run_left_2.png',
    [RHINO_LIFT] : 'img/rhino_lift.png',
    [RHINO_LIFT_MOUTH_OPEN] : 'img/rhino_lift_mouth_open.png',
    [RHINO_LIFT_EAT1] : 'img/rhino_lift_eat_1.png',
    [RHINO_LIFT_EAT2] : 'img/rhino_lift_eat_2.png',
    [RHINO_LIFT_EAT3] : 'img/rhino_lift_eat_3.png',
    [RHINO_LIFT_EAT4] : 'img/rhino_lift_eat_4.png',
    [TREE_CLUSTER] : 'img/tree_cluster.png',
    [ROCK1] : 'img/rock_1.png',
    [ROCK2] : 'img/rock_2.png'
};

export const RHINO_EAT_ASSET = [
    RHINO_LIFT,
    RHINO_LIFT_EAT1,
    RHINO_LIFT_EAT2,
    RHINO_LIFT_EAT3,
    RHINO_LIFT_EAT4
];

export const SKIER_DIRECTIONS = {
    CRASH : 0,
    LEFT : 1,
    LEFT_DOWN : 2,
    DOWN : 3,
    RIGHT_DOWN : 4,
    RIGHT : 5,
    JUMP : 6
};

export const SKIER_DIRECTION_ASSET = {
    [SKIER_DIRECTIONS.CRASH] : SKIER_CRASH,
    [SKIER_DIRECTIONS.LEFT] : SKIER_LEFT,
    [SKIER_DIRECTIONS.LEFT_DOWN] : SKIER_LEFTDOWN,
    [SKIER_DIRECTIONS.DOWN] : SKIER_DOWN,
    [SKIER_DIRECTIONS.RIGHT_DOWN] : SKIER_RIGHTDOWN,
    [SKIER_DIRECTIONS.RIGHT] : SKIER_RIGHT,
    [SKIER_DIRECTIONS.JUMP] : SKIER_JUMP
};

export const KEYS = {
    LEFT : 37,
    RIGHT : 39 ,
    UP : 38,
    DOWN : 40
};