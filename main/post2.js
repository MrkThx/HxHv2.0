var bando = document.getElementById("bando");
var drink = document.getElementById("drink");
var other = document.getElementById("other");
var meat = document.getElementById("meat");
var vegetable = document.getElementById("vegetable");
var position1 = document.getElementById("position2_1");
var position2 = document.getElementById("position2_2");
var position3 = document.getElementById("position2_3");
var position4 = document.getElementById("position2_4");
var position5 = document.getElementById("position2_5");
var position6 = document.getElementById("position2_6");
var position7 = document.getElementById("position2_7");
var position8 = document.getElementById("position2_8");
var bando_type = "便當";
var meat_type = "葷食";
var position_type = "力行校區";


bando.addEventListener("click", function(){
    drink.src = "./pic/drink.png";
    other.src = "./pic/other.png";
    this.src = "./pic/bando2.png";
    bando_type = "便當";
})
drink.addEventListener("click", function(){
    bando.src = "./pic/bando.png";
    other.src = "./pic/other.png";
    this.src = "./pic/drink2.png";
    bando_type = "飲料/點心";
})
other.addEventListener("click", function(){
    drink.src = "./pic/drink.png";
    bando.src = "./pic/bando.png";
    this.src = "./pic/other2.png";
    bando_type = "其他";
})

meat.addEventListener("click", function(){
    this.src = "./pic/meat2.png";
    vegetable.src = "./pic/vegetable.png";
    meat_type = "葷食";
})
vegetable.addEventListener("click", function(){
    this.src = "./pic/vegetable2.png";
    meat.src = "./pic/meat.png";
    meat_type = "素食";
})

position1.addEventListener("click", function(){
    this.style.backgroundColor = "#234F2D";
    this.style.color = "#F0F0F0";
    position2.style.backgroundColor = "#F0F0F0";
    position2.style.color = "#234F2D";
    position3.style.backgroundColor = "#F0F0F0";
    position3.style.color = "#234F2D";
    position4.style.backgroundColor = "#F0F0F0";
    position4.style.color = "#234F2D";
    position5.style.backgroundColor = "#F0F0F0";
    position5.style.color = "#234F2D";
    position6.style.backgroundColor = "#F0F0F0";
    position6.style.color = "#234F2D";
    position7.style.backgroundColor = "#F0F0F0";
    position7.style.color = "#234F2D";
    position8.style.backgroundColor = "#F0F0F0";
    position8.style.color = "#234F2D";
    position_type = "力行校區";
})
position2.addEventListener("click", function(){
    this.style.backgroundColor = "#234F2D";
    this.style.color = "#F0F0F0";
    position1.style.backgroundColor = "#F0F0F0";
    position1.style.color = "#234F2D";
    position3.style.backgroundColor = "#F0F0F0";
    position3.style.color = "#234F2D";
    position4.style.backgroundColor = "#F0F0F0";
    position4.style.color = "#234F2D";
    position5.style.backgroundColor = "#F0F0F0";
    position5.style.color = "#234F2D";
    position6.style.backgroundColor = "#F0F0F0";
    position6.style.color = "#234F2D";
    position7.style.backgroundColor = "#F0F0F0";
    position7.style.color = "#234F2D";
    position8.style.backgroundColor = "#F0F0F0";
    position8.style.color = "#234F2D";
    position_type = "成杏校區";
})
position3.addEventListener("click", function(){
    this.style.backgroundColor = "#234F2D";
    this.style.color = "#F0F0F0";
    position2.style.backgroundColor = "#F0F0F0";
    position2.style.color = "#234F2D";
    position1.style.backgroundColor = "#F0F0F0";
    position1.style.color = "#234F2D";
    position4.style.backgroundColor = "#F0F0F0";
    position4.style.color = "#234F2D";
    position5.style.backgroundColor = "#F0F0F0";
    position5.style.color = "#234F2D";
    position6.style.backgroundColor = "#F0F0F0";
    position6.style.color = "#234F2D";
    position7.style.backgroundColor = "#F0F0F0";
    position7.style.color = "#234F2D";
    position8.style.backgroundColor = "#F0F0F0";
    position8.style.color = "#234F2D";
    position_type = "自強校區";
})
position4.addEventListener("click", function(){
    this.style.backgroundColor = "#234F2D";
    this.style.color = "#F0F0F0";
    position2.style.backgroundColor = "#F0F0F0";
    position2.style.color = "#234F2D";
    position3.style.backgroundColor = "#F0F0F0";
    position3.style.color = "#234F2D";
    position1.style.backgroundColor = "#F0F0F0";
    position1.style.color = "#234F2D";
    position5.style.backgroundColor = "#F0F0F0";
    position5.style.color = "#234F2D";
    position6.style.backgroundColor = "#F0F0F0";
    position6.style.color = "#234F2D";
    position7.style.backgroundColor = "#F0F0F0";
    position7.style.color = "#234F2D";
    position8.style.backgroundColor = "#F0F0F0";
    position8.style.color = "#234F2D";
    position_type = "勝利校區";
})
position5.addEventListener("click", function(){
    this.style.backgroundColor = "#234F2D";
    this.style.color = "#F0F0F0";
    position2.style.backgroundColor = "#F0F0F0";
    position2.style.color = "#234F2D";
    position3.style.backgroundColor = "#F0F0F0";
    position3.style.color = "#234F2D";
    position4.style.backgroundColor = "#F0F0F0";
    position4.style.color = "#234F2D";
    position1.style.backgroundColor = "#F0F0F0";
    position1.style.color = "#234F2D";
    position6.style.backgroundColor = "#F0F0F0";
    position6.style.color = "#234F2D";
    position7.style.backgroundColor = "#F0F0F0";
    position7.style.color = "#234F2D";
    position8.style.backgroundColor = "#F0F0F0";
    position8.style.color = "#234F2D";
    position_type = "光復校區";
})
position6.addEventListener("click", function(){
    this.style.backgroundColor = "#234F2D";
    this.style.color = "#F0F0F0";
    position2.style.backgroundColor = "#F0F0F0";
    position2.style.color = "#234F2D";
    position3.style.backgroundColor = "#F0F0F0";
    position3.style.color = "#234F2D";
    position4.style.backgroundColor = "#F0F0F0";
    position4.style.color = "#234F2D";
    position5.style.backgroundColor = "#F0F0F0";
    position5.style.color = "#234F2D";
    position1.style.backgroundColor = "#F0F0F0";
    position1.style.color = "#234F2D";
    position7.style.backgroundColor = "#F0F0F0";
    position7.style.color = "#234F2D";
    position8.style.backgroundColor = "#F0F0F0";
    position8.style.color = "#234F2D";
    position_type = "敬業校區";
})
position7.addEventListener("click", function(){
    this.style.backgroundColor = "#234F2D";
    this.style.color = "#F0F0F0";
    position2.style.backgroundColor = "#F0F0F0";
    position2.style.color = "#234F2D";
    position3.style.backgroundColor = "#F0F0F0";
    position3.style.color = "#234F2D";
    position4.style.backgroundColor = "#F0F0F0";
    position4.style.color = "#234F2D";
    position5.style.backgroundColor = "#F0F0F0";
    position5.style.color = "#234F2D";
    position6.style.backgroundColor = "#F0F0F0";
    position6.style.color = "#234F2D";
    position1.style.backgroundColor = "#F0F0F0";
    position1.style.color = "#234F2D";
    position8.style.backgroundColor = "#F0F0F0";
    position8.style.color = "#234F2D";
    position_type = "成功校區";
})
position8.addEventListener("click", function(){
    this.style.backgroundColor = "#234F2D";
    this.style.color = "#F0F0F0";
    position2.style.backgroundColor = "#F0F0F0";
    position2.style.color = "#234F2D";
    position3.style.backgroundColor = "#F0F0F0";
    position3.style.color = "#234F2D";
    position4.style.backgroundColor = "#F0F0F0";
    position4.style.color = "#234F2D";
    position5.style.backgroundColor = "#F0F0F0";
    position5.style.color = "#234F2D";
    position6.style.backgroundColor = "#F0F0F0";
    position6.style.color = "#234F2D";
    position7.style.backgroundColor = "#F0F0F0";
    position7.style.color = "#234F2D";
    position1.style.backgroundColor = "#F0F0F0";
    position1.style.color = "#234F2D";
    position_type = "東寧校區";
})
$(document).ready(function() {
    $('#bottom').click((event) => {
        event.preventDefault()
        $.get('./post', {
            pic: $('#pic_region-form input[name=pic_input]').val(),
            name: $('introduction_region-form input[name=introduction_input]').val(),
            bando: bando_type.val(),
            meat: meat_type.val(),
            position_type: position_type.val(),
            position_detail: $('#position_region-form input[name=position_input]').val(),
        }, (data) => {
            swal("Good job!", "Post success", "success");
        })
    }) 
});

        

