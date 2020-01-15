  var i=0,text;
  text = "Chúc mọi người năm mới An khang thịnh vượng, tài lộc đầy nhà, con cháu sum vầy, một năm bình an và sung túc."

  function typing() {
    if(i<text.length){
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing,90);
    }
  }
  typing();