const NativeUI = require('NativeUI');
const Textures = require('Textures');
const Patches = require('Patches');
const Diagnostics = require('Diagnostics');
const TouchGestures = require('TouchGestures');

Promise.all([
  Textures.findFirst('1'),
  Textures.findFirst('2'),
  Textures.findFirst('3'),
  Textures.findFirst('4'),
  Textures.findFirst('5'),
  Textures.findFirst('6'),
  Textures.findFirst('7'),
  Textures.findFirst('8'),
  Textures.findFirst('9'),
  Textures.findFirst('10'),
  Textures.findFirst('11'),
  Textures.findFirst('12'),
]).then(onReady);


function onReady(assets) {

  const texture0 = assets[0];
  const texture1 = assets[1];
  const texture2 = assets[2];
  const texture3 = assets[3];
  const texture4 = assets[4];
  const texture5 = assets[5];
  const texture6 = assets[6];
  const texture7 = assets[7];
  const texture8 = assets[8];
  const texture9 = assets[9];
  const texture10 = assets[10];
  const texture11 = assets[11];

  const picker = NativeUI.picker;

  const index = 0;
  const selection = 0;
  var t = true;
  var end;

  const configuration = {

    selectedIndex: index,

    items: [
      { image_texture: texture0 },
      { image_texture: texture1 },
      { image_texture: texture2 },
      { image_texture: texture3 },
      { image_texture: texture4 },
      { image_texture: texture5 },
      { image_texture: texture6 },
      { image_texture: texture7 },
      { image_texture: texture8 },
      { image_texture: texture9 },
      { image_texture: texture10 },
      { image_texture: texture11 }
    ]

  };

  picker.configure(configuration);
  picker.visible = true;

  picker.selectedIndex.monitor().subscribe(function (index) {

    Patches.inputs.setScalar('selection', index.newValue);
    Patches.inputs.setBoolean('Value', t);
  });


  TouchGestures.onTap().subscribe(function (gesture) {
    Patches.inputs.setBoolean('Value', false);
      
    var now = new Date().getTime();
    var timesince = now - end;
    
    if ((timesince < 200) && (timesince > 0)) {

      
      Diagnostics.log('tap gesture detected double tap');
           picker.visible = false;

    } else {

      picker.visible = true;
    }

    end = new Date().getTime();
  });
}

