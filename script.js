        function minus1()
        {
            if (document.getElementById("text1").value > 0)
            {
            document.getElementById("text1").value -=1;
            document.getElementById("item").value -=1;
            var x;
            x = parseInt(document.getElementById("t1").value) ;
            x -=60;
            document.getElementById("t1").value = eval(x);
            document.getElementById("item1").value =eval(parseInt(document.getElementById("item1").value) - 60);
            

            }        
        }
        function plus1()
        {
            document.getElementById("text1").value++;
            document.getElementById("item").value ++;
            var x;
            x = parseInt(document.getElementById("t1").value) ;
            x +=60;
            document.getElementById("t1").value = eval(x);

            document.getElementById("item1").value =eval(parseInt(document.getElementById("item1").value) + 60);

        }
        function minus2()
        {
            if (document.getElementById("text2").value > 0){
            document.getElementById("text2").value -=1;
            document.getElementById("item").value -=1;
            var x;
            x = parseInt(document.getElementById("t2").value) ;
            x -=500;
            document.getElementById("t2").value = eval(x);
            document.getElementById("item1").value =eval(parseInt(document.getElementById("item1").value) - 500);

            }
        }
        function plus2()
        {
            document.getElementById("text2").value++;
            document.getElementById("item").value ++;
            var x;
            x = parseInt(document.getElementById("t2").value) ;
            x +=500;
            document.getElementById("t2").value = eval(x);
            document.getElementById("item1").value =eval(parseInt(document.getElementById("item1").value)+ 500);

        }
        function minus3()
        {
            if (document.getElementById("text3").value > 0)
{
            document.getElementById("text3").value -=1;
            document.getElementById("item").value -=1;
            var x;
            x = parseInt(document.getElementById("t3").value) ;
            x -=50;
            document.getElementById("t3").value = eval(x);
            document.getElementById("item1").value =eval(parseInt(document.getElementById("item1").value) - 50);

}
        }
        function plus3()
        {
            document.getElementById("text3").value++;
            document.getElementById("item").value ++;
            var x;
            x = parseInt(document.getElementById("t3").value) ;
            x +=50;
            document.getElementById("t3").value = eval(x);
            document.getElementById("item1").value =eval(parseInt(document.getElementById("item1").value) + 50);

        }
        
