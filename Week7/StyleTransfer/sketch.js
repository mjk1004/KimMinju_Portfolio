/* DN1010 Experimental Interaction, Ashley Hi 2026
 * Week 7 - Style Transfer
 * Style Transfer Image
 * This uses a pre-trained model of The Great Wave off Kanagawa and Udnie (Young American Girl, The Dance)
 */

let inputImg;
let statusMsg;
let transferBtn;
let style1;
let style2;

function setup() {
  noCanvas();
  statusMsg = select("#statusMsg");
  inputImg = select("#inputImg");
  transferBtn = select("#transferBtn");
  transferBtn.mousePressed(transferImages);

  style1 = ml5.styleTransfer("models/wave", modelLoaded);
  style2 = ml5.styleTransfer("models/udnie", modelLoaded);
}

function modelLoaded() {
  
  if (style1.ready && style2.ready) {
    statusMsg.html("Ready!");
  }
}

function transferImages() {
  statusMsg.html("Applying Style Transfer...!");

  style1.transfer(inputImg, function (err, result) {
    createImg(result.src).parent("styleA");
  });

  style2.transfer(inputImg, function (err, result) {
    createImg(result.src).parent("styleB");
  });

  statusMsg.html("Done!");
}
