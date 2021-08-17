'use strict'

$('#typeS, #dis, #verst').on('change', function(){
   sum(),
   days();
})


function sum (){
    var typeS = Number($('#typeS').val()),
        dis = Number($('#dis').val()),
        verst = Number($('#verst').val()),
        
        sum = typeS + dis + verst;  
        console.log(sum)
        $('.end').text(sum + "$")
        
        $({countNum: $('.end').text()}).animate({
            countNum : sum
        },
        {
            duration: 500,
            easing: 'swing',
            step: function(){
                $('.end').text(Math.floor(this.countNum))
            },
            complete: function(){
                $('.end').text(this.countNum + '$')
            }
        })
                                                
        }






function days (){
    var typeS1 = Number($('#typeS').val()),
        dis1 = Number($('#dis').val()),
        verst1 = Number($('#verst').val()),
        
        days = (typeS1/50) + (dis1/50) + (verst1/50);  
        console.log(days)
        $('.day').text(days)
        
        $({countNum: $('.day').text()}).animate({
            countNum : days
        },
        {
            duration: 500,
            easing: 'swing',
            step: function(){
                $('.day').text(Math.floor(this.countNum))
            },
            complete: function(){
                $('.day').text(this.countNum + 'д')
            }
        })
                                                
        }




























