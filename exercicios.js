
function calcularmedia()
{
      var soma=0, i=0;
      var notas= document.getElementById("notas").value;
      notas = notas.split(",");

      
      for(i=0; i<notas.length; i++)
      {
            soma+= Number(notas[i]);
      }
      document.getElementById("mostramedia").innerHTML=soma/notas.length;
}

function ex2()
{
      var n1 = Number(document.getElementById("n1").value);
      var n2 = Number(document.getElementById("n2").value);
      var n3 = Number(document.getElementById("n3").value);
      var n4 = Number(document.getElementById("n4").value);
      var n5 = Number(document.getElementById("n5").value);
      
      
      document.getElementById("shown1").innerHTML= n1;
      document.getElementById("respostan1").innerHTML= n1*n1;

      document.getElementById("shown2").innerHTML= n2;
      document.getElementById("respostan2").innerHTML= n2*n2;

      document.getElementById("shown3").innerHTML= n3;
      document.getElementById("respostan3").innerHTML= n3*n3;

      document.getElementById("shown4").innerHTML= n4;
      document.getElementById("respostan4").innerHTML= n4*n4;

      document.getElementById("shown5").innerHTML= n5;
      document.getElementById("respostan5").innerHTML= n5*n5;


}

function ex3()
{
      var x = document.getElementById("maior").value;
      x = x.split(" ");
      var i = 1, maior=0;
      
      
      if(x.length != 5)
      {
            document.getElementById("mostrarmaior").innerHTML= "tem que digitar 5 numeros";
      }
      else
      {
            maior = x[0];
            while(i < 5)
            {
                 if(x[i] > maior)
                 {
                       maior = x[i];
                 }
                 i++;
            }
      
      document.getElementById("mostrarmaior").innerHTML= "O maior número é: " + maior;
      
      }
}

function ex4()
{
      var maiores= 0;
      var menores= 0;
      var idade=(document.getElementById("idade").value);
      idade = idade.split(" ");
      var  i = idade.length, j=0;
      
      while(j < i)
      {
            if(idade[j] < 18)
            {
                  menores++;
            }else
            {
                  maiores++;
            }
            
            j++;
      }
      
      document.getElementById("mostraridade").innerHTML="Tem " + maiores + " maiores de idade e tem " + menores + " menores de idade";
}

function ex5()
{

var alt=document.getElementById("altura").value;
var sexo = document.getElementById("sexo").value;
var masculino = 0, feminino = 0, maior=[0, 0];
var i=0;
alt = alt.split(',');
sexo = sexo.split(',');

if(alt.length != 5 || sexo.length != 5)
{
     document.getElementById("resposta5").innerHTML= "tem que ser pelo menos 5 pessoas"; 
}
else
{

      while(i<5)
      {
            if(sexo[i].toUpperCase() == "M") 
            {
                  masculino++;
                  if(alt[i] > maior[0])
                  {
                        maior[0]= alt[i];
                        maior[1] = "masculino";
                  }
            }
            else if(sexo[i].toUpperCase() == "F")
            {
                  feminino++;
                  if(alt[i] > maior[0])
                  {
                        maior[0]= alt[i];
                        maior[1] = "feminino";
                  }
            }
      
            i++;
            
      }
      document.getElementById("resposta5").innerHTML = "Tem " + masculino + " Homens e " + feminino + " Mulheres<br/>e a maior pessoa tem " + maior[0] + " e é do sexo " + maior[1]; 
}
      
}

function ex6()
{

      var nomes= document.getElementById("nomes").value;
      var aux = [];
      
      nomes = nomes.split(" ");
      var i = nomes.length - 1;
      
      while(i > -1)
      {
            aux.push(nomes[i]);
            i--;
      }

      document.getElementById("resposta6").innerHTML = aux.join(" ");
}

function ex7()
{
      var data = document.getElementById("data").value;
      data = data.split("-");
      document.getElementById("dia").innerHTML = data[2];
      document.getElementById("mes").innerHTML = data[1];
      document.getElementById("ano").innerHTML = data[0];

}