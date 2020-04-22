// ステージ設定
// ステージサイズ
let stageWidth = 1100;
let stageHeight = 550;
// ステージ壁スプライト
let leftWall;
let topWall;
let rightWall;
let bottomWall;
// ステージ壁の厚さ
const wallTthickness = 20;
// ステージ壁の色
const wallColor = "#000000";
// ステージ背景
const backgroundColor = "#dcdcdc";
// ダミー壁のスプライト
let dummyLeftWall;
let dummyTopWall;
let dummyRightWall;
let dummyBottomWall;
// ダミー壁の色
const dummyWallColor = "#696969";

// ボール設定
// ボールの最大スピードを設定しないと、スピードが上がり過ぎる
const maxSpeed = 5;
// ボール直径
const diameter = 20;
// ダミー壁の厚さはボールの半径を等しい
const dummyWallTthickness = diameter/2;
// 壁とダミー壁の厚さの合計
let sumWallThickness = wallTthickness + dummyWallTthickness;
// スプライトの重さ
const mass = 1;
// 反発係数
const restitution = 1;
// 摩擦係数
const friction = 0;
// ボールの色
const pointColor = "#00ff00";
const upColor = "#008000";// 緑
const gdColor = "#0000ff";// 青
const adColor = "#bce2e8";// 水
const smColor = "#ff0000";// 赤
const sfColor = "#ffff00";// 黄
const sbColor = "#ffa500";// 橙
// ボールの輪郭線の太さ
const ballStrokeWeight = 2;
// ボールの輪郭線の色
const ballStrokeColor = 50;
// ボールスプライト
let point;
let upSp;
let gdSp;
let adSp;
let smSp;
let sfSp;
let sbSp;
// ボール描画フラグ
let upFlg = false;
let gdFlg = false;
let adFlg = false;
let smFlg = false;
let sfFlg = false;
let sbFlg = false;
// 一時的にボールのスピードと方向を保存する変数
let tempUpSpeed = maxSpeed;
let tempUpDirection;
let tempGdSpeed = maxSpeed;
let tempGdDirection;
let tempAdSpeed = maxSpeed;
let tempAdDirection;
let tempSmSpeed = maxSpeed;
let tempSmDirection;
let tempSfSpeed = maxSpeed;
let tempSfDirection;
let tempSbSpeed = maxSpeed;
let tempSbDirection;
// ボール射出スタート地点
let start = {x:sumWallThickness + stageWidth / 2, y:sumWallThickness + stageHeight / 2};
// スタートボールの輪郭線の太さ
const pointStrokeWeight = 4;
// スタートボールの輪郭線の色
const pointStrokeColor = "#ff00ff";
// ボールスタート地点ドラッグ用設定
let pointDraggedSprite = null;
let pointOffsetX = 0;
let pointOffsetY = 0;

// キャラクター設定
// キャラクター（打つ側）
let character;
// キャラクター（受ける側）
let hurtboxChara;
// キャラクターの角度情報
let angle;
// キャラクターのHurtbox情報
let hurtbox;
// キャラクターのHurtboxスプライト
let hurtboxSp;
// Hurtboxドラッグ設定
let hurtboxDraggedSprite = null;
let hurtboxOffsetX = 0;
let hurtboxOffsetY = 0;
let hurtboxX = 1050;
let hurtboxY = 480;
// Hurtboxの色
const hurtboxColor = "rgba(0, 0, 0, 0.5)";
// Hurtboxの輪郭線の太さ
const hurtboxStrokeWeight = 4;
// Hurtboxの輪郭線の色
const hurtboxStrokeColor = "#ff00ff";

// 軌跡
// 軌跡描画レイヤー
let lineLayer;
// 軌跡の太さ
const lineWeight = 6;
// 軌跡の色
const upLineColor = "#008000";// 緑
const gdLineColor = "#0000ff";// 青
const adLineColor = "#bce2e8";// 水
const smLineColor = "#ff0000";// 赤
const sfLineColor = "#ffff00";// 黄
const sbLineColor = "#ffa500";// 橙
// 軌跡群
let upLine;
let gdLine;
let adLine;
let smLine;
let sfLine;
let sbLine;
// 軌跡の開始位置
let upStart;
let gdStart;
let adStart;
let smStart;
let sfStart;
let sbStart;

// ボタン設定
// ボタンサイズ
const buttonWidth = 60;
const buttonHeight = 60;
// ボタン画像変数
let playOnImage;
let playOffImage;
let stopOnImage;
let stopOffImage;
let resetOnImage;
let resetOffImage;
let upOnImage;
let upOffImage;
let gdOnImage;
let gdOffImage;
let adOnImage;
let adOffImage;
let smOnImage;
let smOffImage;
let sfOnImage;
let sfOffImage;
let sbOnImage;
let sbOffImage;
let leftOnImage;
let leftOffImage;
let rightOnImage;
let rightOffImage;
let saveOnImage;
let saveOffImage;
// ボタンスプライト
let playButton;
let stopButton;
let resetButton;
let upButton;
let gdButton;
let adButton;
let smButton;
let sfButton;
let sbButton;
let leftButton;
let rightButton;
let saveButton;

// スプリットライン描画レイヤー
let splitLineLayer;
// スプリットラインの色
const splitLineColor = "#c0c0c0";
// スプリットラインの太さ
const splitLineStrokeWeight = 2;
// 中心線の色
const centerLineColor = "#a9a9a9";
// 中心線の太さ
const centerLineStrokeWeight = 3;

// フラグ設定
// 再生フラグ
let playFlg = false;
// 一時停止フラグ
let stopFlg = true;
// リセットフラグ
let resetFlg = true;
// 打球方向フラグ
let rightFlg = true;

function preload() {
    angle = loadJSON('/LLB/json/angle.json');
    hurtbox = loadJSON('/LLB/json/hurtbox.json');

    playOnImage = loadImage('/LLB/img/play_on.png');
    playOffImage = loadImage('/LLB/img/play_off.png');
    stopOnImage = loadImage('/LLB/img/stop_on.png');
    stopOffImage = loadImage('/LLB/img/stop_off.png');
    resetOnImage = loadImage('/LLB/img/reset_on.png');
    resetOffImage = loadImage('/LLB/img/reset_off.png');
    upOnImage = loadImage('/LLB/img/up_on.png');
    upOffImage = loadImage('/LLB/img/up_off.png');
    gdOnImage = loadImage('/LLB/img/gd_on.png');
    gdOffImage = loadImage('/LLB/img/gd_off.png');
    adOnImage = loadImage('/LLB/img/ad_on.png');
    adOffImage = loadImage('/LLB/img/ad_off.png');
    smOnImage = loadImage('/LLB/img/sm_on.png');
    smOffImage = loadImage('/LLB/img/sm_off.png');
    sfOnImage = loadImage('/LLB/img/sf_on.png');
    sfOffImage = loadImage('/LLB/img/sf_off.png');
    sbOnImage = loadImage('/LLB/img/sb_on.png');
    sbOffImage = loadImage('/LLB/img/sb_off.png');
    leftOnImage = loadImage('/LLB/img/left_on.png');
    leftOffImage = loadImage('/LLB/img/left_off.png');
    rightOnImage = loadImage('/LLB/img/right_on.png');
    rightOffImage = loadImage('/LLB/img/right_off.png');
    saveOnImage = loadImage('/LLB/img/save_on.png');
    saveOffImage = loadImage('/LLB/img/save_off.png');
}

function setup() {

    // キャンバスの大きさはステージサイズと壁の厚さとダミー壁の厚さの合計になる
    let canvas = createCanvas(stageWidth + wallTthickness * 2 + dummyWallTthickness * 2, stageHeight + wallTthickness * 2 + dummyWallTthickness * 2 + buttonHeight);
    canvas.parent('canvas');

    // ボールの軌跡用レイヤー
    lineLayer = createGraphics(width, height - buttonHeight);

    // スプリットライン用レイヤー
    splitLineLayer = createGraphics(width, height - buttonHeight);

    // 四方の壁スプライトを作成
    // 天井
    topWall = createSprite(width / 2, wallTthickness / 2, width, wallTthickness);
    topWall.shapeColor = wallColor;
    // 重くて動かない
    topWall.immovable = true;

    // 四方のダミー壁スプライトを作成
    // 天井ダミー
    dummyTopWall = createSprite(width / 2, wallTthickness + dummyWallTthickness / 2, width - wallTthickness * 2, dummyWallTthickness);
    dummyTopWall.shapeColor = dummyWallColor;
    // 重くて動かない
    dummyTopWall.immovable = true;

    // 底
    bottomWall = createSprite(width / 2, stageHeight + wallTthickness * 1.5 + dummyWallTthickness * 2, width, wallTthickness);
    bottomWall.shapeColor = wallColor;
    bottomWall.immovable = true;

    // 底ダミー
    dummyBottomWall = createSprite(width / 2, stageHeight + wallTthickness + dummyWallTthickness * 1.5, width - wallTthickness * 2, dummyWallTthickness);
    dummyBottomWall.shapeColor = dummyWallColor;
    dummyBottomWall.immovable = true;

    // 左壁
    leftWall = createSprite(wallTthickness / 2, stageHeight / 2 + wallTthickness + dummyWallTthickness, wallTthickness, stageHeight + wallTthickness * 2 + dummyWallTthickness * 2);
    leftWall.shapeColor = wallColor;
    leftWall.immovable = true;

    // 左壁ダミー
    dummyLeftWall = createSprite(wallTthickness + dummyWallTthickness / 2, stageHeight / 2 + wallTthickness + dummyWallTthickness, dummyWallTthickness, stageHeight + dummyWallTthickness * 2);
    dummyLeftWall.shapeColor = dummyWallColor;
    dummyLeftWall.immovable = true;

    // 右壁
    rightWall = createSprite(width - wallTthickness / 2, stageHeight / 2 + wallTthickness + dummyWallTthickness, wallTthickness, stageHeight + wallTthickness * 2 + dummyWallTthickness * 2);
    rightWall.shapeColor = wallColor;
    rightWall.immovable = true;

    // 右壁ダミー
    dummyRightWall = createSprite(width - wallTthickness - dummyWallTthickness / 2, stageHeight / 2 + wallTthickness + dummyWallTthickness, dummyWallTthickness, stageHeight + dummyWallTthickness * 2);
    dummyRightWall.shapeColor = dummyWallColor;
    dummyRightWall.immovable = true;

    // スタート地点のボールのスプライトを作成
    point = createSprite();
    // 当たり判定確認用
    //point.debug = true;
    // ボールの射出位置
    point.position.x = start.x;
    point.position.y = start.y;
    // ボールの当たり判定
    point.setCollider("circle", 0, 0, diameter/2);
    // ボールの描画
    point.draw = function() {
        strokeWeight(pointStrokeWeight);
        stroke(pointStrokeColor);
        fill(pointColor);
        // 当たり判定確認用
        //fill(0);
        ellipse(0, 0, diameter);
    }
    // スプライトがマウスプレスされたら
    point.onMousePressed = function() {
        // リセット後で球種を選択していない場合のみ開始位置を変更できる
        if (resetFlg && pointDraggedSprite === null && !upFlg && !gdFlg && !adFlg && !smFlg && !sfFlg && !sbFlg) {
            // このスプライトをドラッグ
            pointDraggedSprite = this;
            pointOffsetX = pointDraggedSprite.position.x - mouseX;
            pointOffsetY = pointDraggedSprite.position.y - mouseY;
        }
    }
    // スプライトマウスリリースされたら
    point.onMouseReleased = function() {
        // draggedSpriteをnullにしてドラッグ終了
        if (resetFlg && pointDraggedSprite === this) {
            start.x = pointDraggedSprite.position.x;
            start.y = pointDraggedSprite.position.y;
            pointDraggedSprite = null;
        }
    }

    // キャラクター情報
    character = $('#character option:selected').val();

    // 角度情報
    tempUpDirection = -1 * angle[character].up;
    tempGdDirection = -1 * angle[character].ground_down;
    tempAdDirection = -1 * angle[character].air_down;
    tempSmDirection = -1 * angle[character].smash;
    tempSfDirection = -1 * angle[character].spike_f;
    tempSbDirection = -1 * angle[character].spike_b;

    // Hurtbox情報
    hurtboxChara = $('#hurtbox option:selected').val();

    // Hurtboxスプライトを作成
    hurtboxSp = createSprite();
    hurtboxSp.position.x = hurtboxX;
    hurtboxSp.position.y = hurtboxY;
    hurtboxSp.draw = function() {
        strokeWeight(hurtboxStrokeWeight);
        stroke(hurtboxStrokeColor);
        fill(color(hurtboxColor));
        rect(0, 0, hurtbox[hurtboxChara].width, hurtbox[hurtboxChara].height);
    }
    // スプライトがマウスプレスされたら
    hurtboxSp.onMousePressed = function() {
        // リセット後で球種を選択していない場合のみ開始位置を変更できる
        if (hurtboxDraggedSprite === null) {
            // このスプライトをドラッグ
            hurtboxDraggedSprite = this;
            hurtboxOffsetX = hurtboxDraggedSprite.position.x - mouseX;
            hurtboxOffsetY = hurtboxDraggedSprite.position.y - mouseY;
        }
    }
    // スプライトマウスリリースされたら
    hurtboxSp.onMouseReleased = function() {
        // draggedSpriteをnullにしてドラッグ終了
        if (hurtboxDraggedSprite === this) {
            hurtboxX = hurtboxDraggedSprite.position.x;
            hurtboxY = hurtboxDraggedSprite.position.y;
            hurtboxDraggedSprite = null;
        }
    }

    // ボタン群
    // 再生ボタン
    playButton = createSprite(buttonWidth / 2, height -buttonHeight / 2);
    playButton.addImage(playOffImage);
    playButton.scale = 0.4;
    playButton.onMousePressed = function() {
        // 一時停止中またはリセット後で球種が選択されている場合のみ
        if ((stopFlg || resetFlg) && (upFlg || gdFlg || adFlg || smFlg || sfFlg || sbFlg)) {

            // ボタンの画像を入れ替える
            playButton.addImage(playOnImage);
            stopButton.addImage(stopOffImage);
            resetButton.addImage(resetOffImage);

            if (upFlg) {
                upSp.addSpeed(tempUpSpeed, tempUpDirection);
            }
            if (gdFlg) {
                gdSp.setSpeed(tempGdSpeed, tempGdDirection);
            }
            if (adFlg) {
                adSp.setSpeed(tempAdSpeed, tempAdDirection);
            }
            if (smFlg) {
                smSp.setSpeed(tempSmSpeed, tempSmDirection);
            }
            if (sfFlg) {
                sfSp.setSpeed(tempSfSpeed, tempSfDirection);
            }
            if (sbFlg) {
                sbSp.setSpeed(tempSbSpeed, tempSbDirection);
            }
            
            // 一時停止時のみ画像保存ボタンが有効になる
            saveButton.addImage(saveOffImage);

            playFlg = true;
            stopFlg = false;
            resetFlg = false;
        }
    }


    // 一時停止ボタン
    stopButton = createSprite(buttonWidth + buttonWidth / 2, height -buttonHeight / 2);
    stopButton.addImage(stopOffImage);
    stopButton.scale = 0.4;
    stopButton.onMousePressed = function() {
        // 再生中かつ一時停止していない場合のみ作動
        if (playFlg && !stopFlg) {

            playButton.addImage(playOffImage);
            stopButton.addImage(stopOnImage);

            if (upFlg) {
                tempUpSpeed = upSp.getSpeed();
                tempUpDirection = upSp.getDirection();
                upSp.setSpeed(0, 0);
            }
            if (gdFlg) {
                tempGdSpeed = gdSp.getSpeed();
                tempGdDirection = gdSp.getDirection();
                gdSp.setSpeed(0, 0);
            }
            if (adFlg) {
                tempAdSpeed = adSp.getSpeed();
                tempAdDirection = adSp.getDirection();
                adSp.setSpeed(0, 0);
            }
            if (smFlg) {
                tempSmSpeed = smSp.getSpeed();
                tempSmDirection = smSp.getDirection();
                smSp.setSpeed(0, 0);
            }
            if (sfFlg) {
                tempSfSpeed = sfSp.getSpeed();
                tempSfDirection = sfSp.getDirection();
                sfSp.setSpeed(0, 0);
            }
            if (sbFlg) {
                tempSbSpeed = sbSp.getSpeed();
                tempSbDirection = sbSp.getDirection();
                sbSp.setSpeed(0, 0);
            }

            // 一時停止時のみ画像保存ボタンが有効になる
            saveButton.addImage(saveOnImage);

            playFlg = false;
            stopFlg = true;
        }
     }

    // リセットボタン
    resetButton = createSprite(buttonWidth * 2 + buttonWidth / 2, height -buttonHeight / 2);
    resetButton.addImage(resetOnImage);
    resetButton.scale = 0.4;
    resetButton.onMousePressed = function() {

        playButton.addImage(playOffImage);
        stopButton.addImage(stopOffImage);
        resetButton.addImage(resetOnImage);

        // スプライトを削除して速度と方向も初期化する
        if (upFlg) {
            upButton.addImage(upOffImage);
            upSp.remove();
            tempUpSpeed = maxSpeed;
            tempUpDirection = -1 * angle[character].up;
            upFlg = false;
        }
        if (gdFlg) {
            gdButton.addImage(gdOffImage);
            gdSp.remove();
            tempGdSpeed = maxSpeed;
            tempGdDirection = -1 * angle[character].ground_down;
            gdFlg = false;
        }
        if (adFlg) {
            adButton.addImage(adOffImage);
            adSp.remove();
            tempAdSpeed = maxSpeed;
            tempAdDirection = -1 * angle[character].air_down;
            adFlg = false;
        }
        if (smFlg) {
            smButton.addImage(smOffImage);
            smSp.remove();
            tempSmSpeed = maxSpeed;
            tempSmDirection = -1 * angle[character].smash;
            smFlg = false;
        }
        if (sfFlg) {
            sfButton.addImage(sfOffImage);
            sfSp.remove();
            tempSfSpeed = maxSpeed;
            tempSfDirection = -1 * angle[character].spike_f;
            sfFlg = false;
        }
        if (sbFlg) {
            sbButton.addImage(sbOffImage);
            sbSp.remove();
            tempSbSpeed = maxSpeed;
            tempSbDirection = -1 * angle[character].spike_b;
            sbFlg = false;
        }

        // 一時停止時のみ画像保存ボタンが有効になる
        saveButton.addImage(saveOffImage);

        // 打球方向もリセットする
        leftButton.addImage(leftOffImage);
        rightButton.addImage(rightOnImage);

        start.x = sumWallThickness + stageWidth / 2;
        start.y = sumWallThickness + stageHeight / 2;

        point.position.x = sumWallThickness + stageWidth / 2;
        point.position.y = sumWallThickness + stageHeight / 2;

        lineLayer.background(backgroundColor);
        
        playFlg = false;
        resetFlg = true;
        stopFlg = true;
        rightFlg = true;
    }
    

    // UPボタン
    upButton = createSprite(buttonWidth * 3 + buttonWidth / 2, height -buttonHeight / 2);
    upButton.addImage(upOffImage);
    upButton.scale = 0.4;
    upButton.onMousePressed = function() {

        // リセット後のみ球種を選択できて、ダブルクリックでスプライトが2重に生成されないようにする
        if (resetFlg && !upFlg) {
            // ボタンの画像を押された場合の画像に切り替える
            upButton.addImage(upOnImage);
            // ボールのスプライトを作成
            upSp = createSprite();
            // 最大スピードを設定しないと、スピードが上がり過ぎる
            upSp.maxSpeed = maxSpeed;
            // スプライトの重さ
            upSp.mass = mass;
            // 反発係数
            upSp.restitution = restitution;
            // 摩擦係数
            upSp.friction = friction;
            // ボールの射出位置
            upSp.position.x = start.x;
            upSp.position.y = start.y;
            // ボールの当たり判定
            upSp.setCollider("circle", 0, 0, diameter/2);
            // ボールの描画
            upSp.draw = function() {
                fill(upColor);
                strokeWeight(ballStrokeWeight);
                stroke(ballStrokeColor);
                ellipse(0, 0, diameter);
            }
            // 再生ボタンが押されるまで動かない
            upSp.setSpeed(0, 0);
            // 描画フラグON
            upFlg = true;
            // 軌跡の開始位置
            upStart = {x:start.x, y:start.y};
        }
    }

    // GDボタン
    gdButton = createSprite(buttonWidth * 4 + buttonWidth / 2, height -buttonHeight / 2);
    gdButton.addImage(gdOffImage);
    gdButton.scale = 0.4;
    gdButton.onMousePressed = function() {

        if (resetFlg && !gdFlg) {
            gdButton.addImage(gdOnImage);
            gdSp = createSprite();
            gdSp.maxSpeed = maxSpeed;
            gdSp.mass = mass;
            gdSp.restitution = restitution;
            gdSp.friction = friction;
            gdSp.position.x = start.x;
            gdSp.position.y = start.y;
            gdSp.setCollider("circle", 0, 0, diameter/2);
            gdSp.draw = function() {
                fill(gdColor);
                strokeWeight(ballStrokeWeight);
                stroke(ballStrokeColor);
                ellipse(0, 0, diameter);
            }
            gdSp.setSpeed(0, 0);
            gdFlg = true;
            gdStart = {x:start.x, y:start.y};
        }
    }

    // ADボタン
    adButton = createSprite(buttonWidth * 5 + buttonWidth / 2, height -buttonHeight / 2);
    adButton.addImage(adOffImage);
    adButton.scale = 0.4;
    adButton.onMousePressed = function() {

        if (resetFlg && !adFlg) {
            adButton.addImage(adOnImage);
            adSp = createSprite();
            adSp.maxSpeed = maxSpeed;
            adSp.mass = mass;
            adSp.restitution = restitution;
            adSp.friction = friction;
            adSp.position.x = start.x;
            adSp.position.y = start.y;
            adSp.setCollider("circle", 0, 0, diameter/2);
            adSp.draw = function() {
                fill(adColor);
                strokeWeight(ballStrokeWeight);
                stroke(ballStrokeColor);
                ellipse(0, 0, diameter);
            }
            adSp.setSpeed(0, 0);
            adFlg = true;
            adStart = {x:start.x, y:start.y};
        }
    }

    // SMボタン
    smButton = createSprite(buttonWidth * 6 + buttonWidth / 2, height -buttonHeight / 2);
    smButton.addImage(smOffImage);
    smButton.scale = 0.4;
    smButton.onMousePressed = function() {

        if (resetFlg && !smFlg) {
            smButton.addImage(smOnImage);
            smSp = createSprite();
            smSp.maxSpeed = maxSpeed;
            smSp.mass = mass;
            smSp.restitution = restitution;
            smSp.friction = friction;
            smSp.position.x = start.x;
            smSp.position.y = start.y;
            smSp.setCollider("circle", 0, 0, diameter/2);
            smSp.draw = function() {
                fill(smColor);
                strokeWeight(ballStrokeWeight);
                stroke(ballStrokeColor);
                ellipse(0, 0, diameter);
            }
            smSp.setSpeed(0, 0);
            smFlg = true;
            smStart = {x:start.x, y:start.y};
        }
    }

    // SFボタン
    sfButton = createSprite(buttonWidth * 7 + buttonWidth / 2, height -buttonHeight / 2);
    sfButton.addImage(sfOffImage);
    sfButton.scale = 0.4;
    sfButton.onMousePressed = function() {

        if (resetFlg && !sfFlg) {
            sfButton.addImage(sfOnImage);
            sfSp = createSprite();
            sfSp.maxSpeed = maxSpeed;
            sfSp.mass = mass;
            sfSp.restitution = restitution;
            sfSp.friction = friction;
            sfSp.position.x = start.x;
            sfSp.position.y = start.y;
            sfSp.setCollider("circle", 0, 0, diameter/2);
            sfSp.draw = function() {
                fill(sfColor);
                strokeWeight(ballStrokeWeight);
                stroke(ballStrokeColor);
                ellipse(0, 0, diameter);
            }
            sfSp.setSpeed(0, 0);
            sfFlg = true;
            sfStart = {x:start.x, y:start.y};
        }
    }

    // SBボタン
    sbButton = createSprite(buttonHeight * 8 + buttonHeight / 2, height -buttonHeight / 2);
    sbButton.addImage(sbOffImage);
    sbButton.scale = 0.4;
    sbButton.onMousePressed = function() {

        if (resetFlg && !sbFlg) {
            sbButton.addImage(sbOnImage);
            sbSp = createSprite();
            sbSp.maxSpeed = maxSpeed;
            sbSp.mass = mass;
            sbSp.restitution = restitution;
            sbSp.friction = friction;
            sbSp.position.x = start.x;
            sbSp.position.y = start.y;
            sbSp.setCollider("circle", 0, 0, diameter/2);
            sbSp.draw = function() {
                fill(sbColor);
                strokeWeight(ballStrokeWeight);
                stroke(ballStrokeColor);
                ellipse(0, 0, diameter);
            }
            sbSp.setSpeed(0, 0);
            sbFlg = true;
            sbStart = {x:start.x, y:start.y};
        }
    }

    // 右打球ボタン
    rightButton = createSprite(width - buttonWidth / 2, height -buttonHeight / 2);
    rightButton.addImage(rightOnImage);
    rightButton.scale = 0.4;
    rightButton.onMousePressed = function() {
        // リセット後で球種を選択していない場合のみ打球方向を変更できる
        if (resetFlg && !rightFlg && !upFlg && !gdFlg && !adFlg && !smFlg && !sfFlg && !sbFlg) {
            leftButton.addImage(leftOffImage);
            rightButton.addImage(rightOnImage);

            tempUpDirection = -1 * angle[character].up;
            tempGdDirection = -1 * angle[character].ground_down;
            tempAdDirection = -1 * angle[character].air_down;
            tempSmDirection = -1 * angle[character].smash;
            tempSfDirection = -1 * angle[character].spike_f;
            tempSbDirection = -1 * angle[character].spike_b;
            
            rightFlg = true;
        }
    }

    // 左打球ボタン
    leftButton = createSprite(width - (buttonWidth + buttonWidth / 2), height -buttonHeight / 2);
    leftButton.addImage(leftOffImage);
    leftButton.scale = 0.4;
    leftButton.onMousePressed = function() {
        // リセット後で球種を選択していない場合のみ打球方向を変更できる
        if (resetFlg && rightFlg && !upFlg && !gdFlg && !adFlg && !smFlg && !sfFlg && !sbFlg) {
            leftButton.addImage(leftOnImage);
            rightButton.addImage(rightOffImage);
            
            if (angle[character].up > 0) {
                tempUpDirection = -1 * (180 - angle[character].up);
            } else {
                tempUpDirection = -1 * (-180 - angle[character].up);
            }

            if (angle[character].ground_down > 0) {
                tempGdDirection = -1 * (180 - angle[character].ground_down);
            } else {
                tempGdDirection = -1 * (-180 - angle[character].ground_down);
            }

            if (angle[character].air_down > 0) {
                tempAdDirection = -1 * (180 - angle[character].air_down);
            } else {
                tempAdDirection = -1 * (-180 - angle[character].air_down);
            }

            if (angle[character].smash > 0) {
                tempSmDirection = -1 * (180 - angle[character].smash);
            } else {
                tempSmDirection = -1 * (-180 - angle[character].smash);
            }

            if (angle[character].spike_f > 0) {
                tempSfDirection = -1 * (180 - angle[character].spike_f);
            } else {
                tempSfDirection = -1 * (-180 - angle[character].spike_f);
            }

            if (angle[character].spike_b > 0) {
                tempSbDirection = -1 * (180 - angle[character].spike_b);
            } else {
                tempSbDirection = -1 * (-180 - angle[character].spike_b);
            }

            rightFlg = false;
        }
    }

    // 画像保存ボタン
    saveButton = createSprite(width - (buttonWidth * 3 + buttonWidth / 2), height -buttonHeight / 2);
    saveButton.addImage(saveOffImage);
    saveButton.scale = 0.4;
    saveButton.onMousePressed = function() {
        // 一時停止時のみ保存可能
        if (!playFlg && stopFlg && !resetFlg) {
            var fileNameChara = "from_" + character + "_to_" + hurtboxChara + "_";
            var fileNameDirection;
            if (rightFlg) {
                fileNameDirection = "right_";
            } else {
                fileNameDirection = "left_";
            }

            saveCanvas(fileNameChara + fileNameDirection, "jpg");
        }
    }
}

function draw() {

    // リセット後で球種を選択していない場合のみキャラクターを変更できる
    if (resetFlg && pointDraggedSprite === null && !upFlg && !gdFlg && !adFlg && !smFlg && !sfFlg && !sbFlg) {
        $("#character").attr("disabled", false);
    } else {
        $("#character").attr("disabled", true);
    }

    // キャンバス背景色
    background(backgroundColor);

    // 軌道用キャンバスを描画する
    image(lineLayer, 0, 0);

    // スプリットライン用キャンバスを描画する
    image(splitLineLayer, 0, 0);

    // スプリットラインの描画
    splitLineLayer.strokeWeight(splitLineStrokeWeight);
    splitLineLayer.stroke(splitLineColor);
    // 縦ライン
    splitLineLayer.line(sumWallThickness + stageWidth/12, sumWallThickness, sumWallThickness + stageWidth/12, sumWallThickness + stageHeight);
    splitLineLayer.line(sumWallThickness + stageWidth/6, sumWallThickness, sumWallThickness + stageWidth/6, sumWallThickness + stageHeight);
    splitLineLayer.line(sumWallThickness + stageWidth/4, sumWallThickness, sumWallThickness + stageWidth/4, sumWallThickness + stageHeight);
    splitLineLayer.line(sumWallThickness + stageWidth/3, sumWallThickness, sumWallThickness + stageWidth/3, sumWallThickness + stageHeight);
    splitLineLayer.line(sumWallThickness + stageWidth * 5/12, sumWallThickness, sumWallThickness + stageWidth * 5/12, sumWallThickness + stageHeight);
    splitLineLayer.line(sumWallThickness + stageWidth * 7/12, sumWallThickness, sumWallThickness + stageWidth * 7/12, sumWallThickness + stageHeight);
    splitLineLayer.line(sumWallThickness + stageWidth * 2/3, sumWallThickness, sumWallThickness + stageWidth * 2/3, sumWallThickness + stageHeight);
    splitLineLayer.line(sumWallThickness + stageWidth * 3/4, sumWallThickness, sumWallThickness + stageWidth * 3/4, sumWallThickness + stageHeight);
    splitLineLayer.line(sumWallThickness + stageWidth * 5/6, sumWallThickness, sumWallThickness + stageWidth * 5/6, sumWallThickness + stageHeight);
    splitLineLayer.line(sumWallThickness + stageWidth * 11/12, sumWallThickness, sumWallThickness + stageWidth * 11/12, sumWallThickness + stageHeight);
    // 横ライン
    splitLineLayer.line(sumWallThickness, sumWallThickness + stageHeight/8, sumWallThickness + stageWidth, sumWallThickness + stageHeight/8);
    splitLineLayer.line(sumWallThickness, sumWallThickness + stageHeight/4, sumWallThickness + stageWidth, sumWallThickness + stageHeight/4);
    splitLineLayer.line(sumWallThickness, sumWallThickness + stageHeight * 3/8, sumWallThickness + stageWidth, sumWallThickness + stageHeight * 3/8);
    splitLineLayer.line(sumWallThickness, sumWallThickness + stageHeight * 5/8, sumWallThickness + stageWidth, sumWallThickness + stageHeight * 5/8);
    splitLineLayer.line(sumWallThickness, sumWallThickness + stageHeight * 3/4, sumWallThickness + stageWidth, sumWallThickness + stageHeight * 3/4);
    splitLineLayer.line(sumWallThickness, sumWallThickness + stageHeight * 7/8, sumWallThickness + stageWidth, sumWallThickness + stageHeight * 7/8);

    // 中心線の描画
    splitLineLayer.strokeWeight(centerLineStrokeWeight);
    splitLineLayer.stroke(centerLineColor);
    // 縦中心線
    splitLineLayer.line(sumWallThickness + stageWidth/2, sumWallThickness, sumWallThickness + stageWidth/2, sumWallThickness + stageHeight);
    // 横中心線
    splitLineLayer.line(sumWallThickness, sumWallThickness + stageHeight/2, sumWallThickness + stageWidth, sumWallThickness + stageHeight/2);

    update();
    drawSprites();

    // 軌跡の太さ
    lineLayer.strokeWeight(lineWeight);

    if (resetFlg === false) {
        if (upFlg) {
            // 軌跡の色
            lineLayer.stroke(upLineColor);
            lineLayer.line(upStart.x, upStart.y, upSp.newPosition.x, upSp.newPosition.y);
            upStart.x = upSp.newPosition.x;
            upStart.y = upSp.newPosition.y;
        }
        if (gdFlg) {
            lineLayer.stroke(gdLineColor);
            lineLayer.line(gdStart.x, gdStart.y, gdSp.newPosition.x, gdSp.newPosition.y);
            gdStart.x = gdSp.newPosition.x;
            gdStart.y = gdSp.newPosition.y;
        }
        if (adFlg) {
            lineLayer.stroke(adLineColor);
            lineLayer.line(adStart.x, adStart.y, adSp.newPosition.x, adSp.newPosition.y);
            adStart.x = adSp.newPosition.x;
            adStart.y = adSp.newPosition.y;
        }
        if (smFlg) {
            lineLayer.stroke(smLineColor);
            lineLayer.line(smStart.x, smStart.y, smSp.newPosition.x, smSp.newPosition.y);
            smStart.x = smSp.newPosition.x;
            smStart.y = smSp.newPosition.y;
        }
        if (sfFlg) {
            lineLayer.stroke(sfLineColor);
            lineLayer.line(sfStart.x, sfStart.y, sfSp.newPosition.x, sfSp.newPosition.y);
            sfStart.x = sfSp.newPosition.x;
            sfStart.y = sfSp.newPosition.y;
        }
        if (sbFlg) {
            lineLayer.stroke(sbLineColor);
            lineLayer.line(sbStart.x, sbStart.y, sbSp.newPosition.x, sbSp.newPosition.y);
            sbStart.x = sbSp.newPosition.x;
            sbStart.y = sbSp.newPosition.y;
        }
    }
}

function update() {

    // nullでないpointDraggedSpriteをドラッグ
    if (resetFlg && pointDraggedSprite != null
        && (0 + sumWallThickness) <= mouseX && mouseX <= (width - wallTthickness - dummyWallTthickness)
        && (0 + sumWallThickness) <= mouseY && mouseY <= (height - buttonHeight - wallTthickness - dummyWallTthickness)) {
        pointDraggedSprite.position.x = mouseX + pointOffsetX;
        pointDraggedSprite.position.y = mouseY + pointOffsetY;
    }

    // nullでないhurtboxDraggedSpriteをドラッグ
    if (hurtboxDraggedSprite != null
        && (0 + sumWallThickness) <= mouseX && mouseX <= (width - wallTthickness - dummyWallTthickness)
        && (0 + sumWallThickness) <= mouseY && mouseY <= (height - buttonHeight - wallTthickness - dummyWallTthickness)) {
        hurtboxDraggedSprite.position.x = mouseX + hurtboxOffsetX;
        hurtboxDraggedSprite.position.y = mouseY + hurtboxOffsetY;
    }

    // ボールと四方の壁との跳ね返り
    if (upFlg) {
        upSp.bounce(topWall);
        upSp.bounce(bottomWall);
        upSp.bounce(leftWall);
        upSp.bounce(rightWall);
    }
    if (gdFlg) {
        gdSp.bounce(topWall);
        gdSp.bounce(bottomWall);
        gdSp.bounce(leftWall);
        gdSp.bounce(rightWall);
    }
    if (adFlg) {
        adSp.bounce(topWall);
        adSp.bounce(bottomWall);
        adSp.bounce(leftWall);
        adSp.bounce(rightWall);
    }
    if (smFlg) {
        smSp.bounce(topWall);
        smSp.bounce(bottomWall);
        smSp.bounce(leftWall);
        smSp.bounce(rightWall);
    }
    if (sfFlg) {
        sfSp.bounce(topWall);
        sfSp.bounce(bottomWall);
        sfSp.bounce(leftWall);
        sfSp.bounce(rightWall);
    }
    if (sbFlg) {
        sbSp.bounce(topWall);
        sbSp.bounce(bottomWall);
        sbSp.bounce(leftWall);
        sbSp.bounce(rightWall);
    }
}

$(function() {
    //セレクトボックスが切り替わったら
    $('#character').change(function() {
   
        // 選択されたキャラクターから角度情報を代入する
        character = $(this).val();
        tempUpDirection = -1 * angle[character].up;
        tempGdDirection = -1 * angle[character].ground_down;
        tempAdDirection = -1 * angle[character].air_down;
        tempSmDirection = -1 * angle[character].smash;
        tempSfDirection = -1 * angle[character].spike_f;
        tempSbDirection = -1 * angle[character].spike_b;
    });

    $('#hurtbox').change(function() {
   
        // 選択されたキャラクターからHurtbox情報を代入する
        hurtboxChara = $(this).val();
        // Hurtboxサイズを変更
        hurtboxSp.width = hurtbox[hurtboxChara].width;
        hurtboxSp.height = hurtbox[hurtboxChara].height;
    });
});
