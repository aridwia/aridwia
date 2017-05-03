var karakter1 = {nama:'ari',
                 senjata:'api',
                 nyawa:100
                 };

var karakter2 = { nama : 'dwi',
                  senjata : 'air',
                  nyawa : 80
                 };

var monster1 = { nama : 'nagaApi',
                 elemen : 'api',
                  nyawa : 100};

var monster2 = { nama : 'nagaAir',
                 elemen : 'air',
                 nyawa : 100};

var Karakters = [karakter1,karakter2];
var Monsters = [monster1,monster2];

function Status (){
  
  console.log('-------------------Nama Pemain----------------')
  for( i=0; i < Karakters.length;  i++)
  {
    console.log ('Nama: ' + Karakters[i].nama);
    console.log ('Elemen senjata: '+ Karakters[i].senjata);
    console.log ('Nyawa: '+ Karakters[i].nyawa);
  }
}

function monster (){
  console.log('-------------Monster yang muncul--------------')
  for(i=0;i<Monsters.length;i++){
    console.log ('Nama: ' + Monsters[i].nama);
    console.log ('Elemen monster: '+ Monsters[i].elemen);
  }
}
function Serang (Karakters,Monsters){
  console.log('------------Mulai menyerang ------------------')
    if (Karakters.senjata =='api' && Monsters.elemen =='air'){
      console.log('serangan kamu kepada monster elemen air adalah '+ 5)
      console.log('Nyawa monster sisa '+ (Monsters.nyawa-5))
    }
    else{
      console.log('serangan kamu kepada monster elemen api adalah '+ 10)
      console.log('Nyawa monster sisa '+ (Monsters.nyawa-10))
    }
}



Status();
monster();
Serang(karakter1,monster2);


