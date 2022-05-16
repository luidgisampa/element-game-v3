//personagem.
var meninoBase;

//persongaem imagem
var per_imagemTERRA;
var per_imagemFOGO;
var per_imagemAGUA;
var per_imagemGELO;
var per_imagemAR;
var per_imagemCORRUP;

//projeteis personagem.
var terra, terraImagem;
var fogo, powerUpFogo, powerF, fogoImagem;
var agua, powerUpAgua, powerA, aguaImagem;
var gelo, powerUpGelo, powerG, geloImagem;
var ar, powerUpAR, powerAr, arImagem;
var corrup, powerUpCr, powerC, crImagem;

//monstro.
var monstro, monstroImagem;
var monstro2, monstroImagem2;
var monstro3, monstroImagem3;

//gurpo do monstro.
var monsterGroup2, monsterGroup3;

//group de ataque.
var fogoGroup, terraGroup, aguaGroup, geloGroup, arGroup, corrupGroup;

//group de poder.
var groupPowerUpFogo, groupPowerUpAgua, groupPowerUpGelo, groupPowerUpAr, groupPowerUpCr;

//var alciliares.
var lifePlayer = 15;
var lifeMonster = 200;
var bloco_de_Movimentação;
var edges;
var playing, gameOver;

//inicial de powerStatus
var powerStatus = "terra";

//cenario.
var explosao1, explosao2, imagem_explosao;
var chão_verde, chão_verdeImagem;
var chão_invisivel;
var plataformaFlutuante, animaçãoPlataforma;
var cenario, cenarioImagem;
var mato, matoImagem;

function preload() {
  //personagem.
  per_imagemTERRA = loadAnimation("menino telepata terra1.png","menino telepata terra2.png","menino telepata terra3.png","menino telepata terra4.png","menino telepata terra5.png");
  per_imagemFOGO = loadAnimation("menino telepata fogo1.png","menino telepata fogo2.png","menino telepata fogo3.png");
  per_imagemAGUA = loadAnimation("menino telepata agua1.png","menino telepata agua2.png","menino telepata agua3.png","menino telepata agua4.png","menino telepata agua5.png",);
  per_imagemGELO = loadAnimation("menino telepata gelo1.png","menino telepata gelo2.png","menino telepata gelo3.png","menino telepata gelo4.png","menino telepata gelo5.png","menino telepata gelo6.png","menino telepata gelo7.png","menino telepata gelo8.png","menino telepata gelo9.png","menino telepata gelo10.png","menino telepata gelo11.png","menino telepata gelo12.png","menino telepata gelo13.png","menino telepata gelo14.png");
  per_imagemAR = loadAnimation("menino telepata ar1.png","menino telepata ar2.png","menino telepata ar3.png","menino telepata ar4.png","menino telepata ar5.png");
  per_imagemCORRUP = loadImage("menino telepata corrompido.png");


  //projeteis
  terraImagem = loadImage("pedra.png");
  fogoImagem = loadAnimation("fogo (1).png","fogo (2).png","fogo (3).png");
  aguaImagem = loadAnimation("agua1.png","agua2.png","agua3.png","agua4.png");
  geloImagem = loadImage("gelo.png");
  arImagem = loadAnimation("ar1.png","ar2.png","ar3.png","ar4.png","ar5.png","ar6.png","ar7.png","ar8.png","ar9.png","ar10.png","ar11.png","ar12.png",);
  crImagem = loadImage("corrupção.png");

  //power ups
  powerA = loadImage("powerUpagua.png");
  powerF = loadImage("powerUpfogo.png");
  powerG = loadImage("powerUpGelo.png");
  powerAr = loadImage("powerUpar.png");
  powerC = loadImage("powerUpCorrupção.png");

  //cenario.
  animaçãoPlataforma = loadAnimation ("chão flutuante1.png","chão flutuante3.png","chão flutuante4.png","chão flutuante5.png");
  cenarioImagem = loadImage("cenario .png");
  matoImagem = loadImage("mato para esconder o bug1.png");
  chão_verdeImagem = loadImage("bloco verde.png");
  imagem_explosao = loadImage("explosão (2).png");

  //montros
  monstroImagem = loadImage("monster.png");
  monstroImagem2 = loadImage("monster 2.png");
  monstroImagem3 = loadImage("monster3.png");
}

function setup() {
  //tamanho do background
  createCanvas(1325,600);

  //criando cenario.
  cenario = createSprite(650, 300);
  cenario.addAnimation("cenario", cenarioImagem);
  cenario.scale = 1.0;

  //criando a plataforma.
  plataformaFlutuante = createSprite(250,300);
  plataformaFlutuante.addAnimation("flutuando", animaçãoPlataforma);
  plataformaFlutuante.scale = 1.5;

  //criando o personagem.
  meninoBase = createSprite(255, 245);
  meninoBase.addAnimation("terra", per_imagemTERRA);
  meninoBase.addAnimation("fogo", per_imagemFOGO);
  meninoBase.addAnimation("agua_per", per_imagemAGUA);
  meninoBase.addAnimation("gelo", per_imagemGELO);
  meninoBase.addImage("corrupt", per_imagemCORRUP);
  meninoBase.addAnimation("ar", per_imagemAR);
  meninoBase.scale = 1.0;

  //resolvendo o bug do bug
  chão_verde = createSprite(255,295, 50, 10);
  chão_verde.addImage("verde", chão_verdeImagem);
  chão_verde.scale = 1.5

  //criando o mato para esconder bugs
  mato = createSprite(255, 250);
  mato.addImage("mato", matoImagem);
  mato.scale = 1.4;

  //criando o monstro
  monstro = createSprite(1250, 300);
  monstro.addImage("monstro", monstroImagem);

  bloco_de_Movimentação = createSprite(100,100);
  bloco_de_Movimentação.visible = false;
  chão_invisivel = createSprite(100,575)
  chão_invisivel.visible = false;

   //explosão
   explosao1 = createSprite(250,300);
   explosao2 = createSprite(250,300);
   explosao1.addImage("explosão", imagem_explosao);
   explosao2.addImage("explosão2", imagem_explosao);
   explosao1.scale = 0.5;
   explosao2.scale = 0.5;
   explosao1.visible = false;
   explosao2.visible = false;

  //edges
  edges = createEdgeSprites();

  //groups
  terraGroup = new Group();
  fogoGroup = new Group();
  aguaGroup = new Group();
  geloGroup = new Group();
  arGroup = new Group();
  corrupGroup = new Group();

  groupPowerUpFogo = new Group();
  groupPowerUpAgua = new Group();
  groupPowerUpGelo = new Group();
  groupPowerUpAr = new Group();
  groupPowerUpCr = new Group();

  monsterGroup2 = new Group();
  monsterGroup3 = new Group();
}

function draw() {
  
  if (keyDown("W")&& meninoBase.y >= 50 && plataformaFlutuante.y >= 100) {
    meninoBase.y += -10;
    plataformaFlutuante.y += -10;
    mato.y += -10;
    chão_verde.y += -10;
  }

  if (keyDown("S")&& meninoBase.y <= 600 && plataformaFlutuante.y <= 500) {
    meninoBase.y += 10;
    plataformaFlutuante.y += 10;
    mato.y += 10;
    chão_verde.y +=10;
  }

  if(keyDown("E")) {
      createPower();
  }

  if (groupPowerUpFogo.isTouching(meninoBase)){
    powerStatus = "fogo";
    groupPowerUpFogo.destroyEach();
    meninoBase.changeAnimation("fogo");

    setTimeout (() => {
      meninoBase.changeAnimation("terra");
      powerStatus = "terra";
    
     }, 20000);
  }

  if (groupPowerUpAgua.isTouching(meninoBase)){
    powerStatus = "agua";
    groupPowerUpAgua.destroyEach();
    meninoBase.changeAnimation("agua_per");

    setTimeout (() => {
      meninoBase.changeAnimation("terra");
      powerStatus = "terra";
    
     }, 20000);
  }

  if (groupPowerUpGelo.isTouching(meninoBase)){
    powerStatus = "gelo";
    groupPowerUpGelo.destroyEach();
    meninoBase.changeAnimation("gelo");

    setTimeout (() => {
      meninoBase.changeAnimation("terra");
      powerStatus = "terra";
    
     }, 20000);
  }

  if (groupPowerUpAr.isTouching(meninoBase)){
    powerStatus = "ar";
    groupPowerUpAr.destroyEach();
    meninoBase.changeAnimation("ar");

    setTimeout (() => {
      meninoBase.changeAnimation("terra");
      powerStatus = "terra";
    
     }, 20000);
  }

  if (groupPowerUpCr.isTouching(meninoBase)){
    powerStatus = "corrupt";
    groupPowerUpCr.destroyEach();
    meninoBase.changeImage("corrupt");

    setTimeout (() => {
      meninoBase.changeAnimation("terra");
      powerStatus = "terra";
    
     }, 20000);
  }

  //se o ataque do monstro tocar no menino
  if(monsterGroup2.isTouching(meninoBase)){
    monsterGroup2.destroyEach();
    explosao1.visible = true;
    setTimeout (() =>{
      explosao1.visible = false;
    }, 500);
  }

  if(monsterGroup3.isTouching(meninoBase)){
    monsterGroup3.destroyEach();
    explosao1.visible = true;
    setTimeout (() =>{
      explosao1.visible = false;
    }, 500);
  }

  //se o ataque do menino tocar no monstro
  if(terraGroup.isTouching(monstro)){
    terraGroup.destroyEach();
    explosao2.visible = true;
    setTimeout (() =>{
      explosao2.visible = false;
    }, 500);
  }
  if(fogoGroup.isTouching(monstro)){
    fogoGroup.destroyEach();
    explosao2.visible = true;
    setTimeout (() =>{
      explosao2.visible = false;
    }, 500);
  }
  if(corrupGroup.isTouching(monstro)){
    corrupGroup.destroyEach();
    explosao2.visible = true;
    setTimeout (() =>{
      explosao2.visible = false;
    }, 500);
  }
  if(geloGroup.isTouching(monstro)){
    geloGroup.destroyEach();
    explosao2.visible = true;
    setTimeout (() =>{
      explosao2.visible = false;
    }, 500);
  }
  if(arGroup.isTouching(monstro)){
    arGroup.destroyEach();
    explosao2.visible = true;
    setTimeout (() =>{
      explosao2.visible = false;
    }, 500);
  }

  // adicionais
  bloco_de_Movimentação.bounceOff(chão_invisivel);
  bloco_de_Movimentação.velocityY += 1;
  bloco_de_Movimentação.collide(edges);

  // consertando o y
  meninoBase.y = plataformaFlutuante.y -50;
  monstro.y = bloco_de_Movimentação.y;

  explosao1.x = meninoBase.x;
  explosao1.y = meninoBase.y;

  explosao2.x = monstro.x;
  explosao2.y = monstro.y;

  console.log(powerStatus);

  //função de powerup
  createPowerUpFogo();
  createPowerUpAgua();
  createPowerUpgelo();
  createPowerUpcorrup();
  createPowerUpar();

  //função de ataque do monstro
  monsterAttack();
  monsterAttack2();

  drawSprites();
}

function createPower() {
      if(frameCount % 25 == 0) {
      // se power status for terra ele criara o poder de terra
      if (powerStatus === "terra") {
      terra = createSprite(295, 190);
      terra.addImage("terra_attack", terraImagem);

      terra.velocityX = 10;

      terra.x = meninoBase.x +30;
      terra.y = meninoBase.y -30;

      terra.lifeTime = 2000;
      
    
      terraGroup.add(terra);
      }
      // se power status for fogo ele criara o poder de fogo
      if (powerStatus === "fogo") {
        fogo = createSprite(295, 190);
        fogo.addAnimation("fogo_attack", fogoImagem);
        fogo.scale = 0.2;

        fogo.velocityX = 15;

        fogo.x = meninoBase.x +30;
        fogo.y = meninoBase.y -30;

        fogo.lifeTime = 2000;
        

        fogoGroup.add(fogo);
      }
      // se power status for agua ele criara o poder de agua
      if (powerStatus === "agua") {
        agua = createSprite(295, 190);
        agua.addAnimation("agua_attack", aguaImagem);
        agua.scale = 1.0;

        agua.velocityX = 10;

        agua.x = meninoBase.x +30;
        agua.y = meninoBase.y -30;

        agua.lifeTime = 2000;
        

        aguaGroup.add(agua);
      }
      // se power status for gelo ele criara o poder de gelo
      if (powerStatus === "gelo") {
        gelo = createSprite(295, 190);
        gelo.addAnimation("gelo_attack", geloImagem);
        gelo.scale = 1.5;


        gelo.velocityX = 5;

        gelo.x = meninoBase.x +30;
        gelo.y = meninoBase.y -30;

        gelo.lifeTime = 2000;
        

        geloGroup.add(gelo);
      }

      if (powerStatus === "ar") {
        ar = createSprite(295, 190);
        ar.addAnimation("ar_attack", arImagem);
        ar.scale = 1.5;


        ar.velocityX = 5;

        ar.x = meninoBase.x +30;
        ar.y = meninoBase.y -30;

        ar.lifeTime = 2000;
        

        arGroup.add(ar);
      }

      if (powerStatus === "corrupt") {
        corrup = createSprite(295, 190);
        corrup.addAnimation("corrupt_attack", crImagem);
        corrup.scale = 1.5;
        
        corrup.velocityX = 7;

        corrup.x = meninoBase.x +30;
        corrup.y = meninoBase.y -30;

        corrup.lifeTime = 2000;
      
        corrupGroup.add(corrup);
      }
   }
}

function createPowerUpFogo() {
  setTimeout(() => {
    if (frameCount % 300 == 0) {
    powerUpFogo = createSprite(1500,Math.round(random(100, 600)), 10, 10);
    powerUpFogo.addImage("fogo_up", powerF);

    powerUpFogo.velocityX = -7;
    powerUpFogo.lifeTime = 2000;
    powerUpFogo.scale = 1.5;

    groupPowerUpFogo.add(powerUpFogo);
    }
  }, 30000);
}

function createPowerUpAgua() {
  setTimeout(() => {
    if (frameCount % 450 == 0) {
    powerUpAgua = createSprite(1500,Math.round(random(100, 600)), 10, 10);
    powerUpAgua.addImage("agua_up", powerA);

    powerUpAgua.velocityX = -7;
    powerUpAgua.lifeTime = 2000;
    powerUpAgua.scale = 1.5;

    groupPowerUpAgua.add(powerUpAgua);
    }
  }, 40000);
}

function createPowerUpgelo() {
  setTimeout(() => {
    if (frameCount % 450 == 0) {
    powerUpGelo = createSprite(1500,Math.round(random(100, 600)), 10, 10);
    powerUpGelo.addImage("gelo_up", powerG);

    powerUpGelo.velocityX = -7;
    powerUpGelo.lifeTime = 2000;
    powerUpGelo.scale = 1.5;

    groupPowerUpGelo.add(powerUpGelo);
    }
  }, 50000);
}

function createPowerUpar() {
  setTimeout(() => {
    if (frameCount % 350 == 0) {
    powerUpAR = createSprite(1500,Math.round(random(100, 600)), 10, 10);
    powerUpAR.addImage("ar_up", powerAr);

    powerUpAR.velocityX = -10;
    powerUpAR.lifeTime = 2000;
    powerUpAR.scale = 1.5;

    groupPowerUpAr.add(powerUpAR);
    }
  }, 30000);
}

function createPowerUpcorrup() {
  setTimeout(() => {
    if (frameCount % 600 == 0) {
    powerUpCr = createSprite(1500,Math.round(random(100, 600)), 10, 10);
    powerUpCr.addImage("corrup_up", powerC);

    powerUpCr.velocityX = -7;
    powerUpCr.lifeTime = 2000;
    powerUpCr.scale = 1.5;

    groupPowerUpCr.add(powerUpCr);
    }
  }, 60000);
}

function monsterAttack() {
  setTimeout(() => {
    if (frameCount % 100 == 0) {
    monstro2 = createSprite(300,300);
    monstro2.addImage("monster2", monstroImagem2);
    monstro2.scale = 1.5;

    monstro2.velocityX = -10;

    monstro2.x = monstro.x +30;
    monstro2.y = monstro.y -30;

    monstro2.lifeTime = 2000;

    monsterGroup2.add(monstro2);
    }
  }, 2500);
}

function monsterAttack2() {
  setTimeout(() => {
    if (frameCount % 150 == 0) {
    monstro3 = createSprite(300,300);
    monstro3.addImage("monster3", monstroImagem3);
    monstro3.scale = 1.5;

    monstro3.velocityX = -7;

    monstro3.x = monstro.x + 5;
    monstro3.y = monstro.y - 5;

    monstro3.lifeTime = 2000;

    monsterGroup3.add(monstro3);
    }
  }, 1500);
}